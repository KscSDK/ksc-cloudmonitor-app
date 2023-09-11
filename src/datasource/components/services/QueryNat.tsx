import React, { FC, useState, useEffect } from "react";
import { InlineSwitch, InlineField } from "@grafana/ui";
import SwitchIncrement from "../common/SwtichIncrement";
import CustomIncrement from "../common/CustomIncrement";
const QueryNat: FC<any> = ({ onChange }) => {
  const [filterState, setFilterState] = useState(false);
  const [natQuery, setNatQuery] = useState<{ [name: string]: any }>({});

  useEffect(() => {
    onChange && onChange(natQuery);
  }, [natQuery, onChange]);
  return (
    <div className="common-content">
      <SwitchIncrement
        label="NatId"
        tooltip="查询region下所有的NAT信息"
        datasource={[""]}
        onChange={(value) =>
          setNatQuery((state) => ({ ...state, NatId: value }))
        }
      />

      <SwitchIncrement
        label="ProjectId"
        tooltip="查询默认项目下所有的 NAT 信息"
        datasource={[""]}
        onChange={(value) =>
          setNatQuery((state) => ({ ...state, ProjectId: value }))
        }
      />

      <InlineField labelWidth={24} label="Filter">
        <InlineSwitch
          value={filterState}
          onChange={(v: { target: any }) => {
            setFilterState(v.target.checked);
            if (!v.target.checked) {
              setNatQuery((state) => ({ ...state, ["vpc-id"]: "" }));
            }
          }}
        />
      </InlineField>
      {filterState ? (
        <CustomIncrement
          label="vpc-id"
          tooltip="VPC的ID"
          datasource={[""]}
          onValueChange={(value: any) => {
            const Filter = natQuery?.Filter || {};
            Filter["vpc-id"] = value;
            setNatQuery((state) => ({ ...state, Filter }));
          }}
        />
      ) : null}
    </div>
  );
};

export default QueryNat;
