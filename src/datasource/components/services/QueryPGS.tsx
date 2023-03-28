import React, { FC, useState, useEffect } from 'react';
import CustomIncrement from '../common/CustomIncrement';
import { LegacyForms } from '@grafana/ui';
const { FormField } = LegacyForms;

const pgsoption = [
  {
    label: 'DBInstanceIdentifier',
    key: 'DBInstanceIdentifier',
    tooltip: '实例id 传入实例ID，获取的是该实例的详情，否则则获取list',
  },
  {
    label: 'DBInstanceStatus',
    key: 'DBInstanceStatus',
    tooltip: '按实例状态过滤 ACTIVE（运行中）、INVALID（请续费）',
  },
  {
    label: 'GroupId',
    key: 'GroupId',
    tooltip: '实例分组id',
  },
  {
    label: 'DBInstanceType',
    key: 'DBInstanceType',
    tooltip: '取值范围: HRDS_PG高可用实例  TRDS_PG临时实例  RR_PG只读实例',
  },
  {
    label: 'Keyword',
    key: 'Keyword',
    tooltip: '按单个名称/单个VIP模糊过滤',
  },
  {
    label: 'ProjectId',
    key: 'ProjectId',
    tooltip: '默认值为所有项目',
  },
  {
    label: 'Marker',
    key: 'Marker',
    tooltip: '记录开始偏移量',
  },
  {
    label: 'MaxRecords',
    key: 'MaxRecords',
    tooltip: '每页结果中包含的最大条数',
    placeholder: '取值范围：1-100',
  },
  {
    label: 'ExpiryDateLessThan',
    key: 'ExpiryDateLessThan',
    tooltip: '按照实例过期时间过滤',
    placeholder: '取值范围>0',
  },
  {
    label: 'Order',
    key: 'Order',
    tooltip: '区分大小写，取值范围：DEFAULT（默认排序方式），GROUP（按复制组排序，会把只读实例排在所属主实例的后面）',
  },
];
const pgsSwitchOption = [
  {
    label: 'DBInstanceIdentifierIn',
    key: 'DBInstanceIdentifierIn',
    tooltip: '实例id列表',
  },
  {
    label: 'DBInstanceNameIn',
    key: 'DBInstanceNameIn',
    tooltip: '实例名称列表,支持模糊查询',
  },
  {
    label: 'VipIn',
    key: 'VipIn',
    tooltip: 'vip列表',
  },
];
const QueryPGS: FC<any> = ({ onChange }) => {
  const [pgsquery, setPgs] = useState<{ [name: string]: string | string[] }>();
  useEffect(() => {
    onChange && onChange(pgsquery);
  }, [pgsquery, onChange]);

  return (
    <div className="common-content">
      {pgsoption.map((item: any, index) => (
        <div className="repeat-field" key={item.key + index}>
          <FormField
            label={item.label}
            labelWidth={10}
            inputWidth={20}
            placeholder={item?.placeholder || ''}
            onChange={(e: any) => setPgs((state) => ({ ...state, [item.key]: e.target.value }))}
            tooltip={item?.tooltip || ''}
          />
        </div>
      ))}
      {pgsSwitchOption.map((item, index) => (
        <CustomIncrement
          key={item.key}
          label={item.key}
          tooltip={item?.tooltip || ''}
          datasource={['']}
          onValueChange={(value: any) => setPgs((state) => ({ ...state, [item.key]: value }))}
        />
      ))}
    </div>
  );
};

export default QueryPGS;
