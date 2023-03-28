import { MetricType, InstanceConfig } from './interface';
import { getTemplateSrv, getAppEvents } from '@grafana/runtime';
import { AppEvents } from '@grafana/data';
import _ from 'lodash';

const events: any = getAppEvents();

export const withoutIpServices = ['Listener', 'PEER', 'BWS'];
/**实例配置 */
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
    InstanceIp: 'NetworkInterfaceAttributeSet[0].PrivateIpAddress',
  },
  PGS: {
    InstanceId: 'DBInstanceIdentifier',
    InstanceName: 'DBInstanceName',
    InstanceIp: 'Vip',
  }
};
// 处理不同类型service生成instance options
export const GenerageInstanceOptions: any = {
  KEC: {
    options: (data: any, instanceType: string) => {
      return data?.InstancesSet.map((item: any) => ({
        label: item[config.KEC[instanceType]],
        value: item['InstanceId'],
      }));
    },
  },
  EIP: {
    options: (data: any, instanceType: string) => {
      return data?.AddressesSet.map((item: any) => ({
        label: item[config.EIP[instanceType]],
        value: item['AllocationId'],
      }));
    },
  },
  KCS: {
    options: (data: any, instanceType: string) => {
      return data?.Data?.list.map((item: any) => ({
        label: item[config.KCS[instanceType]],
        value: item['cacheId'],
      }));
    },
  },
  NAT: {
    options: (data: any, instanceType: string) => {
      return data?.NatSet.map((item: any) => ({
        label: instanceType === 'InstanceIp' ? item?.NatIpSet[0].NatIp : item[config.NAT[instanceType]],
        value: item['NatId'],
      }));
    },
  },
  PEER: {
    options: (data: any, instanceType: string) => {
      return data?.VpcPeeringConnectionSet.map((item: any) => ({
        label: item[config.PEER[instanceType]],
        value: item['VpcPeeringConnectionId'],
      }));
    },
  },
  KRDS: {
    options: (data: any, instanceType: string) => {
      return data?.Data?.Instances.map((item: any) => ({
        label: item[config.KRDS[instanceType]],
        value: item['DBInstanceIdentifier'],
      }));
    },
  },
  SLB: {
    options: (data: any, instanceType: string) => {
      return data?.LoadBalancerDescriptions.map((item: any) => ({
        label: item[config.SLB[instanceType]],
        value: item['LoadBalancerId'],
      }));
    },
  },
  Listener: {
    options: (data: any, instanceType: string) => {
      return data?.ListenerSet.map((item: any) => ({
        label: item[config.Listener[instanceType]],
        value: item['ListenerId'],
      }));
    },
  },
  BWS: {
    options: (data: any, instanceType: string) => {
      return data?.BandWidthShareSet.map((item: any) => ({
        label: item[config.BWS[instanceType]],
        value: item['BandWidthShareId'],
      }));
    },
  },
  EPC: {
    options: (data: any, instanceType: string) => {
      return data?.HostSet.map((item: any) => ({
        label:
          instanceType === 'InstanceIp'
            ? item?.NetworkInterfaceAttributeSet[0].PrivateIpAddress
            : item[config.EPC[instanceType]],
        value: item['HostId'],
      }));
    },
  },
  GEPC: {
    options: (data: any, instanceType: string) => {
      return data?.HostSet.map((item: any) => ({
        label:
          instanceType === 'InstanceIp'
            ? item?.NetworkInterfaceAttributeSet[0].PrivateIpAddress
            : item[config.EPC[instanceType]],
        value: item['HostId'],
      }));
    },
  },
  PGS: {
    options: (data: any, instanceType: string) => {
      return data?.Data?.Instances.map((item: any) => ({
        label: item[config.PGS[instanceType]],
        value: item['DBInstanceIdentifier'],
      }));
    },
  },
};
export const InstanceMapByservice = new Map(Object.entries(config));

/**根据当前metric interval，返回当前值到5min options */
// 修改： 设置options为60的整数倍
export const generatePeriodOptions = (interval: string) => {
  // let minCount = Number(interval) / 60;
  let defaultOptions: any = [{ label: '实际粒度', value: '' }];
  // if (minCount < 1) {
  //   defaultOptions.push({ label: Number(interval), value: Number(interval) });
  //   minCount = 1;
  // }
  for (let i = 1; i < 5; i++) {
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

/**
 * 处理面板query返回数据结构
 */

export const ParseQueryResult = (response: any, targetItem: any) => {
  const { Aggregate, InstanceID, Alias } = targetItem;
  const aggregate = Array.isArray(Aggregate) ? Aggregate.map((i: any) => i.value) : ['Average'];
  // 变量类型需从variable中的current 获取 text 为实际显示值
  const templateSrv: any = getTemplateSrv();
  const variables = templateSrv.variables;
  let result: any[] = [];
  if (!Array.isArray(response) || !response.length) {
    return [];
  }
  response.forEach((resItem: any) => {
    const {
      Instance = '',
      label = '',
      datapoints: { member },
    } = resItem;
    aggregate.forEach((aggregateItem: any) => {
      const pointsData = member.map((item: any) => [Number(item[aggregateItem.toLowerCase()]), item.unixTimestamp]);
      let instanceItem = InstanceID.find((item: any) => item.value === Instance);
      if (!instanceItem && variables?.length) {
        instanceItem = variables.find((item: any) => item.current.value === Instance);
      }
      let showLabel = Alias ? replaceRealValue(Alias) : `${label}`;

      result.push({
        target: `${showLabel} ${aggregateItem.toLowerCase()} [${
          instanceItem?.current?.text || instanceItem?.label || Instance
        }]`,
        datapoints: pointsData,
    });
  });
  });
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
      return metricMap.set(item.metricName, {
        Period: item.interval,
        metricSubChose: null,
        fullName: item.metricName,
        unit: item.unit,
      });
    } else if (item && item.metricName) {
      const metricMainName = item.metricName.split('[')[0];
      const subChoseArray = item.metricName.split('[')[1].split(']')[0].split(',');
      let newSetMap = !metricMap.has(metricMainName)
        ? {
            Period: item.interval,
            fullName: item.metricName,
            unit: item.unit,
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
  let N = 1;
  Object.keys(filterData).forEach((filterItem: any, itemIndex: number) => {
    const element = [].concat(filterData[filterItem] || []).filter((el: any) => el !== '');
    if (!element.length) {
      return;
    }
    Filter += `&Filter.${N}.Name=${filterItem}`;
    element.forEach((item: string, index: number) => {
      Filter += `&Filter.${N}.Value.${index + 1}=${item}`;
    });
    N += 1;
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
      result[_.trim(_.get(str, '0', ''))] = val;
    }
  });
  return result;
}

/**处理变量类型数据 */
export const replaceRealValue = (sourceValue: string) => {
  const realValue = getTemplateSrv().replace(sourceValue);
  // 多选项返回多值{***,****....}，处理
  if (realValue.includes('{') && realValue.includes('}')) {
    return realValue.replace('{', '').replace('}', '');
  }
  return realValue;
};

/**处理错误信息 */
export const alertError = (errorMessage: any, errTitle?: string) => {
  if (errTitle) {
    return events.emit(AppEvents.alertError, [errTitle, errorMessage]);
  }
  return events.emit(AppEvents.alertError, [errorMessage]);
};
