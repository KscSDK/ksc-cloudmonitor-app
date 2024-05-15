import { DataQueryRequest, DataQueryResponse, DataSourceApi, MetricFindValue } from '@grafana/data';
import { MyQuery, MyDataSourceOptions, defaultQuery } from './types';
import {
  request,
  ParseQueryResult,
  ParseMetricQuery,
  variableConfig,
  replaceRealValue,
  withoutRegions,
  GenerateKs3ToMonitorRegion,
  requestKs3,
  GenerateKs3BusketOptions,
  transferRegionToKs3,
} from './utils';
import { MetricListItem } from './utils/interface';
import _ from 'lodash';
import { statisMetric, statisMetricBatch } from './services';
const moment = require('moment');

// quer界面需要解析的参数
// Region 区域
// Action 产品线接口参数
// ServiceName 产品线名称
// Instancealias Query变量显示别名
const filterQueryKeys = ['Region', 'Action', 'ServiceName', 'Instancealias'];

// 生成get请求参数
const generateExtenQuery = (queryResult: { [key: string]: any }) => {
  let otherUrl = '';
  for (const key in queryResult) {
    if (!filterQueryKeys.includes(key)) {
      const queryValue = replaceRealValue(queryResult[key]);
      otherUrl += `&${key}=${queryValue}`;
    }
  }
  return otherUrl;
};

// 生成请求实例ID
const generateInstanceIdList = (InstanceID: any[]) => {
  let dealId = [];
  if (InstanceID?.length > 1) {
    dealId = Array.isArray(InstanceID) ? InstanceID.map((i: any) => replaceRealValue(i?.value)) : [];
  } else {
    dealId = Array.isArray(InstanceID) ? replaceRealValue(InstanceID[0]?.value).split(',') : [];
  }
  dealId = dealId.filter((instanceItem: string) => instanceItem && instanceItem !== '');
  return dealId;
};

export class DataSource extends DataSourceApi<MyQuery, MyDataSourceOptions> {
  instanceSetting: any;
  backendSrv: any;
  templateSrv: any;
  url: string;

  constructor(instanceSettings: any, backendSrv: any, templateSrv: any) {
    super(instanceSettings);
    this.instanceSetting = instanceSettings;
    this.backendSrv = backendSrv;
    this.templateSrv = templateSrv;
    this.url = instanceSettings.url; // 代理url
  }

  async query(options: DataQueryRequest<MyQuery>): Promise<DataQueryResponse> {
    // 8小时
    const hours = 28800000;
    const { range, targets } = options;
    const from = range!.from.valueOf() + hours;
    const to = range!.to.valueOf() + hours;
    const StartTime = moment.utc(from).format();
    const EndTime = moment.utc(to).format();
    let errorlist: any = [];

    const requestTargets = targets.filter(
      (item) =>
        Array.isArray(item?.InstanceID) &&
        item.InstanceID.length > 0 &&
        item.MetricName?.value &&
        item.Namespace?.value &&
        item.Region?.value &&
        !item.hide
    );

    if (!requestTargets.length) {
      return { data: [] };
    }
    const queryResult = await Promise.allSettled(
      requestTargets.map((item) => {
        const { InstanceID, MetricName, Namespace, Period, Aggregate, Region } = item;
        const NameSpace = Namespace?.value;
        const aggregateValues = Aggregate ? Aggregate : defaultQuery.Aggregate;
        const aggregates = aggregateValues.map((i: any) => i.value);
        const dealId = generateInstanceIdList(InstanceID);
        const dealMetricName = replaceRealValue(MetricName?.value);
        const dealRegion = replaceRealValue(Region.value);
        const { action, version, method } = NameSpace === 'KCE' ? statisMetric : statisMetricBatch;
        const queryDataparams = {
          Namespace: NameSpace,
          Aggregate: aggregates?.length ? aggregates : ['Average'],
          StartTime,
          EndTime,
        };
        if (!dealId?.length) {
          return {};
        }
        if (Period?.value) {
          const dealPeriod = replaceRealValue(String(Period?.value));
          _.set(queryDataparams, 'Period', Number(dealPeriod));
        }
        if (NameSpace === 'KCE') {
          const extenUrl = generateExtenQuery(queryDataparams);
          return request(this.instanceSetting, `monitor`, {
            action,
            version,
            extenQuery: `${extenUrl}&MetricName=${dealMetricName}&Dimensions.0.Name=ClusterId&Dimensions.0.Value=${dealId[0]}`,
            method,
            region: dealRegion,
          });
        } else if (NameSpace === 'KS3') {
          _.set(
            queryDataparams,
            'Metrics',
            dealId.map((instanceItem: any) => ({
              InstanceID: instanceItem,
              MetricName: dealMetricName,
            }))
          );
          return request(this.instanceSetting, `monitor`, {
            action,
            version,
            postParams: { ...queryDataparams },
            method,
            region: GenerateKs3ToMonitorRegion(dealRegion),
          });
        } else {
          _.set(
            queryDataparams,
            'Metrics',
            dealId.map((instanceItem: any) => ({
              InstanceID: instanceItem,
              MetricName: dealMetricName,
            }))
          );
          return request(this.instanceSetting, `monitor`, {
            action,
            version,
            postParams: { ...queryDataparams },
            method,
            region: dealRegion,
          });
        }
      })
    )
      .then((res: any[]) => {
        const fulfilledRes = res.filter((i: any) => i.status === 'fulfilled');
        const result = fulfilledRes.map((item: any, index: number) => {
          if (item?.value?.data?.errorMessage || item.value.data?.error) {
            errorlist.push(item?.value?.data?.errorMessage || item.value.data?.error?.message);
          }
          const dealData =
            item.value.data?.getMetricStatisticsBatchResults || item.value.data?.getMetricStatisticsResult;
          return ParseQueryResult(dealData, requestTargets[index]);
        });
        return { data: _.flatten(result) };
      })
      .catch((err) => {
        return { data: [] };
      });
    // if (errorlist && errorlist?.length > 0) {
    //   const errorMessage = _.flatten(errorlist).join(',');
    //   alertError(errorMessage);
    // }
    return queryResult;
  }

  async testDatasource() {
    // 根据region 判断key 是否正确
    const testRegion: any = await this.getRegions();
    if (testRegion?.status === 200) {
      return {
        status: 'success',
        message: 'test success',
      };
    } else {
      return {
        status: 'error',
        message: `数据源测试失败${testRegion?.data?.Error.Message}`,
      };
    }
  }

  // 自定义变量回调函数
  async metricFindQuery(query: string, options?: any): Promise<MetricFindValue[]> {
    const queryResult = ParseMetricQuery(query);
    const { Region, Action, Instancealias = undefined, ServiceName } = queryResult;
    if (!ServiceName || !Region) return [];
    // k3自定义变量接口处理
    if (ServiceName === 'KS3') {
      const ks3Region = transferRegionToKs3(replaceRealValue(Region));
      const ks3QueryResult: any = await requestKs3(this.instanceSetting, `ks3/${ks3Region}`, {
        region: ks3Region,
        extenQuery: generateExtenQuery(queryResult),
      });
      return GenerateKs3BusketOptions(ks3QueryResult?.data);
    }
    const service = variableConfig[ServiceName] ? variableConfig[ServiceName].service : undefined;
    const currentMap = variableConfig[ServiceName][Action];
    const proxyKey = withoutRegions.includes(service)
      ? replaceRealValue(service)
      : `${replaceRealValue(service)}/${replaceRealValue(Region)}`;
    // 其他服务变量接口处理
    const doQueryResult: any = await request(this.instanceSetting, proxyKey, {
      action: Action,
      version: currentMap?.version,
      region: replaceRealValue(Region),
      extenQuery: generateExtenQuery(queryResult),
    });
    const resList: any[] = doQueryResult?.data[currentMap?.getDataKey] || [];
    const dealResList: MetricListItem[] = currentMap.backDataFn(resList, Instancealias);
    return dealResList;
  }

  getVariable(metric?: string) {
    const rs = this.templateSrv.replace((metric || '').trim());
    const valStr = rs.match(/\{([\w-,]+)\}/);
    // 判断是否为多选
    if (valStr) {
      return valStr[1].split(',');
    }
    return rs;
  }
  // 获取region
  async getRegions() {
    return request(this.instanceSetting, 'kec', {
      action: 'DescribeRegions',
      version: '2016-03-04',
    });
  }
}
