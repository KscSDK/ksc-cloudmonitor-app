import React, { FC, useState, useEffect } from 'react';
import SwitchIncrement from '../common/SwtichIncrement';
import CustomIncrement from '../common/CustomIncrement';
import { InlineSwitch, InlineField } from '@grafana/ui';

const QueryBws: FC<any> = ({ onChange }) => {
  const [filterState, setFilterState] = useState(false);
  const [bwsQuery, setBws] = useState<{ [name: string]: any }>({});
  useEffect(() => {
    onChange && onChange(bwsQuery);
  }, [bwsQuery, onChange]);
  return (
    <div className="common-content">
      <SwitchIncrement
        label="BandWidthShareId"
        tooltip="默认: 查询region下所有的共享带宽的ID"
        datasource={['']}
        onChange={(value) => setBws((state) => ({ ...state, BandWidthShareId: value }))}
      />
      <SwitchIncrement
        label="ProjectId"
        tooltip="缺省值: 默认项目"
        datasource={['']}
        onChange={(value) => setBws((state) => ({ ...state, ProjectId: value }))}
      />
      <InlineField labelWidth={24} label="Filter">
        <InlineSwitch
          onChange={(v: any) => {
            if (!v.target.checked) {
              setBws((state) => ({ ...state, Filter: {} }));
            }
            setFilterState(v.target.checked);
          }}
        />
      </InlineField>

      {filterState ? (
        <CustomIncrement
          label="allocation-id"
          tooltip="弹性IP的ID"
          datasource={['']}
          onValueChange={(value: any) => setBws((state) => ({ ...state, Filter: { ['allocation-id']: value } }))}
        />
      ) : null}
    </div>
  );
};

export default QueryBws;
