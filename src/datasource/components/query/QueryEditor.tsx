import React, { FC, useMemo, useState, useCallback, useRef, useEffect } from 'react';
import { useAsync } from 'react-use';
import { MyDataSourceOptions, MyQuery, defaultQuery } from '../../types';
import { LegacyForms, InlineField, InlineSwitch, MultiSelect, Input } from '@grafana/ui';
import { RegionSet, QueryType } from '../../utils/interface';
import { QueryEditorProps } from '@grafana/data';
import { DataSource } from '../../datasource';
import MetricSubSelect from '../common/MetricSubSelect';
import _ from 'lodash';
import '../../styles/common.css';
import { ServiceMap, generageCheckedNamespace, MonitorServices } from '../../type_monitors';
import {
  InstanceTypes,
  request,
  generageMetricOptions,
  generatePeriodOptions,
  dealQueryFilter,
  replaceRealValue,
  alertError,
  withoutIpServices,
  GenerageInstanceOptions,
  ClusterTypes,
  requestKs3,
  EbsInstanceTypes,
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
  QueryKrds,
  Querykec,
  QueryPGS,
  QueryKce,
  QueryKS3,
  QueryEbs,
} from '../services';
const { Select } = LegacyForms;
const AggregateOptions = [
  { label: '均值', value: 'Average' },
  { label: '最大值', value: 'Max' },
  { label: '最小值', value: 'Min' },
  { label: '求和', value: 'sum' },
];

export const ks3Regions = [
  { label: '北京', value: 'cn-beijing' },
  { label: '上海', value: 'cn-shanghai' },
  { label: '广州', value: 'cn-guangzhou' },
  { label: '香港', value: 'cn-hk-1' },
  { label: '金融专区（北京）', value: 'jr-beijing' },
  { label: '金融专区（上海）', value: 'jr-shanghai' },
];

const ks3DefaultMetrics = [
  { metricName: 'ks3.bucket.capacity.total.sd', namespace: 'KS3' },
  { metricName: 'ks3.bucket.capacity.total.ia', namespace: 'KS3' },
  { metricName: 'ks3.bucket.capacity.total.ar', namespace: 'KS3' },
];

type Props = QueryEditorProps<DataSource, MyQuery, MyDataSourceOptions>;

export const DatasourceContext = React.createContext({ projectOptions: [] });

const QueryEditor: FC<Props> = ({ onRunQuery, onChange, query, datasource, queries }) => {
  useEffect(() => {
    onRunQuery();
  }, [queries?.length, onRunQuery]);

  const metricMap = useRef<Map<any, any>>();
  const [isLoading, setLoading] = useState<boolean>(false);

  // instance可查询类型根据Namespace设置options
  const instanceTypeOptions = useMemo(() => {
    if (withoutIpServices.includes(query?.Namespace?.value)) {
      const filterOptions = InstanceTypes.filter((item: any) => item.value !== 'InstanceIp');
      if (query?.InstanceType && query?.InstanceType.value === 'InstanceIp') {
        onChange &&
          onChange({
            ...query,
            InstanceType: { value: 'InstanceId', label: 'As InstanceId' },
          });
      }
      return filterOptions;
    }
    return InstanceTypes;
  }, [query, onChange]);

  const { value: projectList } = useAsync(async () => {
    const resData: any = await request(datasource.instanceSetting, 'iam', {
      action: 'GetAccountAllProjectList',
      version: '2015-11-01',
    });
    return resData?.data.ListProjectResult.ProjectList.map((i: any) => ({
      ProjectId: i.ProjectId,
      ProjectName: i.ProjectName,
    }));
  }, [datasource.instanceSetting]);

  // 所有有权限projectid 生成查询string
  const projectQueryString = useMemo(() => {
    const namespace = query?.Namespace && query.Namespace?.value;
    if (!projectList || !projectList?.length || !namespace) {
      return '';
    }
    if (namespace === 'KRDS' || namespace === 'PGS') {
      return;
    }
    let queryString = '';
    let projectKey = namespace !== 'KCS' ? 'ProjectId' : 'iamProjectId';
    if (namespace === 'KS3') {
      return `projectIds=${projectList.map((item: any, index: number) => item.ProjectId).join(',')}`;
    }
    projectList.forEach((item: any, index: number) => {
      queryString += `&${projectKey}.${index + 1}=${item.ProjectId}`;
    });
    return queryString;
  }, [projectList, query.Namespace]);

  // 详情显示状态
  const [detailState, setDetail] = useState(false);
  // 生成namespace 下拉选项
  const NameSpaceOptions = useMemo(() => generageCheckedNamespace(datasource), [datasource]);
  // InstanceList
  const [instanceOptions, setInstanceOptions] = useState<any[]>([]);
  // 指标下拉options
  const [metricOptions, setMetricOptions] = useState<any[]>([]);
  // interval下拉options
  const [periodOptions, setPerionOptions] = useState<any[]>(
    query?.MetricName?.interval ? generatePeriodOptions(query.MetricName.interval) : []
  );
  // 获取数据其他查询条件
  const [extenInstanceQuery, setExtenQuery] = useState<string>('');

  const customOptions = useRef<any[]>(query?.InstanceID || []);

  // 获取region
  const { value: regionOptions } = useAsync(async () => {
    const regionRes: any = await request(datasource.instanceSetting, 'kec', {
      action: 'DescribeRegions',
      version: '2016-03-04',
    });
    const regionSet = regionRes?.data?.RegionSet || [];
    return regionSet.map((item: RegionSet) => ({
      label: `${item?.RegionName}`,
      value: item?.Region,
    }));
  }, []);

  // 不同service change后触发，filter
  const handleChange = useCallback((queryParams: QueryType) => {
    let extenParams = '';
    for (const key in queryParams) {
      if (Object.prototype.hasOwnProperty.call(queryParams, key)) {
        const element = queryParams[key];
        if ((typeof element === 'string' || typeof element === 'number') && element !== '') {
          extenParams += `&${key}=${element}`;
        } else if (Array.isArray(element)) {
          element.forEach((el, index) => {
            if (el !== '') {
              extenParams += `&${key}.${index + 1}=${el}`;
            }
          });
        } else if (key === 'Filter') {
          const filterString = dealQueryFilter(queryParams[key]);
          extenParams += `&${filterString}`;
        } else {
          extenParams += '';
        }
      }
    }
    setExtenQuery(extenParams ? extenParams : '');
  }, []);

  // KS 额外查询条件
  const handleChangeKs3 = useCallback((queryParams: QueryType) => {
    const { ProjectId } = queryParams;
    const extenIds = Array.isArray(ProjectId) && ProjectId.length ? `&projectIds=${ProjectId.join(',')}` : '';
    setExtenQuery(extenIds);
  }, []);

  // 渲染不同service的可选项
  const renderByService = (service: string) => {
    switch (service) {
      case 'KEC':
        return <Querykec onChange={_.debounce(handleChange, 500)} />;
      case 'EIP':
        return <QueryIp onChange={_.debounce(handleChange, 500)} />;
      case 'BWS':
        return <QueryBws onChange={_.debounce(handleChange, 500)} />;
      case 'EPC':
      case 'EPCGPU':
        return <QueryEpc onChange={_.debounce(handleChange, 500)} />;
      case 'KCS':
        return <QueryKcs onChange={_.debounce(handleChange, 500)} />;
      case 'NAT':
        return <QueryNat onChange={_.debounce(handleChange, 500)} />;
      case 'SLB':
        return <QuerySlb onChange={_.debounce(handleChange, 500)} />;
      case 'Listener':
        return <QueryListener onChange={_.debounce(handleChange, 500)} />;
      case 'VPC':
        return <QueryVpc onChange={_.debounce(handleChange, 500)} />;
      case 'KRDS':
        return <QueryKrds onChange={_.debounce(handleChange, 500)} />;
      case 'PEER':
        return <QueryPeering onChange={_.debounce(handleChange, 500)} />;
      case 'PGS':
        return <QueryPGS onChange={_.debounce(handleChange, 500)} />;
      case 'KCE':
        return <QueryKce onChange={_.debounce(handleChange, 500)} />;
      case 'KS3':
        return <QueryKS3 onChange={_.debounce(handleChangeKs3, 500)} />;
      case 'EBS':
        return <QueryEbs onChange={_.debounce(handleChange, 500)} />;
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
    onChange({
      ...query,
      Namespace: namespace,
      MetricName: {},
      InstanceID: [],
      Period: {},
    });
    onRunQuery();
  };
  // region change
  const onRegionChange = (region: any) => {
    setInstanceOptions([]);
    setMetricOptions([]);
    // 获取实例列表
    onChange({ ...query, Region: region });
    try {
      region?.value && localStorage.setItem('region', region?.value);
    } catch (error) {
      console.error(error);
    }
  };

  // 实例chage
  const onInstanceChange = (instanceId: any) => {
    onChange({
      ...query,
      InstanceID: Array.isArray(instanceId) ? instanceId : [instanceId],
    });
  };
  // 指标change
  const onMetricChange = (metric: any) => {
    onChange({ ...query, MetricName: metric, Period: defaultQuery.Period });
    if (metric.interval) {
      const periodOptions = generatePeriodOptions(metric.interval);
      setPerionOptions(periodOptions);
    }
    // 如果metric含有sub Select，暂不请求接口
    if (metric.metricSubChose) {
      return;
    }
    onRunQuery();
  };

  const onMetricSubSeletChange = (concat: string) => {
    const behandName = query.MetricName.value.split('[')[0];
    const allMetricName = `${behandName}[${concat}]`;
    onChange({
      ...query,
      MetricName: { ...query.MetricName, value: allMetricName },
    });
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
    async (extraParams?: string) => {
      const service = query.Namespace.service;
      const serviceItem = query?.Namespace?.value
        ? MonitorServices.find((item) => item.namespace === query?.Namespace?.value)
        : undefined;
      if (!query.Region || !serviceItem) {
        return console.error(`ServiceConfig 中未找到${service}或region为空`);
      }
      setMetricOptions([]);
      setInstanceOptions([]);
      customOptions.current = [];
      // const namespace = query.Namespace.value;
      const extendQuery = !extraParams || typeof extraParams !== 'string' ? extraParams : '';
      const projectQuery = service === 'ebs' ? '' : `${projectQueryString ? projectQueryString : ''}`;
      // 根据filter 是否含有project 判断query string 是否将project 过滤
      const filterProjectQuery =
        extraParams && extraParams.includes('ProjectId')
          ? extraParams
          : (extraParams ? extraParams : '') + projectQuery;
      // 替换region 如果是变量
      const dealRegion = replaceRealValue(query.Region.value);
      // ProjectId.1=104139, 101606
      const currentService = ServiceMap.get(`${query.Namespace.service}/${dealRegion}`);
      setLoading(true);
      const instanceIdRes: any = await request(datasource.instanceSetting, `${query.Namespace.service}/${dealRegion}`, {
        action: serviceItem?.instanceAction || '',
        version: currentService?.version || '',
        extenQuery: extendQuery
          ? extendQuery + `${filterProjectQuery ? filterProjectQuery : ''}`
          : `${filterProjectQuery ? filterProjectQuery : ''}`,
        region: dealRegion,
      });
      setLoading(false);
      if (instanceIdRes?.status !== 200) {
        alertError(instanceIdRes?.data?.Error?.Message);
        return;
      }
      if (instanceIdRes && instanceIdRes?.data) {
        let opsItem = GenerageInstanceOptions[query?.Namespace?.value].options(
          instanceIdRes?.data,
          query.InstanceType?.value || 'InstanceId'
        );
        setInstanceOptions([...opsItem]);
      }
    },
    [query, datasource.instanceSetting, projectQueryString]
  );

  const getKs3Buckets = useCallback(
    async (extraParams?: string) => {
      if (!query.Region) {
        return console.error('region为空');
      }
      setMetricOptions([]);
      setInstanceOptions([]);
      customOptions.current = [];
      const extendQuery = !extraParams || typeof extraParams !== 'string' ? extraParams : '';
      const projectQuery = `${projectQueryString ? projectQueryString : ''}`;
      // 根据filter 是否含有project 判断query string 是否将project 过滤
      const filterProjectQuery =
        extraParams && extraParams.includes('projectIds')
          ? extraParams
          : (extraParams ? extraParams : '') + projectQuery;
      // 替换region 如果是变量
      const dealRegion = replaceRealValue(query.Region.value);
      // ks3 region
      const ks3Region = dealRegion;
      // projectIds=104139,101606
      setLoading(true);
      const bucketsRes: any = await requestKs3(datasource.instanceSetting, `${query.Namespace.service}/${ks3Region}`, {
        extenQuery: extendQuery
          ? extendQuery + `${filterProjectQuery ? filterProjectQuery : ''}`
          : `${filterProjectQuery ? filterProjectQuery : ''}`,
        region: ks3Region,
      });
      setLoading(false);
      if (bucketsRes && bucketsRes?.length) {
        setInstanceOptions([...bucketsRes]);
      }
    },
    [query, datasource.instanceSetting, projectQueryString]
  );

  // 生成metric options
  const generateMetricOptions = (metricsList: any[]) => {
    metricMap.current = generageMetricOptions(metricsList, query.Namespace.value);
    const metricMapKeys = Array.from(metricMap.current.keys());
    const metricsOptions = metricMapKeys.map((item: any) => {
      const metricMapItem = metricMap.current && metricMap.current.get(item);
      return {
        label: item,
        value: item,
        unit: metricMapItem['unit'],
        interval: metricMapItem && metricMapItem['Period'] ? metricMapItem['Period'] : '60',
        metricSubChose: metricMapItem && metricMapItem['metricSubChose'] ? metricMapItem['metricSubChose'] : undefined,
      };
    });
    setMetricOptions(metricsOptions);
  };

  const getEbsMetricNames = async (instanceIdItem: string) => {
    const { InstanceId, VolumeId, MountPoint } = JSON.parse(`{${instanceIdItem}}`) || {};
    let defaultExtenQuery = `&Dimensions.0.Name=VolumeId&Dimensions.0.Value=${VolumeId}&Dimensions.1.Name=Device&Dimensions.0.Value=${MountPoint}&Namespace=KEC/EBS&PageIndex=1&InstanceId=${InstanceId}`;
    const metricNamesData: any = await request(datasource.instanceSetting, `monitor`, {
      action: 'ListMetrics',
      version: '2010-05-25',
      extenQuery: defaultExtenQuery,
      region: replaceRealValue(query.Region.value),
    });
    return metricNamesData?.data?.listMetricsResult?.metrics?.member;
  };

  // 请求指标接口
  const getMetricNames = async () => {
    // 变量多选值，获取需根据，分割
    const instanceIdItem = query.InstanceID?.[0]?.value || '';
    const instanceid = replaceRealValue(instanceIdItem).split(',')[0];
    const namespace = query.Namespace.value;
    if (!instanceid) {
      return;
    }
    let defaultExtenQuery = `&InstanceID=${instanceid}&Namespace=${namespace}&PageIndex=1`;
    if (namespace === 'KCE') {
      defaultExtenQuery = `&Dimensions.0.Name=ClusterId&Dimensions.0.Value=${instanceid}&Namespace=${namespace}&PageIndex=1`;
    } else if (namespace === 'EBS') {
      const realInstanceItem = replaceRealValue(instanceIdItem);
      if (typeof realInstanceItem === 'string') {
        const { InstanceId, VolumeId } = JSON.parse(`{${realInstanceItem}}`) || {};
        defaultExtenQuery = `&Dimensions.0.Name=VolumeId&Dimensions.0.Value=${VolumeId}&Namespace=KEC/EBS&PageIndex=1&InstanceId=${InstanceId}`;
      }
    }
    const metricNamesData: any = await request(datasource.instanceSetting, `monitor`, {
      action: 'ListMetrics',
      version: '2010-05-25',
      extenQuery: defaultExtenQuery,
      region: replaceRealValue(query.Region.value),
    });
    if (metricNamesData?.status !== 200) {
      alertError(metricNamesData?.data?.Error?.Message || metricNamesData?.data?.error?.message);
      return;
    }
    let metricsList = metricNamesData?.data?.listMetricsResult?.metrics?.member;
    if (namespace === 'KS3' && metricsList && metricsList.length) {
      metricsList = metricsList.concat(ks3DefaultMetrics);
    } else if (namespace === 'EBS' && !metricsList?.length) {
      // ebs 默认监控查询为空，进行二次查询，添加盘符信息参数
      metricsList = await getEbsMetricNames(replaceRealValue(instanceIdItem));
    }
    generateMetricOptions(metricsList);
  };

  // 显示Instance ID 产品线
  const NormalInstanceField = (
    <>
      <InlineField labelWidth={18} label="InstanceID">
        <div className="flex-content">
          <Select
            width={180}
            options={instanceTypeOptions}
            defaultValue={{}}
            value={query.InstanceType ? query.InstanceType : defaultQuery.InstanceType}
            onChange={(instanceType) => {
              onChange({
                ...query,
                InstanceType: instanceType,
                InstanceID: [],
              });
            }}
            isSearchable={true}
            placeholder=" "
          />
          <MultiSelect
            width={40}
            options={[...instanceOptions, ...customOptions.current]}
            defaultValue={query.InstanceID}
            value={query.InstanceID}
            onChange={onInstanceChange}
            onOpenMenu={() => getInstanceIds(extenInstanceQuery)}
            onBlur={() => {
              if (query?.MetricName && query?.MetricName.value) {
                onRunQuery();
              }
            }}
            isLoading={isLoading}
            closeMenuOnSelect={false}
            allowCustomValue={true}
            isSearchable={true}
            placeholder=" "
            onCreateOption={(v: any) => {
              const customValue = { value: v, label: v };
              customOptions.current = [...customOptions.current, customValue];
              onChange({ ...query, InstanceID: [customValue] });
            }}
          />
        </div>
      </InlineField>
    </>
  );
  // KCE 获取集群表单项
  const KceInstanceField = (
    <>
      <InlineField labelWidth={18} label="ClusterID">
        <div className="flex-content">
          <Select
            width={180}
            options={ClusterTypes}
            defaultValue={{}}
            value={query.InstanceType ? query.InstanceType : 'InstanceId'}
            onChange={(instanceType) => {
              onChange({
                ...query,
                InstanceType: instanceType,
                InstanceID: [],
              });
            }}
            isSearchable={true}
            placeholder=" "
          />
          <Select
            width={40}
            options={[...instanceOptions]}
            defaultValue={query.InstanceID?.[0]}
            value={query.InstanceID?.[0]}
            onChange={onInstanceChange}
            onOpenMenu={() => getInstanceIds(extenInstanceQuery)}
            onBlur={() => {
              if (query?.MetricName && query?.MetricName.value) {
                onRunQuery();
              }
            }}
            closeMenuOnSelect={false}
            allowCustomValue={true}
            isSearchable={true}
            placeholder=" "
            onCreateOption={(v: any) => {
              const customValue = { value: v, label: v };
              onChange({ ...query, InstanceID: [customValue] });
            }}
          />
        </div>
      </InlineField>
    </>
  );
  // EBS 实例查询
  const EbsInstanceField = (
    <>
      <InlineField labelWidth={18} label="VolumeId">
        <div className="flex-content">
          <Select
            width={180}
            options={EbsInstanceTypes}
            defaultValue={{}}
            value={query.InstanceType ? query.InstanceType : 'InstanceId'}
            onChange={(instanceType) => {
              onChange({
                ...query,
                InstanceType: instanceType,
                InstanceID: [],
              });
            }}
            isSearchable={true}
            placeholder=" "
          />
          <Select
            isLoading={isLoading}
            width={40}
            options={[...instanceOptions]}
            defaultValue={query.InstanceID?.[0]}
            value={query.InstanceID?.[0]}
            onChange={onInstanceChange}
            onOpenMenu={() => getInstanceIds(extenInstanceQuery)}
            onBlur={() => {
              if (query?.MetricName && query?.MetricName.value) {
                onRunQuery();
              }
            }}
            closeMenuOnSelect={false}
            allowCustomValue={true}
            isSearchable={true}
            placeholder=" "
            onCreateOption={(v: any) => {
              const customValue = { value: v, label: v };
              onChange({ ...query, InstanceID: [customValue] });
            }}
          />
        </div>
      </InlineField>
    </>
  );
  const KS3InstanceField = (
    <>
      <InlineField labelWidth={18} label="Bucket">
        <MultiSelect
          width={35}
          options={[...instanceOptions, ...customOptions.current]}
          defaultValue={query.InstanceID}
          value={query.InstanceID}
          onChange={onInstanceChange}
          onOpenMenu={() => getKs3Buckets(extenInstanceQuery)}
          onBlur={() => {
            if (query?.MetricName && query?.MetricName.value) {
              onRunQuery();
            }
          }}
          isLoading={isLoading}
          closeMenuOnSelect={false}
          allowCustomValue={true}
          isSearchable={true}
          placeholder=" "
          onCreateOption={(v: any) => {
            const customValue = { value: v, label: v };
            customOptions.current = [...customOptions.current, customValue];
            onChange({ ...query, InstanceID: [customValue] });
          }}
        />
      </InlineField>
    </>
  );
  // 根据nameSpace 渲染不同InstanceID Field
  const renderInstanceField = (namespace: string) => {
    if (namespace === 'KCE') {
      return KceInstanceField;
    } else if (namespace === 'KS3') {
      return KS3InstanceField;
    } else if (namespace === 'EBS') {
      return EbsInstanceField;
    } else {
      return NormalInstanceField;
    }
  };

  return (
    <>
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
      {renderInstanceField(query?.Namespace?.value)}
      <InlineField labelWidth={18} label="MetricName" className="upper-flex-content">
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
            <MetricSubSelect
              subChosed={query.MetricName['metricSubChose']}
              onChange={onMetricSubSeletChange}
              defaultValue={query.MetricName?.value}
            />
          )}
          {query.MetricName && query.MetricName['unit'] && (
            <span style={{ marginLeft: '8px', lineHeight: '32px' }}>（单位：{query.MetricName['unit'] || ''}）</span>
          )}
        </div>
      </InlineField>
      <InlineField labelWidth={18} label="Metric alias">
        <Input
          width={35}
          defaultValue={query.Alias}
          placeholder="Metric alias"
          onChange={_.debounce((e: any) => {
            onChange({ ...query, Alias: e.target.value });
            onRunQuery();
          }, 1000)}
        />
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
            width={40}
            options={AggregateOptions}
            value={query.Aggregate ? query.Aggregate : defaultQuery.Aggregate}
            onChange={(Aggregate: any) => onChange({ ...query, Aggregate })}
            onBlur={() => onRunQuery()}
            closeMenuOnSelect={false}
            placeholder=" "
            isClearable={false}
          />
        </div>
      </InlineField>

      <InlineField label="Show Instance Query Details">
        <>
          <InlineSwitch
            value={detailState}
            onChange={(v: { target: any }) => {
              if (!v.target.checked) {
                setExtenQuery('');
              }
              setDetail(v.target.checked);
            }}
          />
          <span style={{ marginLeft: '8px' }}>
            (按照具体的查询条件搜索实例，
            <a
              style={{ color: 'cornflowerblue' }}
              onClick={() => {
                const hrefItem = MonitorServices.find((i: any) => i.namespace === query?.Namespace?.value);
                if (hrefItem && hrefItem?.apihref) {
                  window.open(hrefItem?.apihref);
                }
              }}
            >
              详情见各产品线文档
            </a>
            )
          </span>
        </>
      </InlineField>
      {/* 渲染不同service 的可选query */}
      <DatasourceContext.Provider value={{ projectOptions: projectList }}>
        {detailState ? (
          <>
            <div className="detail-content-fileds">{renderByService(query.Namespace?.value)}</div>
          </>
        ) : null}
      </DatasourceContext.Provider>
    </>
  );
};

export default QueryEditor;
