import React, { FC, useEffect } from "react";
import { DataSource } from "./datasource";
import { QueryEditorProps } from "@grafana/data";
import { MyQuery, MyDataSourceOptions } from "./types";

type Props = QueryEditorProps<DataSource, MyQuery, MyDataSourceOptions>;

const TestPage: FC<Props> = ({ onRunQuery, onChange, query, datasource }) => {
  useEffect(() => console.log("query", query), [query]);
  return <span>test page</span>;
};

export default TestPage;
