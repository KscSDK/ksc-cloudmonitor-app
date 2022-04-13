import React, { FC, useState, useContext } from 'react';
import { InlineSwitch, InlineField, MultiSelect } from '@grafana/ui';
import CustomIncrement from './CustomIncrement';
import { DatasourceContext } from '../../components/query/QueryEditor';

interface OwnProps {
  label?: string;
  tooltip?: any;
  datasource: string[];
  onChange?: (value: string[]) => void;
}
const SwtichIncrement: FC<OwnProps> = ({ label, datasource, onChange, tooltip }) => {
  const [canIncrement, setCanIncrement] = useState(false);

  const dataSourceData = useContext(DatasourceContext);
  const list = dataSourceData && dataSourceData?.projectOptions ? dataSourceData?.projectOptions : [];
  return (
    <>
      <InlineField labelWidth={24} label={label} tooltip={tooltip ? tooltip : undefined}>
        <InlineSwitch
          className="switch"
          value={canIncrement}
          onChange={(v: { target: any }) => {
            if (!v.target.checked) {
              onChange && onChange(['']);
            }
            setCanIncrement(v.target.checked);
          }}
        />
      </InlineField>

      {canIncrement ? (
        <>
          {label === 'ProjectId' ? (
            <div style={{ padding: '8px' }}>
              <MultiSelect
                width={80}
                options={list.map((i: any) => ({ label: i.ProjectName, value: i.ProjectId }))}
                onChange={(v: any) => {
                  const projectids = v.map((i: any) => i.value);
                  onChange && onChange(projectids);
                }}
              ></MultiSelect>
            </div>
          ) : (
            <CustomIncrement
              datasource={datasource}
              onValueChange={(values) => {
                onChange && onChange(values);
              }}
            />
          )}
        </>
      ) : null}
    </>
  );
};

export default SwtichIncrement;
