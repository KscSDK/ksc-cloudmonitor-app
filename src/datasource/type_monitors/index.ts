import _ from 'lodash';
// 接口region
const regionSet = [
  {
    Region: 'eu-east-1',
    RegionName: '俄罗斯（莫斯科）',
  },
  {
    Region: 'cn-hongkong-2',
    RegionName: '香港',
  },
  {
    Region: 'cn-qingdao-1',
    RegionName: '自用（青岛）',
  },
  {
    Region: 'ap-singapore-1',
    RegionName: '新加坡',
  },
  {
    Region: 'cn-beijing-6',
    RegionName: '华北1（北京）',
  },
  {
    Region: 'cn-guangzhou-1',
    RegionName: '华南1（广州）',
  },
  {
    Region: 'cn-shanghai-2',
    RegionName: '华东1（上海）',
  },
];

export const MonitorServices = [
  {
    service: 'kec',
    label: '云服务器(KEC)',
    namespace: 'KEC',
    href: 'https://www.ksyun.com/nv/product/KEC.html',
    instanceAction: 'DescribeInstances',
  },
  {
    service: 'eip',
    label: '弹性IP (EIP)',
    namespace: 'EIP',
    href: 'https://www.ksyun.com/nv/product/EIP.html',
    instanceAction: 'DescribeAddresses',
  },
  {
    service: 'vpc',
    label: '网络地址转换NAT',
    namespace: 'NAT',
    href: 'https://www.ksyun.com/nv/product/NAT.html',
    instanceAction: 'DescribeNats',
  },
  {
    service: 'kcs',
    label: '云数据库Redis',
    namespace: 'KCS',
    href: 'https://www.ksyun.com/nv/product/Redis.html',
    instanceAction: 'DescribeCacheClusters',
  },
  {
    service: 'krds',
    label: '关系型数据库 (KRDS)',
    namespace: 'KRDS',
    href: 'https://www.ksyun.com/nv/product/KRDS.html',
    instanceAction: 'DescribeDBInstances',
  },
  {
    service: 'slb',
    label: '负载均衡（SLB）',
    namespace: 'SLB',
    href: 'https://www.ksyun.com/nv/product/SLB.html',
    instanceAction: 'DescribeLoadBalancers',
  },
  {
    service: 'slb',
    label: '监听器（Listener）',
    namespace: 'Listener',
    href: 'https://www.ksyun.com/nv/product/SLB.html',
    instanceAction: 'DescribeListeners',
  },
  {
    service: 'vpc',
    label: '对等连接（Peering）',
    namespace: 'PEER',
    href: 'https://www.ksyun.com/nv/product/Peering.html',
    instanceAction: 'DescribeVpcPeeringConnections',
  },
  {
    service: 'bws',
    label: '共享带宽（BWS）',
    namespace: 'BWS',
    instanceAction: 'DescribeBandWidthShares',
  },
  {
    service: 'epc',
    label: '裸金属服务器（EPC）',
    namespace: 'EPC',
    href: 'https://www.ksyun.com/nv/product/EPC.html',
    instanceAction: 'DescribeEpcs',
  },
  {
    service: 'epc',
    label: 'GPU裸金属服务器(GEPC)',
    namespace: 'GEPC',
    href: 'https://www.ksyun.com/nv/product/GPU.html',
    instanceAction: 'DescribeEpcs',
  },
  {
    service: 'postgresql',
    label: '云数据库PostgreSQL（PGS）',
    namespace: 'PGS',
    href: 'https://www.ksyun.com/nv/product/PostgreSQL.html',
    instanceAction: 'DescribeDBInstances',
  },
];
// 各个产品线请求实例配置
const serviceRegionConfig = {
  kec: { version: '2016-03-04', servicename: 'kec' },
  eip: { version: '2016-03-04', servicename: 'eip' },
  vpc: { version: '2016-03-04', servicename: 'vpc' },
  kcs: { version: '2016-07-01', servicename: 'kcs' },
  krds: { version: '2016-07-01', servicename: 'krds' },
  slb: { version: '2016-03-04', servicename: 'slb' },
  bws: { version: '2016-03-04', servicename: 'bws' },
  epc: { version: '2015-11-01', servicename: 'epc' },
  postgresql: { version: '2018-12-25', servicename: 'postgresql' },
};
// 非region相关配置
const mormalServiceConfig = {
  kec: { host: 'kec.api.ksyun.com', version: '2016-03-04', servicename: 'kec' },
  monitor: { host: 'monitor.api.ksyun.com', version: '2010-05-25', servicename: 'monitor' },
  iam: { host: 'iam.api.ksyun.com', version: '2015-11-01', servicename: 'iam' },
};
/** 根据region 生成各个产品线相关host 配置 */
const generageServiceConfig = (defaultConfig: any, normalConfig: any) => {
  let dealObj = {};
  for (const key in defaultConfig) {
    const defaultItem = defaultConfig[key];
    regionSet.forEach((region) => {
      _.set(dealObj, `${key}/${region.Region}`, {
        ...defaultItem,
        host: `${key}.${region.Region}.api.ksyun.com`,
      });
    });
  }
  return Object.assign(dealObj, mormalServiceConfig);
};

export const ServiceConfig = generageServiceConfig(serviceRegionConfig, mormalServiceConfig);
console.log('ServiceConfig', ServiceConfig);
export const ServiceMap = new Map(Object.entries(ServiceConfig));

// 获取设置的service，生成namespace
export const generageCheckedNamespace = (datasource: any) => {
  const {
    instanceSetting: {
      jsonData: { allChecked, namespace },
    },
  } = datasource;
  if (allChecked) {
    return MonitorServices.map((item) => ({
      label: item.label,
      value: item.namespace,
      service: item.service,
    }));
  }
  const serviceMap = new Map(Object.entries(namespace || {}));
  return MonitorServices.filter((el) => serviceMap.has(el.namespace)).map((item) => ({
    label: item.label,
    value: item.namespace,
    service: item.service,
  }));
};
