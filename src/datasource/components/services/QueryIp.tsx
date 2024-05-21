import React, { FC, useState, useEffect } from 'react';
import { LegacyForms, InlineSwitch, InlineField } from '@grafana/ui';
// import CustomInput from '../common/CustomInput';
import SwitchIncrement from '../common/SwtichIncrement';
import CustomIncrement from '../common/CustomIncrement';
import _ from 'lodash';
const { FormField } = LegacyForms;

interface EipQueryProps {
  [queryKey: string]: any;
}

const filtercondition = [
  {
    label: 'network-interface-id',
    key: 'network-interface-id',
    tooltip: '主机的网卡信息',
  },
  {
    label: 'instance-type',
    key: 'instance-type',
    tooltip: '弹性IP绑定的实例类型，slb | ipfwd(云主机、裸金属均为ipfwd)',
  },
  {
    label: 'internet-gateway-id',
    key: 'internet-gateway-id',
    tooltip: '互联网网关的ID',
  },
  {
    label: 'band-width-share-id',
    key: 'band-width-share-id',
    tooltip: '共享带宽ID',
  },
  {
    label: 'line-id',
    key: 'line-id',
    tooltip: '线路的ID',
  },
  {
    label: 'public-ip',
    key: 'public-ip',
    tooltip: '弹性IP的IP',
  },
  {
    label: 'project-id',
    key: 'project-id',
    tooltip: '项目的ID',
  },
];
const QueryIp: FC<any> = ({ onChange }) => {
  const [filterState, setFilterState] = useState(false);
  const [eipQuery, setEipQuery] = useState<EipQueryProps>();
  useEffect(() => {
    onChange && onChange(eipQuery);
  }, [eipQuery, onChange]);

  return (
    <div className="common-content">
      <div className="form-field">
        <FormField
          tooltip="单次调用可返回的最大条目数量. 传入返回的 NextToken 值可以获取剩余的其它条目. 这个值可以允许的范围是 5 - 1000"
          label="MaxResults"
          labelWidth={10}
          inputWidth={20}
          placeholder="可输入值范围：5~1000"
          onChange={(e) => setEipQuery((state) => ({ ...state, MaxResults: e.target.value }))}
        />
      </div>
      <div className="form-field">
        <FormField
          tooltip="获取另一页返回结果的 token"
          label="NextToken"
          labelWidth={10}
          inputWidth={20}
          placeholder="NextToken"
          onChange={(e) => setEipQuery((state) => ({ ...state, NextToken: e.target.value }))}
        />
      </div>
      <div className="form-field">
        <FormField
          tooltip="弹性 IP 的版本， ipv4 | ipv6 | all"
          label="IpVersion"
          labelWidth={10}
          inputWidth={20}
          placeholder="IpVersion"
          onChange={(e) => setEipQuery((state) => ({ ...state, IpVersion: e.target.value }))}
        />
      </div>

      <SwitchIncrement
        label="AllocationId"
        tooltip="查询region下所有的弹性IP的ID"
        datasource={['']}
        onChange={(value) => setEipQuery((state) => ({ ...state, ['AllocationId']: value }))}
      />

      <SwitchIncrement
        label="ProjectId"
        tooltip="EIP所属项目的ID"
        datasource={['']}
        onChange={(value) => setEipQuery((state) => ({ ...state, ['ProjectId']: value }))}
      />

      <InlineField labelWidth={24} label="Filter">
        <InlineSwitch
          value={filterState}
          onChange={(v: { target: any }) => {
            if (!v.target.checked) {
              setEipQuery(undefined);
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
                const Filter = eipQuery?.Filter || {};
                _.set(Filter, [item.key], value);
                setEipQuery((state) => ({ ...state, Filter }));
              }}
            />
          ))}
        </>
      ) : null}
    </div>
  );
};

export default QueryIp;
