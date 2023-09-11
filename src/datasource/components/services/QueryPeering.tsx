import React, { FC, useState, useEffect } from "react";
import { InlineSwitch, InlineLabel, LegacyForms } from "@grafana/ui";
import SwitchIncrement from "../common/SwtichIncrement";
import CustomIncrement from "../common/CustomIncrement";

const { FormField } = LegacyForms;
const QueryPeering: FC<any> = ({ onChange }) => {
  const [filterState, setFilterState] = useState(false);
  const [peeringquery, setPeerQuery] = useState<{ [name: string]: any }>({});
  useEffect(() => {
    onChange && onChange(peeringquery);
  }, [peeringquery, onChange]);
  return (
    <div className="common-content">
      <div className="form-field">
        <FormField
          tooltip="单次调用可返回的最大条目数量. 传入返回的 NextToken 值可以获取剩余的其它条目. 这个值可以允许的范围是 5 - 1000"
          label="MaxResults"
          labelWidth={10}
          inputWidth={20}
          placeholder="可输入值范围：5~1000"
          onChange={(e) =>
            setPeerQuery((state) => ({ ...state, MaxResults: e.target.value }))
          }
        />
      </div>
      <div className="form-field">
        <FormField
          tooltip="获取另一页返回结果的 token"
          label="NextToken"
          labelWidth={10}
          inputWidth={20}
          placeholder="NextToken"
          onChange={(e) =>
            setPeerQuery((state) => ({ ...state, NextToken: e.target.value }))
          }
        />
      </div>
      <SwitchIncrement
        label="ProjectId"
        tooltip="监听器的ID"
        datasource={[""]}
        onChange={(value) =>
          setPeerQuery((state) => ({ ...state, ProjectId: value }))
        }
      />
      <SwitchIncrement
        label="VpcPeeringConnectionId"
        tooltip="监听器的ID"
        datasource={[""]}
        onChange={(value) =>
          setPeerQuery((state) => ({ ...state, VpcPeeringConnectionId: value }))
        }
      />
      <div className="gf-form">
        <InlineLabel width={24}>Filter</InlineLabel>
        <InlineSwitch
          value={filterState}
          onChange={(v: { target: any }) => {
            setFilterState(v.target.checked);
            if (!v.target.checked) {
              setPeerQuery((state) => ({ ...state, Filter: {} }));
            }
          }}
        />
      </div>
      {filterState ? (
        <>
          <CustomIncrement
            label="vpc-id"
            tooltip="需要查询的发起端VPC的ID"
            datasource={[""]}
            onValueChange={(value: any) => {
              const Filter = peeringquery?.Filter || {};
              Filter["vpc-id"] = value;
              setPeerQuery((state) => ({ ...state, Filter }));
            }}
          />
          <CustomIncrement
            label="accept-vpc-id"
            tooltip="需要查询的接受端VPC的ID"
            datasource={[""]}
            onValueChange={(value: any) => {
              const Filter = peeringquery?.Filter || {};
              Filter["accept-vpc-id"] = value;
              setPeerQuery((state) => ({ ...state, Filter }));
            }}
          />
          <CustomIncrement
            label="state"
            tooltip="peering的状态，申请中（pending-acceptance）状态的只能由发起端删除，已连接（active ）状态的发起端和接受端都可以删除，已拒绝（rejected ），连接失败（failed ）是对端网段重复或其他异常的导致失败的状态，已过期（expired ），连接中（provisioning ）是对方已经接受，对等连接联通的状态"
            datasource={[""]}
            onValueChange={(value: any) => {
              const Filter = peeringquery?.Filter || {};
              Filter["state"] = value;
              setPeerQuery((state) => ({ ...state, Filter }));
            }}
          />
        </>
      ) : null}
    </div>
  );
};

export default QueryPeering;
