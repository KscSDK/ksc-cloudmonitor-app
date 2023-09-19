import React, { FC, useContext } from "react";
import { DatasourceContext } from "../query/QueryEditor";
import { MultiSelect } from "@grafana/ui";

interface SelectProps {
  onChange?: (value: any[]) => void;
}

const ProjectSelect: FC<SelectProps> = ({ onChange }) => {
  const datasourceData = useContext(DatasourceContext);
  const projectList =
    datasourceData && datasourceData?.projectOptions
      ? datasourceData?.projectOptions
      : [];
  return (
    <div style={{ padding: "8px" }}>
      <MultiSelect
        width={80}
        options={projectList.map((item: any) => ({
          label: item.ProjectName,
          value: item.ProjectId,
        }))}
        onChange={(v: any) => {
          const projectIds = v && v.map((i: any) => i.value);
          onChange && onChange(projectIds);
        }}
      />
    </div>
  );
};

export default ProjectSelect;
