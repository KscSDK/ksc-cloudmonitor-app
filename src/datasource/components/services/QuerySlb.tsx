import React, { FC, useState, useEffect } from "react";
import SwitchIncrement from "../common/SwtichIncrement";
import CustomIncrement from "../common/CustomIncrement";
import { InlineSwitch, LegacyForms, InlineField } from "@grafana/ui";

const { FormField } = LegacyForms;
const QuerySlb: FC<any> = ({ onChange }) => {
  const [filterState, setFilterState] = useState(false);
  const [slbquery, setSlb] = useState<{ [name: string]: any }>();

  useEffect(() => {
    onChange && onChange(slbquery);
  }, [slbquery, onChange]);
  return (
    <div className="common-content">
      <div className="form-field">
        <FormField
          tooltip="负载均衡的状态，已绑定，未绑定，associate|disassociate"
          label="State"
          labelWidth={12}
          inputWidth={20}
          placeholder=" "
          onChange={(e) =>
            setSlb((state) => ({ ...state, State: e.target.value }))
          }
        />
      </div>
      <SwitchIncrement
        label="LoadBalancerId"
        tooltip="缺省则描述region下所有的负载均衡信息"
        datasource={[""]}
        onChange={(value) =>
          setSlb((state) => ({ ...state, ["LoadBalancerId"]: value }))
        }
      />
      <SwitchIncrement
        label="ProjectId"
        tooltip="缺省默认项目"
        datasource={[""]}
        onChange={(value) =>
          setSlb((state) => ({ ...state, ["ProjectId"]: value }))
        }
      />
      <InlineField labelWidth={24} label="Filter" tooltip="最多可添加100个">
        <InlineSwitch
          value={filterState}
          onChange={(v: { target: any }) => {
            if (!v.target.checked) {
              setSlb((state) => ({ ...state, Filter: {} }));
            }
            setFilterState(v.target.checked);
          }}
        />
      </InlineField>
      {filterState ? (
        <CustomIncrement
          label="vpc-id"
          tooltip="VPC的ID"
          datasource={[""]}
          onValueChange={(value: any) => {
            const Filter = slbquery?.Filter || {};
            Filter["vpc-id"] = value;
            setSlb((state) => ({ ...state, Filter }));
          }}
        />
      ) : null}
    </div>
  );
};

export default QuerySlb;
