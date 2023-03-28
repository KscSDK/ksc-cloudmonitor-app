import { MetricType, InstanceConfig, InstanceItem } from './interface';
import _ from 'lodash';
import { getTemplateSrv } from '@grafana/runtime';
// 获取返回数据instance data
export const dealInstanceRequest = (service: string, data: any) => {
  switch (service) {
    case 'kec':
      return data?.InstancesSet;
    case 'eip':
      return data?.AddressesSet;
    case 'kcs':
      return data?.Data?.list || [];
    case 'vpc':
      return data?.NatSet || data?.VpcPeeringConnectionSet || [];
    case 'krds':
      return data?.Data?.Instances || [];
    case 'slb':
      return data?.LoadBalancerDescriptions || data?.ListenerSet || [];
    case 'bws':
      return data?.BandWidthShareSet;
    case 'epc':
      return data?.HostSet;
    case 'postgresql':
      return data?.Data?.Instances || [];
    default:
      break;
  }
};
const config: InstanceConfig = {
  KEC: {
    InstanceId: 'InstanceId',
    InstanceName: 'InstanceName',
    InstanceIp: 'PrivateIpAddress',
  },
  EIP: {
    InstanceId: 'AllocationId',
    InstanceName: 'PublicIp',
    InstanceIp: 'PublicIp',
  },
  KCS: {
    InstanceId: 'cacheId',
    InstanceName: 'name',
    InstanceIp: 'vip',
  },
  NAT: {
    InstanceId: 'NatId',
    InstanceName: 'NatName',
    InstanceIp: 'NatIpSet[0].NatIp',
  },
  PEER: {
    InstanceId: 'VpcPeeringConnectionId',
    InstanceName: 'PeeringName_VpcPeeringConnectionType',
    InstanceIp: 'NatIpSet[0].NatIp',
  },
  KRDS: {
    InstanceId: 'DBInstanceIdentifier',
    InstanceName: 'DBInstanceName',
    InstanceIp: 'Vip',
  },
  SLB: {
    InstanceId: 'LoadBalancerId',
    InstanceName: 'LoadBalancerName',
    InstanceIp: 'PublicIp',
  },
  Listener: {
    InstanceId: 'ListenerId',
    InstanceName: 'ListenerName',
    InstanceIp: 'PublicIp',
  },
  BWS: {
    InstanceId: 'BandWidthShareId',
    InstanceName: 'BandWidthShareName',
    InstanceIp: 'PublicIp',
  },
  EPC: {
    InstanceId: 'HostId',
    InstanceName: 'HostName',
    InstanceIp: '',
  },
  PGS: {
    InstanceId: 'DBInstanceIdentifier',
    InstanceName: 'DBInstanceName',
    InstanceIp: 'Vip',
  },
};

export const InstanceMapByservice = new Map(Object.entries(config));

/**根据当前metric interval，返回当前值到5min options */
export const generatePeriodOptions = (interval: string) => {
  let minCount = Number(interval) / 60;
  let defaultOptions = [];
  if (minCount < 1) {
    defaultOptions.push({ label: Number(interval), value: Number(interval) });
    minCount = 1;
  }
  for (let i = minCount; i < 5; i++) {
    defaultOptions.push({ label: i * 60, value: i * 60 });
  }
  return defaultOptions;
};
// query 面板instance ID 选择类型
export const InstanceTypes = [
  { value: 'InstanceId', label: 'As InstanceId' },
  { value: 'InstanceName', label: 'As InstanceName' },
  { value: 'InstanceIp', label: 'As InstanceIp' },
];

// 生成instance options
/**生成 instance options
 * instanceType: 展示字段
 */
export const dealInstanceByService = (service: string, dataSource: any[], instanceType: string) => {
  const mapItem: InstanceItem | undefined = InstanceMapByservice.get(service) || undefined;
  if (!Array.isArray(dataSource)) {
    return [];
  }
  return dataSource.map((item) => {
    return {
      ...item,
      label: mapItem && mapItem[instanceType] ? item[mapItem[instanceType]] : item?.InstanceId,
      value: mapItem && mapItem['InstanceId'] ? item[mapItem?.InstanceId] : item?.InstanceId,
    };
  });
};
/**
 * 处理面板query返回数据结构
 */
/**
 * return {
 *   data: [
 *     {
 *       "target": "AccOuttraffic - ins-123",
 *       "datapoints": [
 *         [861, 1450754160000],
 *         [767, 1450754220000]
 *       ]
 *     }
 *   ]
 * } */
export const ParseQueryResult = (response: any, Aggregate: any[]) => {
  const aggregate = Aggregate.map((i: any) => i.value);

  let result: any[] = [];
  response.forEach((resItem: any) => {
    const {
      Instance = '',
      label = '',
      datapoints: { member },
    } = resItem;
    aggregate.forEach((aggregateItem: any) => {
      const pointsData = member.map((item: any) => [Number(item[aggregateItem.toLowerCase()]), item.unixTimestamp]);
      result.push({ target: `${Instance}_${label}_${aggregateItem.toLowerCase()}`, datapoints: pointsData });
    });
  });
  // aggregate.forEach((aggregateItem: any) => {
  //   console.log('aggregateItem', aggregateItem);
  //   const pointsData = member.map((item: any) => [Number(item[aggregateItem.toLowerCase()]), item.unixTimestamp]);
  //   result.push({ target: `${label}_${aggregateItem.toLowerCase()}`, datapoints: pointsData });
  // });

  return result;
};

/**
 * 生成指标选择维度数据
 * metricNameList：接口返回metricName列表数据
 */
export const generageMetricOptions = (metricNameList: MetricType[]) => {
  const metricMap = new Map();
  metricNameList.forEach((item: MetricType) => {
    if (item.metricName === 'proc.num') {
      return;
    }
    if (item && item.metricName && !item.metricName.includes('[')) {
      return metricMap.set(item.metricName, { Period: item.interval, metricSubChose: null, fullName: item.metricName });
    } else if (item && item.metricName) {
      const metricMainName = item.metricName.split('[')[0];
      const subChoseArray = item.metricName.split('[')[1].split(']')[0].split(',');
      let newSetMap = !metricMap.has(metricMainName)
        ? {
            Period: item.interval,
            fullName: item.metricName,
            metricSubChose: {},
          }
        : metricMap.get(metricMainName);

      if (subChoseArray?.length) {
        subChoseArray.forEach((el, index) => {
          newSetMap.metricSubChose[index] = (newSetMap.metricSubChose[index] || []).concat([el]);
        });
      }
      metricMap.set(metricMainName, newSetMap);
    }
    return {};
  });
  return metricMap;
};

// /** query filter参数处理
//  * @return Filter.N.name=XXX&Filter.N.Value.Index=VVVV
//  */
export const dealQueryFilter = (filterData: any) => {
  let Filter = '';
  Object.keys(filterData).forEach((filterItem: any, itemIndex: number) => {
    const element = [].concat(filterData[filterItem] || []).filter((el: any) => el !== '');
    if (!element.length) {
      return;
    }
    Filter += `Filter.${itemIndex + 1}.name=${filterItem}`;
    element.forEach((item: string, index: number) => {
      Filter += `&Filter.${itemIndex + 1}.Value.${index + 1}=${item}`;
    });
  });
  return Filter;
};

/**处理解析Query */
export function ParseMetricQuery(query = '') {
  if (!query) {
    return {};
  }
  const result: any = {};
  const queries = _.split(query, '&');
  _.forEach(queries, (item) => {
    const str = _.split(item, '=');
    if (_.trim(_.get(str, '0', ''))) {
      let val = _.trim(_.get(str, '1', ''));
      try {
        val = JSON.parse(val);
      } catch (e) {
        // console.log({ val });
      }
      result[_.toLower(_.trim(_.get(str, '0', '')))] = val;
    }
  });
  return result;
}

export const replaceRealValue = (sourceValue: string) => {
  const realValue = getTemplateSrv().replace(sourceValue);
  // 多选项返回多值{***,****....}，处理
  if (realValue.includes('{') && realValue.includes('}')) {
    return realValue.replace('{', '').replace('}', '');
  }
  return realValue;
};
