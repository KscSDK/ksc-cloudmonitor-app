import React, { FC, useState, useEffect } from 'react';
import { LegacyForms, InlineSwitch, InlineField } from '@grafana/ui';
import SwitchIncrement from '../common/SwtichIncrement';
import CustomIncrement from '../common/CustomIncrement';
import SwitchInput from '../common/SwitchInput';
import _ from 'lodash';
const { FormField } = LegacyForms;

interface KecPros {
  [queryKey: string]: any;
}

const filtercondition = [
  {
    label: 'instance-id',
    key: 'instance-id',
    tooltip: '实例ID',
  },
  {
    label: 'subnet-id',
    key: 'subnet-id',
    tooltip: '子网ID',
  },
  {
    label: 'instance-name',
    key: 'instance-name',
    tooltip: '实例名称',
  },
  {
    label: 'instance-type',
    key: 'instance-type',
    tooltip: '实例类型',
  },
  {
    label: 'private-ip-address',
    key: 'private-ip-address',
    tooltip: '内网IP',
  },
  {
    label: 'image-id',
    key: 'image-id',
    tooltip: '镜像ID',
  },
  {
    label: 'ProjectId',
    key: 'ProjectId',
    tooltip: '项目的ID',
  },
  {
    label: 'charge-type',
    key: 'charge-type',
    tooltip:
      '计费模式（Monthly（包年包月）、Daily（按量付费（按日月结））、HourlyInstantSettlement（按量付费）、Spot（竞价型实例））',
  },
  {
    label: 'network.interface.subnet_id',
    key: 'network.interface.subnet_id',
    tooltip: '网络接口关联的子网ID',
  },
  {
    label: 'network.interface.network.interface_id',
    key: 'network.interface.network.interface_id',
    tooltip: '网卡的ID',
  },
  {
    label: 'network-interface.group-id',
    key: 'network-interface.group-id',
    tooltip: '网络接口关联的安全组ID',
  },
  {
    label: 'instance-state.name',
    key: 'instance-state.name',
    tooltip: '实例状态-链接地址https://docs.ksyun.com/documents/836',
  },
  {
    label: 'availability-zone-name',
    key: 'availability-zone-name',
    tooltip: '可用区（AvailabilityZone）-链接地址https://docs.ksyun.com/documents/67',
  },
];
const Querykec: FC<any> = ({ onChange }) => {
  const [filterState, setFilterState] = useState(false);
  const [kecQuery, setKecQuery] = useState<KecPros>();
  useEffect(() => {
    onChange && onChange(kecQuery);
  }, [kecQuery, onChange]);

  return (
    <div className="common-content">
      <div className="form-field">
        <FormField
          tooltip="单次调用所返回的最大实例数目，可输入值范围：5~1000"
          label="MaxResults"
          labelWidth={10}
          inputWidth={20}
          placeholder="可输入值范围：5~1000"
          onChange={(e) => setKecQuery((state) => ({ ...state, MaxResults: e.target.value }))}
        />
      </div>
      <div className="form-field">
        <FormField
          tooltip="分页标识，单次调用未返回全部实例时，标记下次调用的返回值的起点，默认值是0"
          label="Marker"
          labelWidth={10}
          inputWidth={20}
          defaultValue={0}
          placeholder="Marker"
          onChange={(e) => setKecQuery((state) => ({ ...state, Marker: e.target.value }))}
        />
      </div>

      <SwitchIncrement
        label="InstanceId"
        tooltip="实例ID"
        datasource={['']}
        onChange={(value) => setKecQuery((state) => ({ ...state, ['InstanceId']: value }))}
      />

      <SwitchIncrement
        label="ProjectId"
        tooltip="待返回实例信息的项目ID列表，最多可添加100个项目"
        datasource={['']}
        onChange={(value) => setKecQuery((state) => ({ ...state, ['ProjectId']: value }))}
      />

      <InlineField labelWidth={24} label="Filter" tooltip="最多可添加100个">
        <InlineSwitch
          value={filterState}
          onChange={(v: { target: any }) => {
            if (!v.target.checked) {
              setKecQuery(undefined);
            }
            setFilterState(v.target.checked);
          }}
        />
      </InlineField>

      {filterState ? (
        <>
          {filtercondition.map((item) => (
            <CustomIncrement
              key={item.key}
              label={item.label}
              tooltip={item.tooltip}
              datasource={['']}
              onValueChange={(value: any) => {
                const Filter = kecQuery?.Filter || {};
                _.set(Filter, [item.key], value);
                setKecQuery((state) => ({ ...state, Filter }));
              }}
            />
          ))}
        </>
      ) : null}
      <SwitchInput
        label="Search"
        tooltip="搜索条件，模糊匹配，支持字段：实例名（InstanceName）、主网卡私有IP地址（PrivateIpAddress）"
        onChange={(value: any) => setKecQuery((state) => ({ ...state, Search: value }))}
      />
    </div>
  );
};

export default Querykec;
