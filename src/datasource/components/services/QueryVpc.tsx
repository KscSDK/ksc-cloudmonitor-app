import React, { FC, useState, useEffect } from 'react';
import { InlineLabel, InlineSwitch, LegacyForms } from '@grafana/ui';
import SwitchInput from '../common/SwitchInput';
import CustomInput from '../common/CustomInput';

const { FormField } = LegacyForms;

interface VpcProps {
  [name: string]: any;
}
const QueryVpc: FC<any> = ({ onChange }) => {
  const [vpcquery, setVpcQuery] = useState<VpcProps>({});
  const [filterState, setFilterState] = useState<boolean>(false);
  useEffect(() => {
    onChange && onChange(vpcquery);
  }, [vpcquery, onChange]);
  return (
    <div className="common-content">
      <div className="form-field">
        <FormField
          tooltip="单次调用可返回的最大条目数量. 传入返回的 NextToken 值可以获取剩余的其它条目. 这个值可以允许的范围是 5 - 1000"
          label="MaxResults"
          labelWidth={10}
          inputWidth={20}
          placeholder="可输入值范围：5~1000"
          onChange={(e) => setVpcQuery((state) => ({ ...state, MaxResults: e.target.value }))}
        />
      </div>
      <div className="form-field">
        <FormField
          tooltip="获取另一页返回结果的 token"
          label="NextToken"
          labelWidth={10}
          inputWidth={20}
          onChange={(e) => setVpcQuery((state) => ({ ...state, NextToken: e.target.value }))}
        />
      </div>
      <SwitchInput
        label="ProjectId"
        onChange={(value: any) => setVpcQuery((state) => ({ ...state, ProjectId: value }))}
      />
      <SwitchInput
        tooltip="对等连接的ID"
        label="VpcPeeringConnectionId"
        onChange={(value: any) => setVpcQuery((state) => ({ ...state, VpcPeeringConnectionId: value }))}
      />
      <SwitchInput
        label="Filter"
        onChange={(value: any) => setVpcQuery((state) => ({ ...state, ['vpc-id']: value }))}
      />
      <div className="gf-form">
        <InlineLabel width={24}>Filter</InlineLabel>
        <InlineSwitch
          onChange={(v: any) => {
            if (!v.target.checked) {
              setVpcQuery((state) => ({ ...state, Filter: {} }));
            }
            setFilterState(v.target.checked);
          }}
        ></InlineSwitch>
      </div>
      {filterState ? (
        <>
          <div className="gf-form">
            <InlineLabel width={24} tooltip="需要查询的发起端VPC的ID">
              vpc-id
            </InlineLabel>
            <CustomInput
              onChange={(value: any) => {
                const Filter = vpcquery?.Filter || {};
                Filter['vpc-id'] = value;
                setVpcQuery((state) => ({ ...state, Filter }));
              }}
            />
          </div>
          <div className="gf-form">
            <InlineLabel width={24} tooltip="需要查询的接受端VPC的ID">
              accept-vpc-id
            </InlineLabel>
            <CustomInput
              onChange={(value: any) => {
                const Filter = vpcquery?.Filter || {};
                Filter['accept-vpc-id'] = value;
                setVpcQuery((state) => ({ ...state, Filter }));
              }}
            />
          </div>
          <div className="gf-form">
            <InlineLabel
              width={24}
              tooltip="peering的状态，申请中（pending-acceptance）状态的只能由发起端删除，已连接（active ）状态的发起端和接受端都可以删除，已拒绝（rejected ），连接失败（failed ）是对端网段重复或其他异常的导致失败的状态，已过期（expired ），连接中（provisioning ）是对方已经接受，对等连接联通的状态"
            >
              state
            </InlineLabel>
            <CustomInput
              onChange={(value: any) => {
                const Filter = vpcquery?.Filter || {};
                Filter['state'] = value;
                setVpcQuery((state) => ({ ...state, Filter }));
              }}
            />
          </div>
        </>
      ) : null}
    </div>
  );
};

export default QueryVpc;
