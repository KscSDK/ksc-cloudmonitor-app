import React, { FC, useState, useEffect } from 'react';
import { InlineSwitch, InlineLabel } from '@grafana/ui';
import SwitchIncrement from '../common/SwtichIncrement';
import CustomIncrement from '../common/CustomIncrement';
const QueryListener: FC<any> = ({ onChange }) => {
  const [filterState, setFilterState] = useState(false);
  const [listenquery, setListenQuery] = useState<{ [name: string]: any }>({});

  useEffect(() => {
    onChange && onChange(listenquery);
  }, [listenquery, onChange]);
  return (
    <div className="common-content">
      <SwitchIncrement
        label="ListenerId"
        tooltip="监听器的ID"
        datasource={['']}
        onChange={(value) => setListenQuery((state) => ({ ...state, ListenerId: value }))}
      />
      <div className="gf-form">
        <InlineLabel width={24}>Filter</InlineLabel>
        <InlineSwitch
          value={filterState}
          onChange={(v: { target: any }) => {
            setFilterState(v.target.checked);
            if (!v.target.checked) {
              setListenQuery((state) => ({ ...state, ['load-balancer-id']: '' }));
            }
          }}
        />
      </div>
      {filterState ? (
        <>
          <CustomIncrement
            label="load-balancer-id"
            tooltip="负载均衡的ID"
            datasource={['']}
            onValueChange={(value: any) => {
              const Filter = listenquery?.Filter || {};
              Filter['load-balancer-id'] = value;
              setListenQuery((state) => ({ ...state, Filter }));
            }}
          />
          <CustomIncrement
            label="certificate-id"
            tooltip="证书的ID"
            datasource={['']}
            onValueChange={(value: any) => {
              const Filter = listenquery?.Filter || {};
              Filter['certificate-id'] = value;
              setListenQuery((state) => ({ ...state, Filter }));
            }}
          />
        </>
      ) : null}
    </div>
  );
};

export default QueryListener;
