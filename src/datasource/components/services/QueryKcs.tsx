import React, { FC, useState, useEffect } from 'react';
import { LegacyForms } from '@grafana/ui';

const { FormField } = LegacyForms;

const KcsQueryOptions = [
  {
    label: 'AvailableZone',
    key: 'AvailableZone',
    tooltip: '默认：对应机房的a区',
  },
  {
    label: 'CacheId',
    key: 'CacheId',
    tooltip: '缓存服务ID',
  },
  {
    label: 'Name',
    key: 'Name',
    tooltip: '缓存服务名称',
  },
  {
    label: 'Vip',
    key: 'Vip',
    tooltip: '缓存服务VIP',
  },
  {
    label: 'VpcId',
    key: 'VpcId',
    tooltip: '虚拟网络ID',
  },
  {
    label: 'VnetId',
    key: 'VnetId',
    tooltip: '终端子网ID',
  },
  {
    label: 'Offset',
    key: 'Offset',
    tooltip: '数据偏移量',
  },
  {
    label: 'Limit',
    key: 'Limit',
    tooltip: '每页数量',
    placeholder: '取值范围为：1~100',
  },
  {
    label: 'IamProjectId',
    key: 'IamProjectId',
    tooltip: '默认：查询全部项目，可传入多个的项目ID，‘,’隔开',
  },
  {
    label: 'FuzzySearch',
    key: 'FuzzySearch',
    tooltip: '模糊条件查询，可根据ID，IP，名称进行过滤',
  },
  {
    label: 'Protocol',
    key: 'Protocol',
    tooltip: '版本号，默认：查询所有，版本号：4.0、5.0',
  },
  {
    label: 'TagKey',
    key: 'TagKey',
    tooltip: '标签的key',
    placeholder: '必须同标签值一同传入',
  },
  {
    label: 'TagValue',
    key: 'TagValue',
    tooltip: '标签的value',
    placeholder: '必须同标签名一同传入',
  },
];
const QueryKcs: FC<any> = ({ onChange }) => {
  const [kcsquery, setKcs] = useState<{ [stateName: string]: string }>({});
  useEffect(() => {
    onChange && onChange(kcsquery);
  }, [kcsquery, onChange]);

  return (
    <div className="common-content">
      {KcsQueryOptions.map((item: any, index: number) => (
        <div className="repeat-field" key={item.key + index}>
          <FormField
            label={item.label}
            labelWidth={8}
            inputWidth={20}
            placeholder={item?.placeholder || ''}
            onChange={(e) => {
              setKcs((state) => ({ ...state, [item.key]: e.target.value }));
            }}
            tooltip={item.tooltip}
          />
        </div>
      ))}
    </div>
  );
};

export default QueryKcs;
