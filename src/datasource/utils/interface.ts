// plugin route转发header中参数
export interface RouteParams {
  Host: string;
  Service: string;
  Version: string;
  Action: string;
  Region: string;
}
export interface RegionSet {
  Region: string;
  RegionName: string;
}
// 获取签名接口参数
export interface SignParams {
  action: string;
  query: string;
  method?: string;
}

interface ReqData {
  [keyname: string]: any;
}
// 请求参数
export interface RequestParams {
  pluginId: number; // 插件ID
  action: string;
  version: string;
  extenParams?: string; // 其他请求参数
  path?: string; // 对应route 中的除servicesname以外的path
  method?: string;
  params?: ReqData;
}

export interface ResqueryItem {
  timestamp: string;
  unixTimestamp: number;
  average?: string;
  max?: string;
  min?: string;
}
// query返回数据
export interface ResponseType {
  datapoints: {
    member: any[];
  };
  label: string;
}

export interface QueryType {
  [queryname: string]: string | number | string[];
}

export interface MetricType {
  metricName?: string;
  interval?: string;
  unit?: string;
}

// 实例类型interface
export interface InstanceItem {
  [keyname: string]: string;
}

export interface InstanceConfig {
  [serviceName: string]: InstanceItem;
}

export interface MetricListItem {
  label: string | number;
  value: string | number;
  text: string;
  [otherKey: string]: any;
}
