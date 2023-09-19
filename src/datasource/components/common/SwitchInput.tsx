import React, { FC, useState, useContext } from "react";
import { InlineSwitch, Input, InlineField, MultiSelect } from "@grafana/ui";
import { DatasourceContext } from "../../components/query/QueryEditor";

interface OwnProps {
  label?: string;
  onChange?: any;
  tooltip?: any;
}
// switch 开关控制输入
const SwitchInput: FC<OwnProps> = ({ label, onChange, tooltip }) => {
  const [inputState, setInputState] = useState(false);
  const [innerValue, setInnerValue] = useState<string>();

  const dataSourceData = useContext(DatasourceContext);
  const list =
    dataSourceData && dataSourceData?.projectOptions
      ? dataSourceData?.projectOptions
      : [];
  const dealInputChange = (event: any) => {
    const target = event.target as HTMLTextAreaElement;
    setInnerValue(target.value);
    onChange && onChange(target.value);
  };
  return (
    <>
      <InlineField
        label={label}
        labelWidth={24}
        tooltip={tooltip ? tooltip : undefined}
      >
        <InlineSwitch
          className="switch"
          value={inputState}
          onChange={(v: { target: any }) => {
            if (!v.target.checked) {
              setInnerValue("");
              label === "ProjectId" ? onChange([]) : onChange("");
            }
            setInputState(v.target.checked);
          }}
        />
      </InlineField>
      {inputState ? (
        <>
          {label !== "ProjectId" ? (
            <Input
              className="inline-input"
              value={innerValue}
              width={20}
              placeholder=" "
              onChange={dealInputChange}
            />
          ) : (
            <MultiSelect
              width={80}
              options={list.map((i: any) => ({
                label: i.ProjectName,
                value: i.ProjectId,
              }))}
              onChange={(v: any) => {
                const projectIds = v.map((i: any) => i.value);
                onChange && onChange(projectIds);
              }}
            />
          )}
        </>
      ) : null}
    </>
  );
};

export default SwitchInput;
