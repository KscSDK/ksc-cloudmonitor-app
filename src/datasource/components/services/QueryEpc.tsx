import React, { FC, useState, useEffect } from "react";
import { InlineSwitch, LegacyForms, InlineField } from "@grafana/ui";
import CustomIncrement from "../common/CustomIncrement";
import SwitchIncrement from "../common/SwtichIncrement";
import _ from "lodash";
const { FormField } = LegacyForms;

const epcoptions = [
  {
    label: "host-name",
    key: "host-name",
    tooltip: "裸金属服务器的名称，仅支持精确查询",
  },
  {
    label: "vpc-id",
    key: "vpc-id",
    tooltip: "裸金属服务器的VPC ID",
  },
  {
    label: "subnet-id",
    key: "subnet-id",
    tooltip: "裸金属服务器的子网ID",
  },
  {
    label: "cabinet-id",
    key: "cabinet-id",
    tooltip: "托管裸金属服务器的机柜ID",
  },
  {
    label: "host-type",
    key: "host-type",
    tooltip: "裸金属服务器类型",
  },
  {
    label: "epc-host-status",
    key: "epc-host-status",
    tooltip: "裸金属服务器状态",
  },
  {
    label: "os-name",
    key: "os-name",
    tooltip: "操作系统名称",
  },
  {
    label: "product-type",
    key: "product-type",
    tooltip: "类型",
  },
];
const QueryEpc: FC<any> = ({ onChange }) => {
  const [filterState, setFilterState] = useState(false);
  const [epcquery, setEpc] = useState<{ [name: string]: any }>({});

  useEffect(() => {
    onChange && onChange(epcquery);
  }, [epcquery, onChange]);
  return (
    <div className="common-content">
      <div className="form-field">
        <FormField
          label="MaxResults"
          type="number"
          labelWidth={8}
          inputWidth={20}
          placeholder="取值范围： 5- 1000"
          value={epcquery.MaxResults}
          onChange={(e) =>
            setEpc((state) => ({ ...state, MaxResults: e.target.value }))
          }
          tooltip={"单次调用所返回的最大实例数目，取值范围： 5- 1000"}
        />
      </div>
      <div className="form-field">
        <FormField
          label="NextToken"
          type="number"
          labelWidth={8}
          inputWidth={20}
          placeholder="NextToken Input"
          value={epcquery.NextToken}
          onChange={(e) =>
            setEpc((state) => ({ ...state, NextToken: e.target.value }))
          }
          tooltip={"获取另一页返回结果的 token"}
        />
      </div>
      <SwitchIncrement
        label="HostId"
        tooltip="裸金属服务器资源ID，取值范围：1-100"
        datasource={[""]}
        onChange={(value) => setEpc((state) => ({ ...state, HostId: value }))}
      />
      <SwitchIncrement
        label="ProjectId"
        datasource={[""]}
        onChange={(value) =>
          setEpc((state) => ({ ...state, ProjectId: value }))
        }
      />

      <InlineField labelWidth={24} label="Filter">
        <InlineSwitch
          value={filterState}
          onChange={(v: { target: any }) => {
            setFilterState(v.target.checked);
            if (!v.target.checked) {
              setEpc((state) => ({ ...state, Filter: {} }));
            }
          }}
        />
      </InlineField>
      {filterState ? (
        <>
          {epcoptions.map((item, index) => (
            <CustomIncrement
              key={item.key}
              label={item.label}
              tooltip={item.tooltip}
              datasource={[""]}
              onValueChange={(value: any) => {
                const Filter = epcquery?.Filter || {};
                _.set(Filter, [item.key], value);
                setEpc((state) => ({ ...state, Filter }));
              }}
            />
          ))}
        </>
      ) : null}
    </div>
  );
};

export default QueryEpc;
