import React, { FC, useState, useEffect } from 'react';
import CustomIncrement from '../common/CustomIncrement';
import { LegacyForms } from '@grafana/ui';
const { FormField } = LegacyForms;

const krdsoption = [
  {
    label: 'DBInstanceStatus',
    key: 'DBInstanceStatus',
    tooltip: '实例状态：ACTIVE（运行中）/INVALID（请续费）',
  },
  {
    label: 'DBInstanceType',
    key: 'DBInstanceType',
    tooltip:
      'HRDS（高可用）,RR（只读实例）,TRDS（临时实例）,SINGLERDS(单机版)，ERDS（三节点企业版），CDS_HRDS(高可用_云盘版)、CDS_TRDS（临时云盘版）',
  },
  {
    label: 'Keyword',
    key: 'Keyword',
    tooltip: '按名称/VIP模糊过滤',
  },
  {
    label: 'ProjectId',
    key: 'ProjectId',
    tooltip: '项目制Id',
  },
  {
    label: 'Marker',
    key: 'Marker',
    tooltip: '记录开始偏移量',
  },
  {
    label: 'MaxRecords',
    key: 'MaxRecords',
    placeholder: '取值范围：1-100',
    tooltip: '每页结果中包含的最大条数',
  },
];
const krdsSwitchOption = [
  {
    label: 'DBInstanceIdentifierIn',
    key: 'DBInstanceIdentifierIn',
    tooltip: '实例ids',
  },
  {
    label: 'DBInstanceNameIn',
    key: 'DBInstanceNameIn',
    tooltip: '实例名称',
  },
  {
    label: 'VipIn',
    key: 'VipIn',
    tooltip: '按vip过滤',
  },
  {
    label: 'EIPIn',
    key: 'EIPIn',
    tooltip: '按eip过滤',
  },
  {
    label: 'ExpiryDateLessThan',
    key: 'ExpiryDateLessThan',
    tooltip: '按照实例过期时间过滤，取值范围：>0',
  },
];
const QueryKrds: FC<any> = ({ onChange }) => {
  const [krdsquery, setKrds] = useState<{ [name: string]: string | string[] }>();
  useEffect(() => {
    onChange && onChange(krdsquery);
  }, [krdsquery, onChange]);
  return (
    <div className="common-content">
      {krdsoption.map((item, index) => (
        <div className="repeat-field" key={item.key + index}>
          <FormField
            label={item.label}
            labelWidth={10}
            inputWidth={20}
            placeholder={item?.placeholder || ''}
            onChange={(e: any) => setKrds((state) => ({ ...state, [item.key]: e.target.value }))}
            tooltip={item?.tooltip || ''}
          />
        </div>
      ))}
      {krdsSwitchOption.map((item, index) => (
        <CustomIncrement
          key={item.key}
          label={item.key}
          tooltip={item?.tooltip || ''}
          datasource={['']}
          onValueChange={(value: any) => setKrds((state) => ({ ...state, [item.key]: value }))}
        />
      ))}
    </div>
  );
};

export default QueryKrds;
