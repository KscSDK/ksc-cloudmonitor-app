import React, { FC, useMemo, useState, useCallback, useRef } from 'react';
import { useAsync } from 'react-use';
import { MyDataSourceOptions, MyQuery, defaultQuery } from '../../types';
import { LegacyForms, InlineField, InlineSwitch, MultiSelect } from '@grafana/ui';
import { RegionSet, QueryType } from '../../utils/interface';
import { QueryEditorProps } from '@grafana/data';
import { DataSource } from '../../datasource';
import MetricSubSelect from '../common/MetricSubSelect';
// import GetIamData from '../../hooks/useIamData';
import _ from 'lodash';
import '../../styles/common.css';
import { ServiceMap, generageCheckedNamespace, MonitorServices } from '../../type_monitors';
import {
  InstanceTypes,
  dealInstanceByService,
  request,
  generageMetricOptions,
  generatePeriodOptions,
  dealInstanceRequest,
  dealQueryFilter,
  replaceRealValue,
} from '../../utils';
import {
  QueryPeering,
  QueryListener,
  QueryIp,
  QueryBws,
  QueryEpc,
  QueryKcs,
  QueryNat,
  QuerySlb,
  QueryVpc,
  QueryKec,
  QueryKrds,
  QueryPGS,
} from '../services';

const { Select } = LegacyForms;
const AggregateOptions = [
  { label: '均值', value: 'Average' },
  { label: '最大值', value: 'Max' },
  { label: '最小值', value: 'Min' },
];
type Props = QueryEditorProps<DataSource, MyQuery, MyDataSourceOptions>;
export const DatasourceContext = React.createContext({ projectOptions: [] });
const QueryEditor: FC<Props> = ({ onRunQuery, onChange, query, datasource, queries }) => {
  const metricMap = useRef<Map<any, any>>();
  // 当前namespace
  const serviceItem = useMemo(() => {
    return query?.Namespace?.value
      ? MonitorServices.find((item) => item.namespace === query?.Namespace?.value)
      : undefined;
  }, [query]);

  const { value: projectList } = useAsync(async () => {
    const {
      data: {
        ListProjectResult: { ProjectList },
      },
    } = await request(datasource.instanceSetting, 'iam', {
      action: 'GetAccountAllProjectList',
      version: '2015-11-01',
    });
    return ProjectList.map((i: any) => ({ ProjectId: i.ProjectId, ProjectName: i.ProjectName }));
  }, [datasource.instanceSetting]);

  const projectQueryString = useMemo(() => {
    const namespace = query?.Namespace && query.Namespace?.value;
    if (!projectList || !projectList?.length || !namespace) {
      return '';
    }
    let queryString = '';
    let projectKey = namespace !== 'KRDS' || namespace !== 'KCS' ? 'ProjectId' : 'iamProjectId';
    projectList.forEach((item: any, index: number) => {
      queryString += `&${projectKey}.${index + 1}=${item.ProjectId}`;
    });
    return queryString;
  }, [projectList, query.Namespace]);

  // 详情显示状态
  const [detailState, setDetail] = useState(false);
  // instance筛选类型
  const [instanceType, setInstanceType] = useState<any>(InstanceTypes[0]);
  // 生成namespace 下拉选项
  const NameSpaceOptions = useMemo(() => generageCheckedNamespace(datasource), [datasource]);
  // InstanceList
  const [instanceOptions, setInstanceOptions] = useState<any[]>([]);
  // 指标下拉options
  const [metricOptions, setMetricOptions] = useState<any[]>([]);
  // interval下拉options
  const [periodOptions, setPerionOptions] = useState<any[]>([]);
  // 获取数据其他查询条件
  const [extenInstanceQuery, setExtenQuery] = useState<string>();
  const [customOptions, setCustomOptions] = useState<any[]>([]);

  // 获取region
  const { value: regionOptions } = useAsync(async () => {
    const regionRes = await request(datasource.instanceSetting, 'kec', {
      action: 'DescribeRegions',
      version: '2016-03-04',
    });
    const regionSet = regionRes?.data?.RegionSet || [];
    return regionSet.map((item: RegionSet) => ({
      label: `${item?.RegionName}`,
      value: item?.Region,
    }));
  }, []);

  // 不同service change后触发
  const handleChange = useCallback((query: QueryType) => {
    let extenParams = '';
    for (const key in query) {
      if (Object.prototype.hasOwnProperty.call(query, key)) {
        const element = query[key];
        console.log('element', element);
        if ((typeof element === 'string' || typeof element === 'number') && element !== '') {
          extenParams += `&${key}=${element}`;
        } else if (Array.isArray(element)) {
          element.forEach((el, index) => {
            if (el && el !== '') {
              console.log('key', key);
              extenParams += `&${key}.${index + 1}=${el}`;
            }
          });
        } else if (key === 'Filter') {
          const filterString = dealQueryFilter(query[key]);
          extenParams += `&${filterString}`;
        } else {
          extenParams += '';
        }
      }
    }
    console.log('extenParams', extenParams);
    setExtenQuery(extenParams);
  }, []);

  // 渲染不同service的可选项
  const renderByService = (service: string) => {
    switch (service) {
      case 'KEC':
        return <QueryKec onChange={_.debounce(handleChange, 1000)} />;
      case 'EIP':
        return <QueryIp onChange={_.debounce(handleChange, 1000)} />;
      case 'BWS':
        return <QueryBws onChange={_.debounce(handleChange, 1000)} />;
      case 'EPC':
      case 'GEPC':
        return <QueryEpc onChange={_.debounce(handleChange, 1000)} />;
      case 'KCS':
        return <QueryKcs onChange={_.debounce(handleChange, 1000)} />;
      case 'NAT':
        return <QueryNat onChange={_.debounce(handleChange, 1000)} />;
      case 'SLB':
        return <QuerySlb onChange={_.debounce(handleChange, 1000)} />;
      case 'Listener':
        return <QueryListener onChange={_.debounce(handleChange, 1000)} />;
      case 'VPC':
        return <QueryVpc onChange={_.debounce(handleChange, 1000)} />;
      case 'KRDS':
        return <QueryKrds onChange={_.debounce(handleChange, 1000)} />;
      case 'PEER':
        return <QueryPeering onChange={_.debounce(handleChange, 1000)} />;
      case 'PGS':
        return <QueryPGS onChange={_.debounce(handleChange, 1000)} />;
      default:
        return null;
    }
  };

  // namespace变更
  const onNamespaceChange = (namespace: any) => {
    // name space change 其他select 值重置
    setExtenQuery('');
    setInstanceOptions([]);
    setMetricOptions([]);
    setPerionOptions([]);
    onChange({ ...query, Namespace: namespace, MetricName: {}, InstanceID: [], Period: {} });
    onRunQuery();
  };
  // region change
  const onRegionChange = (region: any) => {
    setInstanceOptions([]);
    setMetricOptions([]);
    setPerionOptions([]);
    // 获取实例列表
    onChange({ ...query, Region: region });
    try {
      localStorage.setItem('region', region.value);
    } catch (error) {
      console.error(error);
    }
  };

  // 实例chage
  const onInstanceChange = (instanceId: any) => {
    onChange({ ...query, InstanceID: instanceId });
    onRunQuery();
  };
  // 指标change
  const onMetricChange = (metric: any) => {
    if (metric.interval) {
      const periodOptions = generatePeriodOptions(metric.interval);
      setPerionOptions(periodOptions);
    }
    onChange({ ...query, MetricName: metric, Period: defaultQuery.Period, Aggregate: defaultQuery.Aggregate });
    // 如果metric含有sub Select，暂不请求接口
    if (metric.metricSubChose) {
      return;
    }
    onRunQuery();
  };

  const onMetricSubSeletChange = (concat: string) => {
    const behandName = query.MetricName.value.split('[')[0];
    const allMetricName = `${behandName}[${concat}]`;
    onChange({ ...query, MetricName: { ...query.MetricName, value: allMetricName } });
    onRunQuery();
  };
  // period change
  const onPeriodChange = (period: any) => {
    onChange({ ...query, Period: period });
    onRunQuery();
  };

  /** 请求实例列表接口
   * namespace： 业务线
   */
  const getInstanceIds = useCallback(
    async (extenQuery?: string) => {
      setMetricOptions([]);
      setPerionOptions([]);
      setInstanceOptions([]);
      const service = query.Namespace.service;
      const namespace = query.Namespace.value;

      if (!query.Region || !serviceItem) {
        return console.error(`ServiceConfig 中未找到${service}或region为空`);
      }

      // 替换region 如果是变量
      const dealRegion = replaceRealValue(query.Region.value);
      // ProjectId.1=104139, 101606
      const currentService = ServiceMap.get(`${query.Namespace.service}/${dealRegion}`);
      // 根据filter 是否含有project 判断query string 是否将project 过滤
      let filterProjectQuery =
        extenInstanceQuery && extenInstanceQuery.includes('ProjectId')
          ? extenInstanceQuery
          : namespace === 'PGS' || namespace === 'KRDS'
          ? extenInstanceQuery + '&ProjectId=0'
          : extenInstanceQuery + `${projectQueryString}`;
      const instanceIdRes = await request(datasource.instanceSetting, `${query.Namespace.service}/${dealRegion}`, {
        action: serviceItem?.instanceAction || '',
        version: currentService?.version || '',
        extenQuery: extenQuery ? extenQuery + `${filterProjectQuery}` : `${filterProjectQuery}`,
        region: dealRegion,
      });
      if (!instanceIdRes || instanceIdRes?.data) {
        const instanceData = dealInstanceRequest(service, instanceIdRes?.data);
        const instanceOptions = dealInstanceByService(namespace, instanceData, instanceType.value);
        setInstanceOptions(instanceOptions);
      }
    },
    [datasource.instanceSetting, instanceType.value, query, serviceItem, extenInstanceQuery, projectQueryString]
  );

  // 请求指标接口
  const getMetricNames = async () => {
    // 变量多选值，获取需根据，分割
    const instanceIdItem = query.InstanceID?.[0]?.value || '';
    const instanceid = replaceRealValue(instanceIdItem).split(',')[0];
    const namespace = query.Namespace.value;
    if (!instanceid) {
      return;
    }
    const metricNamesData = await request(datasource.instanceSetting, 'monitor', {
      action: 'ListMetrics',
      version: '2010-05-25',
      extenQuery: `InstanceID=${instanceid}&Namespace=${namespace}&PageIndex=1`,
      region: replaceRealValue(query.Region.value),
    });
    const metricsList = metricNamesData?.data?.listMetricsResult?.metrics?.member;
    metricMap.current = generageMetricOptions(metricsList);
    const metricMapKeys = Array.from(metricMap.current.keys());
    const metricsOptions = metricMapKeys.map((item: any) => {
      const metricMapItem = metricMap.current && metricMap.current.get(item);
      return {
        label: item,
        value: item,
        interval: metricMapItem && metricMapItem['Period'] ? metricMapItem['Period'] : '60',
        metricSubChose: metricMapItem && metricMapItem['metricSubChose'] ? metricMapItem['metricSubChose'] : undefined,
      };
    });
    setMetricOptions(metricsOptions);
  };
  return (
    <div>
      <InlineField labelWidth={18} label="Namespace">
        <Select width={180} options={NameSpaceOptions} value={query.Namespace} onChange={onNamespaceChange} />
      </InlineField>
      <InlineField labelWidth={18} label="Region">
        <Select
          allowCustomValue={true}
          isSearchable={true}
          isClearable={true}
          width={180}
          options={regionOptions}
          value={query.Region}
          onChange={onRegionChange}
          placeholder=" "
        />
      </InlineField>
      <InlineField labelWidth={18} label="InstanceID">
        <div className="flex-content">
          <Select
            width={180}
            options={InstanceTypes}
            value={instanceType}
            onChange={(instanceType) => {
              setInstanceType(instanceType);
              onChange({ ...query, InstanceID: [] });
            }}
            allowCustomValue={true}
            isSearchable={true}
            placeholder=" "
          />
          <MultiSelect
            width={80}
            options={[...instanceOptions, ...customOptions]}
            value={query.InstanceID}
            onChange={onInstanceChange}
            onOpenMenu={getInstanceIds}
            allowCustomValue={true}
            isSearchable={true}
            placeholder=" "
            onCreateOption={(v: any) => {
              const customValue = { value: v, label: v };
              setCustomOptions([...customOptions, customValue]);
              onChange({ ...query, InstanceID: [customValue] });
            }}
          />
        </div>
      </InlineField>
      <InlineField labelWidth={18} label="MetricName">
        <div className="flex-content">
          <Select
            width={180}
            options={metricOptions}
            value={query.MetricName}
            allowCustomValue={true}
            isSearchable={true}
            onChange={onMetricChange}
            onOpenMenu={getMetricNames}
            placeholder=" "
          />
          {query.MetricName?.['metricSubChose'] && (
            <MetricSubSelect subChosed={query.MetricName['metricSubChose']} onChange={onMetricSubSeletChange} />
          )}
        </div>
      </InlineField>
      <InlineField labelWidth={18} label="Period" tooltip="(时间单位：秒)">
        <div className="flex-content">
          <Select
            allowCustomValue={true}
            isSearchable={true}
            width={180}
            options={periodOptions}
            value={query.Period}
            onChange={onPeriodChange}
            placeholder=" "
          />
          <MultiSelect
            width={80}
            options={AggregateOptions}
            value={query.Aggregate ? query.Aggregate : defaultQuery.Aggregate}
            onChange={(Aggregate: any) => {
              onChange({ ...query, Aggregate });
              onRunQuery();
            }}
            placeholder=" "
            isClearable={false}
          />
        </div>
      </InlineField>
      <InlineField label="Show details">
        <div>
          <InlineSwitch value={detailState} onChange={(v: { target: any }) => setDetail(v.target.checked)} />
          <span style={{ marginLeft: '8px' }}>(按照具体的查询条件搜索实例，默认拉取前 20 条实例)</span>
        </div>
      </InlineField>
      {/* 渲染不同service 的可选query */}
      <DatasourceContext.Provider value={{ projectOptions: projectList }}>
        {detailState ? renderByService(query.Namespace?.value) : null}
      </DatasourceContext.Provider>
    </div>
  );
};

export default QueryEditor;
