// kec 初始化数据
export const filterinit = {
  "instance-id": [""],
  "subnet-id": [""],
  "vpc-id": [""],
  "instance-name": [""],
  "instance-type": [""],
  "private-ip-address": [""],
  "image-id": [""],
  ProjectId: [""],
  "charge-type": [""],
  "network.interface.subnet_id": [""],
  "network.interface.network.interface_id": [""],
  "network-interface.group-id": [""],
  "instance-state.name": [""],
  "availability-zone-name": [""],
};

// kec 描述信息
export const filterDesc: { [key: string]: string } = {
  "instance-id": "实例ID",
  "subnet-id": "子网ID",
  "vpc-id": "vpc ID",
  "instance-name": "实例名称",
  "instance-type": "实例类型",
  "private-ip-address": "内网IP",
  "image-id": "镜像ID",
  ProjectId: "所属项目",
  "charge-type":
    "计费模式（Monthly（包年包月）、Daily（按量付费（按日月结））、HourlyInstantSettlement（按量付费）、Spot（竞价型实例））",
  "network.interface.subnet_id": "网络接口关联的子网ID",
  "network.interface.network.interface_id": "网卡的ID",
  "network-interface.group-id": "网络接口关联的安全组ID",
  "instance-state.name":
    "实例状态-链接地址https://docs.ksyun.com/documents/836",
  "availability-zone-name":
    "可用区（AvailabilityZone）-链接地址https://docs.ksyun.com/documents/67",
};
export const kecReducerFn = (state: any, action: any) => {
  const {
    type,
    payload: { key, value },
  } = action;
  switch (type) {
    case "change":
      return { ...state, [key]: value };
    case "changeFilter":
      return { ...state, Filter: { ...state.Filter, [key]: value } };
    default:
      return { ...state };
  }
};
