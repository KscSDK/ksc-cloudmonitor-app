import { DataSourcePlugin } from '@grafana/data';
import { DataSource } from './datasource';
import { MyQuery, MyDataSourceOptions } from './types';
import QueryEditor from './components/query/QueryEditor';
import ConfigEditor from './components/config/ConfigEditor';
import { VariableQueryEditor } from './components/query/VariableQueryEditor';

export const plugin = new DataSourcePlugin<DataSource, MyQuery, MyDataSourceOptions>(DataSource)
  .setConfigEditor(ConfigEditor)
  .setQueryEditor(QueryEditor)
  .setVariableQueryEditor(VariableQueryEditor);
