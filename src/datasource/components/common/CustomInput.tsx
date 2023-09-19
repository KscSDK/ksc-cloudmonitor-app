import React, { FC, useState, useEffect, useContext } from "react";
import { Input, InlineLabel, Select } from "@grafana/ui";
import { DatasourceContext } from "../../components/query/QueryEditor";

interface OwnProps {
  label?: string;
  defaultValue?: string;
  onChange?: any;
  tooltip?: any;
}

const CustomInput: FC<OwnProps> = ({
  label,
  defaultValue,
  onChange,
  tooltip,
}) => {
  const [innerValue, setInnerValue] = useState<string>();
  const dataSourceData = useContext(DatasourceContext);
  const list =
    dataSourceData && dataSourceData?.projectOptions
      ? dataSourceData?.projectOptions
      : [];
  useEffect(() => {
    setInnerValue(defaultValue);
  }, [defaultValue]);
  const dealInputChange = (event: any) => {
    const target = event.target as HTMLTextAreaElement;
    setInnerValue(target.value);
    onChange && onChange(target.value);
  };

  return (
    <>
      {label ? (
        <InlineLabel width={24} tooltip={tooltip ? tooltip : ""}>
          {label}
        </InlineLabel>
      ) : null}
      {label === "ProjectId" ? (
        <Select
          width={30}
          value={list
            .map((i: any) => ({ label: i.ProjectName, value: i.ProjectId }))
            .find((i: any) => i.value === defaultValue)}
          options={list.map((i: any) => ({
            label: i.ProjectName,
            value: i.ProjectId,
          }))}
          onChange={(v: any) => {
            onChange && onChange(v.value);
          }}
        ></Select>
      ) : (
        <Input
          className="inline-input"
          value={innerValue}
          width={20}
          placeholder=" "
          onChange={dealInputChange}
        />
      )}
    </>
  );
};

export default CustomInput;
