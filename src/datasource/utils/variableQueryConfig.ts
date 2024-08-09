import { get } from 'lodash';
/**
 * 按别名显示变量
 * @param InstanceAlias 别名
 * @param data 接口返回每条数据
 * @returns 需要显示的字符串内容
 */
const generateAliasText = (InstanceAlias: string, data: { [keyName: string]: any }) => {
  if (!InstanceAlias.includes(',')) {
    const findValue = get(data, InstanceAlias);
    return findValue;
  }
  let showText = '';
  const aliasNames = InstanceAlias.split(',');
  aliasNames.forEach((i: string) => {
    showText += showText === '' ? get(data, i) : `,${get(data, i)}`;
  });
  return showText;
};

// namespace 维度
export const variableConfig: any = {
  KEC: {
    service: 'kec',
    label: '云服务器KEC',
    namespace: 'KEC',
    href: 'https://www.ksyun.com/nv/product/KEC.html',
    instanceAction: 'DescribeInstances',
    // kec 请求实例接口
    DescribeInstances: {
      getDataKey: 'InstancesSet',
      version: '2016-03-04',
      backDataFn: (list: any[], InstanceAlias?: string) => {
        return list.map((i) => ({
          label: i.InstanceName,
          value: i.InstanceId,
          text: InstanceAlias ? generateAliasText(InstanceAlias, i) : i.InstanceName,
        }));
      },
    },
    // kec请求region接口
    DescribeRegions: {
      getDataKey: 'RegionSet',
      version: '2016-03-04',
      backDataFn: (list: any[], InstanceAlias?: string) => {
        return list.map((i) => ({
          label: i?.RegionName,
          value: i?.Region,
          text: InstanceAlias ? generateAliasText(InstanceAlias, i) : i.RegionName,
        }));
      },
    },
  },
  EIP: {
    service: 'eip',
    label: '弹性IP (EIP)',
    namespace: 'EIP',
    href: 'https://www.ksyun.com/nv/product/EIP.html',
    instanceAction: 'DescribeAddresses',
    DescribeAddresses: {
      version: '2016-03-04',
      getDataKey: 'AddressesSet',
      backDataFn: (list: any[], InstanceAlias?: string) => {
        return list.map((i) => ({
          label: i.PublicIp,
          value: i.AllocationId,
          text: InstanceAlias ? generateAliasText(InstanceAlias, i) : i.PublicIp,
        }));
      },
    },
  },
  NAT: {
    service: 'vpc',
    label: '网络地址转换NAT',
    namespace: 'NAT',
    href: 'https://www.ksyun.com/nv/product/NAT.html',
    instanceAction: 'DescribeNats',
    DescribeNats: {
      version: '2016-03-04',
      getDataKey: 'NatSet',
      backDataFn: (list: any[], InstanceAlias?: string) => {
        return list.map((i) => ({
          label: i.NatName,
          value: i.NatId,
          text: InstanceAlias ? generateAliasText(InstanceAlias, i) : i.NatName,
        }));
      },
    },
  },
  KCS: {
    service: 'kcs',
    namespace: 'KCS',
    label: '云数据库Redis',
    href: 'https://www.ksyun.com/nv/product/Redis.html',
    instanceAction: 'DescribeCacheClusters',
    DescribeCacheClusters: {
      version: '2016-07-01',
      getDataKey: 'Data',
      // 取值Data.list
      backDataFn: (Data: any, InstanceAlias?: string) => {
        const list: any[] = Data?.list || [];
        return list.map((i) => ({
          label: i.name,
          value: i.cacheId,
          text: InstanceAlias ? generateAliasText(InstanceAlias, i) : i.name,
        }));
      },
    },
  },
  KRDS: {
    service: 'krds',
    label: '关系型数据库 (KRDS)',
    namespace: 'KRDS',
    href: 'https://www.ksyun.com/nv/product/KRDS.html',
    instanceAction: 'DescribeDBInstances',
    DescribeDBInstances: {
      version: '2016-07-01',
      getDataKey: 'Data',
      backDataFn: (Data: any, InstanceAlias?: string) => {
        const list: any[] = Data?.Instances || [];
        return list.map((i) => ({
          label: i.DBInstanceName,
          value: i.DBInstanceIdentifier,
          text: InstanceAlias ? generateAliasText(InstanceAlias, i) : i.DBInstanceName,
        }));
      },
    },
  },
  SLB: {
    service: 'slb',
    label: '负载均衡（SLB）',
    namespace: 'SLB',
    href: 'https://www.ksyun.com/nv/product/SLB.html',
    instanceAction: 'DescribeLoadBalancers',
    DescribeLoadBalancers: {
      version: '2016-03-04',
      getDataKey: 'LoadBalancerDescriptions',
      backDataFn: (list: any[], InstanceAlias?: string) => {
        return list.map((i) => ({
          label: i.LoadBalancerName,
          value: i.LoadBalancerId,
          text: InstanceAlias ? generateAliasText(InstanceAlias, i) : i.LoadBalancerName,
        }));
      },
    },
  },
  Listener: {
    service: 'slb',
    label: '监听器（Listener）',
    namespace: 'Listener',
    href: 'https://www.ksyun.com/nv/product/SLB.html',
    instanceAction: 'DescribeListeners',
    DescribeListeners: {
      version: '2016-03-04',
      getDataKey: 'ListenerSet',
      backDataFn: (list: any[], InstanceAlias?: string) => {
        return list.map((i) => ({
          label: i.ListenerName,
          value: i.ListenerId,
          text: InstanceAlias ? generateAliasText(InstanceAlias, i) : i.ListenerName,
        }));
      },
    },
  },
  PEER: {
    service: 'vpc',
    label: '对等连接（Peering）',
    namespace: 'PEER',
    href: 'https://www.ksyun.com/nv/product/Peering.html',
    instanceAction: 'DescribeVpcPeeringConnections',
    DescribeVpcPeeringConnections: {
      version: '2016-03-04',
      getDataKey: 'VpcPeeringConnectionSet',
      backDataFn: (list: any[], InstanceAlias?: string) => {
        return list.map((i) => ({
          label: i.PeeringName,
          value: i.VpcPeeringConnectionId,
          text: InstanceAlias ? generateAliasText(InstanceAlias, i) : i.PeeringName,
        }));
      },
    },
  },
  BWS: {
    service: 'bws',
    label: '共享带宽（BWS）',
    namespace: 'BWS',
    instanceAction: 'DescribeBandWidthShares',
    DescribeBandWidthShares: {
      version: '2016-03-04',
      getDataKey: 'BandWidthShareSet',
      backDataFn: (list: any[], InstanceAlias?: string) => {
        return list.map((i) => ({
          label: i.InstanceName,
          value: i.InstanceId,
          text: InstanceAlias ? generateAliasText(InstanceAlias, i) : i.InstanceName,
        }));
      },
    },
  },
  EPC: {
    service: 'epc',
    label: '裸金属服务器（EPC）',
    namespace: 'EPC',
    href: 'https://www.ksyun.com/nv/product/EPC.html',
    instanceAction: 'DescribeEpcs',
    DescribeEpcs: {
      version: '2015-11-01',
      getDataKey: 'HostSet',
      backDataFn: (list: any[], InstanceAlias?: string) => {
        return list.map((i) => ({
          label: i.HostName,
          value: i.HostId,
          text: InstanceAlias ? generateAliasText(InstanceAlias, i) : i.HostName,
        }));
      },
    },
  },
  MONITOR: {
    service: 'monitor',
    label: 'GPU裸金属服务器(GEPC)',
    instanceAction: 'DescribeEpcs',
    ListMetrics: {
      version: '2010-05-25',
      getDataKey: 'listMetricsResult',
      backDataFn: (Data: any, InstanceAlias?: string) => {
        const metricList = Data.metrics.member;
        return metricList.map((i: any) => ({
          label: i.metricName,
          value: i.metricName,
          text: InstanceAlias ? generateAliasText(InstanceAlias, i) : i.metricName,
        }));
      },
    },
  },
  IAM: {
    service: 'iam',
    label: '',
    instanceAction: 'GetAccountAllProjectList',
    GetAccountAllProjectList: {
      version: '2015-11-01',
      getDataKey: 'ListProjectResult',
      backDataFn: (Data: any, InstanceAlias?: string) => {
        const metricList = Data.ProjectList;
        return metricList.map((i: any) => ({
          label: i.ProjectName,
          value: i.ProjectId,
          text: InstanceAlias ? generateAliasText(InstanceAlias, i) : i.ProjectName,
        }));
      },
    },
  },
  PGS: {
    service: 'postgresql',
    label: '云数据库PostgreSQL（PGS）',
    namespace: 'PGS',
    href: 'https://www.ksyun.com/nv/product/PostgreSQL.html',
    instanceAction: 'DescribeDBInstances',
    DescribeDBInstances: {
      version: '2018-12-25',
      getDataKey: 'Data',
      backDataFn: (Data: any, InstanceAlias?: string) => {
        const list: any[] = Data?.Instances || [];
        return list.map((i) => ({
          label: i.DBInstanceName,
          value: i.DBInstanceIdentifier,
          text: InstanceAlias ? generateAliasText(InstanceAlias, i) : i.DBInstanceName,
        }));
      },
    },
  },
  KCE: {
    service: 'kce',
    label: '容器引擎（KCE）',
    namespace: 'KCE',
    href: 'https://www.ksyun.com/nv/product/Kce.html',
    instanceAction: 'DescribeCluster',
    DescribeCluster: {
      version: '2019-08-06',
      getDataKey: 'ClusterSet',
      backDataFn: (ClusterSetList: any, InstanceAlias?: string) => {
        return ClusterSetList.map((i: any) => ({
          label: i.ClusterName,
          value: i.ClusterId,
          text: InstanceAlias ? generateAliasText(InstanceAlias, i) : i.ClusterName,
        }));
      },
    },
  },
  EBS: {
    service: 'ebs',
    label: '云硬盘（EBS）',
    namespace: 'EBS',
    href: 'https://www.ksyun.com/nv/product/EBS.html',
    instanceAction: 'DescribeVolumes',
    DescribeVolumes: {
      service: 'ebs',
      version: '2016-03-04',
      getDataKey: 'Volumes',
      backDataFn: (list: any[], InstanceAlias?: string) => {
        // 过滤掉没有InstanceId的数据
        return list
          .filter((i) => i.InstanceId)
          .map((i) => ({
            label: i.VolumeName,
            value: JSON.stringify({
              InstanceId: i.InstanceId,
              VolumeId: i.VolumeId,
              MountPoint: i.Attachment[0].MountPoint,
            }),
            text: InstanceAlias ? generateAliasText(InstanceAlias, i) : i.VolumeName,
          }));
      },
    },
  },
};

// without region
export const withoutRegions = ['iam'];
