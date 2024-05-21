// 查询指标接口
export const searchMetricApi = {
  action: 'ListMetrics',
  version: '2010-05-25',
};

// 批量查询图表数据接口
export const statisMetricBatch = {
  action: 'GetMetricStatisticsBatch',
  version: '2018-11-14',
  method: 'POST',
};

// 单条查询图表数据接口
export const statisMetric = {
  action: 'GetMetricStatistics',
  version: '2019-08-12',
  method: 'GET',
};
