import { MetricType, InstanceConfig } from "./interface";
import { getTemplateSrv, getAppEvents } from "@grafana/runtime";
import { AppEvents } from "@grafana/data";
import _ from "lodash";

interface QueryResultItem {
  target: string;
  datapoints: any[];
}

interface TargetItemProps {
  Aggregate?: string; // 值类型，对应查询字段均值、最大值、最小值
  InstanceID: Array<{ label: string; value: string }>; // 对应查询字段实例ID
  Alias?: string; // 别名，对应Metric alias
}

interface VariableItemProps {
  current: { [keyName: string]: any; text: any; value: any };
  options?: Array<{ [keyName: string]: any }>;
}

const events: any = getAppEvents();

export const withoutIpServices = ["Listener", "PEER", "BWS"];
/**实例配置 */
const config: InstanceConfig = {
  KEC: {
    InstanceId: "InstanceId",
    InstanceName: "InstanceName",
    InstanceIp: "PrivateIpAddress",
  },
  EIP: {
    InstanceId: "AllocationId",
    InstanceName: "PublicIp",
    InstanceIp: "PublicIp",
  },
  KCS: {
    InstanceId: "cacheId",
    InstanceName: "name",
    InstanceIp: "vip",
  },
  NAT: {
    InstanceId: "NatId",
    InstanceName: "NatName",
    InstanceIp: "NatIpSet[0].NatIp",
  },
  PEER: {
    InstanceId: "VpcPeeringConnectionId",
    InstanceName: "PeeringName",
    InstanceIp: "VpcPeeringConnectionId",
  },
  KRDS: {
    InstanceId: "DBInstanceIdentifier",
    InstanceName: "DBInstanceName",
    InstanceIp: "Vip",
  },
  SLB: {
    InstanceId: "LoadBalancerId",
    InstanceName: "LoadBalancerName",
    InstanceIp: "PublicIp",
  },
  Listener: {
    InstanceId: "ListenerId",
    InstanceName: "ListenerName",
    InstanceIp: "PublicIp",
  },
  BWS: {
    InstanceId: "BandWidthShareId",
    InstanceName: "BandWidthShareName",
    InstanceIp: "PublicIp",
  },
  EPC: {
    InstanceId: "HostId",
    InstanceName: "HostName",
    InstanceIp: "NetworkInterfaceAttributeSet[0].PrivateIpAddress",
  },
  PGS: {
    InstanceId: "DBInstanceIdentifier",
    InstanceName: "DBInstanceName",
    InstanceIp: "Vip",
  },
  KCE: {
    InstanceId: "ClusterId",
    InstanceName: "ClusterName",
    InstanceIp: "PrivateIpAddress",
  },
};
// 处理不同类型service生成instance options
export const GenerageInstanceOptions: any = {
  KEC: {
    options: (data: any, instanceType: string) => {
      return data?.InstancesSet.map((item: any) => ({
        label: item[config.KEC[instanceType]],
        value: item["InstanceId"],
      }));
    },
  },
  EIP: {
    options: (data: any, instanceType: string) => {
      return data?.AddressesSet.map((item: any) => ({
        label: item[config.EIP[instanceType]],
        value: item["AllocationId"],
      }));
    },
  },
  KCS: {
    options: (data: any, instanceType: string) => {
      return data?.Data?.list.map((item: any) => ({
        label: item[config.KCS[instanceType]],
        value: item["cacheId"],
      }));
    },
  },
  NAT: {
    options: (data: any, instanceType: string) => {
      return data?.NatSet.map((item: any) => ({
        label:
          instanceType === "InstanceIp"
            ? item?.NatIpSet[0].NatIp
            : item[config.NAT[instanceType]],
        value: item["NatId"],
      }));
    },
  },
  PEER: {
    options: (data: any, instanceType: string) => {
      return data?.VpcPeeringConnectionSet.map((item: any) => ({
        label: item[config.PEER[instanceType]],
        value: item["VpcPeeringConnectionId"],
      }));
    },
  },
  KRDS: {
    options: (data: any, instanceType: string) => {
      return data?.Data?.Instances.map((item: any) => ({
        label: item[config.KRDS[instanceType]],
        value: item["DBInstanceIdentifier"],
      }));
    },
  },
  SLB: {
    options: (data: any, instanceType: string) => {
      return data?.LoadBalancerDescriptions.map((item: any) => ({
        label: item[config.SLB[instanceType]],
        value: item["LoadBalancerId"],
      }));
    },
  },
  Listener: {
    options: (data: any, instanceType: string) => {
      return data?.ListenerSet.map((item: any) => ({
        label: item[config.Listener[instanceType]],
        value: item["ListenerId"],
      }));
    },
  },
  BWS: {
    options: (data: any, instanceType: string) => {
      return data?.BandWidthShareSet.map((item: any) => ({
        label: item[config.BWS[instanceType]],
        value: item["BandWidthShareId"],
      }));
    },
  },
  EPC: {
    options: (data: any, instanceType: string) => {
      return data?.HostSet.map((item: any) => ({
        label:
          instanceType === "InstanceIp"
            ? item?.NetworkInterfaceAttributeSet[0].PrivateIpAddress
            : item[config.EPC[instanceType]],
        value: item["HostId"],
      }));
    },
  },
  GEPC: {
    options: (data: any, instanceType: string) => {
      return data?.HostSet.map((item: any) => ({
        label:
          instanceType === "InstanceIp"
            ? item?.NetworkInterfaceAttributeSet[0].PrivateIpAddress
            : item[config.EPC[instanceType]],
        value: item["HostId"],
      }));
    },
  },
  PGS: {
    options: (data: any, instanceType: string) => {
      return data?.Data?.Instances.map((item: any) => ({
        label: item[config.PGS[instanceType]],
        value: item["DBInstanceIdentifier"],
      }));
    },
  },
  KCE: {
    options: (data: any, instanceType: string) => {
      return Array.isArray(data?.ClusterSet)
        ? data.ClusterSet.map((item: any) => ({
            label: item[config.KCE[instanceType]],
            value: item["ClusterId"],
          }))
        : [];
    },
  },
};
export const InstanceMapByservice = new Map(Object.entries(config));

/**根据当前metric interval，返回当前值到5min options */
// 修改： 设置options为60的整数倍
export const generatePeriodOptions = (interval: string) => {
  // let minCount = Number(interval) / 60;
  let defaultOptions: any = [{ label: "实际粒度", value: "" }];
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
  { value: "InstanceId", label: "As InstanceId" },
  { value: "InstanceName", label: "As InstanceName" },
  { value: "InstanceIp", label: "As InstanceIp" },
];

// query 面板cluster ID 选择类型
export const ClusterTypes = [
  { value: "InstanceId", label: "As ClusterId" },
  { value: "InstanceName", label: "As ClusterName" },
];

/**
 * 获取query 变量中设置的显示text
 * @param variables query 变量数组
 * @param Instance 当前数据单条线实例id
 * @returns
 */
const getVariableItem = (variables: VariableItemProps[], Instance: string) => {
  if (!variables || !variables?.length) {
    return "";
  }
  let variableString = "";
  variables.forEach((item: VariableItemProps) => {
    const {
      current: { value, text },
      options,
    } = item;
    if (value === Instance) {
      variableString = text;
    } else if (Array.isArray(value) && value.includes(Instance)) {
      const variableItem =
        options && options.find((vItem: any) => vItem.value === Instance);
      variableString = variableItem ? variableItem.text : "";
    }
  });
  return variableString;
};

// targets按模板处理默认规则: "tcp.count{p0=1b4aaa4d-1381-4f34-b312-ed353c6b45d9,p1=test123,p2=1b4aaa4d-1381-4f34-b312-ed353c6b45d9,agg=average}"
/**
 * 处理生成dashboard 图例显示
 * @param targetItem 查询面板参数
 * @param variables 全局变量数组
 * @param Instance 接口返回实例ID
 * @param label 接口返回实例label
 * @param aggItem 值类型
 */
const generateTarget = (
  targetItem: TargetItemProps,
  variables: any[],
  Instance: string,
  label: string,
  aggItem: string
) => {
  const { Alias } = targetItem;
  const variableLabel = getVariableItem(variables, Instance);
  // 默认显示legend string
  let defaultLegend = `${label}{${Instance}${
    variableLabel ? "," + variableLabel : ""
  }${aggItem ? "," + aggItem : ""}}`;
  console.log("variableLabel", variableLabel);
  console.log("Alias", Alias);
  if (Alias) {
    // 解析alias 生成对应targets
    const liasName = replaceRealValue(Alias, true);
    let replaceString = liasName
      .replace("{{agg}}", aggItem)
      .replace("{{p0}}", Instance);
    if (variableLabel) {
      const variabelLists = variableLabel.includes(",")
        ? variableLabel.split(",")
        : [variableLabel];
      variabelLists.forEach((varItem: string, index: number) => {
        const replaceIndexItem = `{{p${index + 1}}}`;
        if (replaceString.includes(replaceIndexItem)) {
          replaceString = replaceString.replace(replaceIndexItem, varItem);
        }
      });
    }
    defaultLegend = replaceString;
  }
  return defaultLegend;
};

/**
 * 处理对象类型数据
 */
const dealObjectItemDataPoints = (
  response: any,
  aggregate: string[],
  targetItem: any,
  variables: any
) => {
  let result: QueryResultItem[] = [];
  const member = response?.datapoints?.member;
  const label = response?.label;
  const InstanceID =
    response?.datapoints?.Instance || targetItem?.InstanceID[0].value;
  const Instance = replaceRealValue(InstanceID);
  aggregate.forEach((aggregateItem: any) => {
    // 线值类型 min | max | average
    const aggItem = aggregateItem.toLowerCase();
    // 线数据
    const pointsData = member.map((item: any) => [
      Number(item[aggItem]),
      item.unixTimestamp,
    ]);
    // 处理生成target -> dashboard 显示图例
    const targetItemText = generateTarget(
      targetItem,
      variables,
      Instance,
      label,
      aggItem
    );
    result.push({
      target: `${targetItemText}`,
      datapoints: pointsData,
    });
  });
  return result;
};

/**
 * 处理数组类型返回数据
 * @param response [{member: pointitem[]}]
 * @param aggregate [min, max, average]
 * @param targetItem []
 * @param variables
 * @returns 图表[]
 */
const dealArrayDataPoints = (
  response: any,
  aggregate: string[],
  targetItem: TargetItemProps,
  variables: any
) => {
  let result: QueryResultItem[] = [];
  response.forEach((resItem: any) => {
    const {
      Instance = "",
      label = "",
      datapoints: { member },
    } = resItem;
    aggregate.forEach((aggregateItem: any) => {
      // 线值类型 min | max | average
      const aggItem = aggregateItem.toLowerCase();
      // 线数据
      const pointsData = member.map((item: any) => [
        Number(item[aggItem]),
        item.unixTimestamp,
      ]);
      // 处理生成target -> dashboard 显示图例
      const targetItemText = generateTarget(
        targetItem,
        variables,
        Instance,
        label,
        aggItem
      );
      result.push({
        target: `${targetItemText}`,
        datapoints: pointsData,
      });
    });
  });
  return result;
};

/**
 * 处理面板query返回数据结构,生成面板图表数据
 * @param response // 接口返回数据
 * @param targetItem
 * @returns
 */
export const ParseQueryResult = (
  response: any,
  targetItem: TargetItemProps
): QueryResultItem[] => {
  const { Aggregate } = targetItem;
  const aggregate = Array.isArray(Aggregate)
    ? Aggregate.map((i: any) => i.value)
    : ["Average"];
  // 变量类型需从variable中的current 获取 text 为实际显示值
  const templateSrv: any = getTemplateSrv();
  // 获取所有图表变量
  const variables = templateSrv.variables;
  let result: QueryResultItem[] = [];
  if (Array.isArray(response) && response.length) {
    result = dealArrayDataPoints(response, aggregate, targetItem, variables);
  } else if (Array.isArray(response?.datapoints?.member)) {
    result = dealObjectItemDataPoints(
      response,
      aggregate,
      targetItem,
      variables
    );
  }
  return result;
};

/**
 * 生成指标选择维度数据
 * metricNameList：接口返回metricName列表数据
 */
export const generageMetricOptions = (metricNameList: MetricType[]) => {
  const metricMap = new Map();
  metricNameList.forEach((item: MetricType) => {
    if (item.metricName === "proc.num") {
      return;
    }
    if (item && item.metricName && !item.metricName.includes("[")) {
      return metricMap.set(item.metricName, {
        Period: item.interval,
        metricSubChose: null,
        fullName: item.metricName,
        unit: item.unit,
      });
    } else if (item && item.metricName) {
      const metricMainName = item.metricName.split("[")[0];
      const subChoseArray = item.metricName
        .split("[")[1]
        .split("]")[0]
        .split(",");
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
          newSetMap.metricSubChose[index] = (
            newSetMap.metricSubChose[index] || []
          ).concat([el]);
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
  let Filter = "";
  let N = 1;
  Object.keys(filterData).forEach((filterItem: any, itemIndex: number) => {
    const element = []
      .concat(filterData[filterItem] || [])
      .filter((el: any) => el !== "");
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
export function ParseMetricQuery(query = "") {
  if (!query) {
    return {};
  }
  const result: any = {};
  const queries = _.split(query, "&");
  _.forEach(queries, (item) => {
    const str = _.split(item, "=");
    if (_.trim(_.get(str, "0", ""))) {
      let val = _.trim(_.get(str, "1", ""));
      try {
        val = JSON.parse(val);
      } catch (e) {
        // console.log({ val });
      }
      result[_.trim(_.get(str, "0", ""))] = val;
    }
  });
  return result;
}

/**处理变量类型数据 */
export const replaceRealValue = (sourceValue: string, onlyString?: boolean) => {
  const realValue = getTemplateSrv().replace(sourceValue);
  // 只获取字符串
  if (onlyString) {
    return realValue;
  }
  // 多选项返回多值{***,****....}，处理
  if (realValue.includes("{") && realValue.includes("}")) {
    return realValue.replace("{", "").replace("}", "");
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
