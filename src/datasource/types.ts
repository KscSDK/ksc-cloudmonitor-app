import { DataQuery, DataSourceJsonData } from '@grafana/data';

export interface MyQuery extends DataQuery {
  Namespace: any;
  InstanceID: any;
  Region?: any;
  MetricName: any;
  Period?: any;
  Aggregate?: any;
  InstanceType?: any;
  Alias?: string;
  InstanceOptions?: any[];
}

export const defaultQuery: Partial<MyQuery> = {
  Period: { label: 60, value: 60 },
  Aggregate: [{ label: '均值', value: 'Average' }],
  InstanceType: { value: 'InstanceId', label: 'As InstanceId' },
};

/**
 * These are options configured for each DataSource instance
 * 设置datasource
 */
export interface MyDataSourceOptions extends DataSourceJsonData {
  intranet: boolean;
  service?: any;
  AccessKey?: string;
  allChecked?: boolean;
  ApiKey?: string;
  namespace?: any;
}

/**
 * Value that is used in the backend, but never sent over HTTP to the frontend
 */
export interface MySecureJsonData {
  secretKey?: string;
}
