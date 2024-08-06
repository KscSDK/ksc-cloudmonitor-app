import React, { FC, useState, useEffect } from 'react';
import { LegacyForms, InlineField } from '@grafana/ui';
import SwitchIncrement from '../common/SwtichIncrement';

const { FormField, Select } = LegacyForms;

const VolumeStatusOptions: { label: string; value: string }[] = [
  { label: '创建中', value: 'creating' },
  { label: '待挂载', value: 'available' },
  { label: '挂载中', value: 'attaching' },
  { label: '使用中', value: 'inuse' },
  { label: '卸载中', value: 'detaching' },
  { label: '扩容中', value: 'extending' },
  { label: '删除中', value: 'deleting' },
  { label: '错误', value: 'error' },
  { label: '回收中', value: 'recycling' },
  { label: '类型变更中', value: 'type_changing' },
];

const VolumeTypeOptions: { label: string; value: string }[] = [
  { label: 'ESSD_PL1', value: 'ESSD_PL1' },
  { label: 'ESSD_PL2', value: 'ESSD_PL2' },
  { label: 'ESSD_PL3', value: 'ESSD_PL3' },
  { label: 'SSD3.0', value: 'SSD3.0' },
  { label: 'EHDD', value: 'EHDD' },
];

const QueryEbs: FC<any> = ({ onChange }) => {
  const [ebsQuery, setEbs] = useState<{ [name: string]: any }>({});
  useEffect(() => {
    onChange && onChange(ebsQuery);
  }, [ebsQuery, onChange]);
  return (
    <div className="common-content">
      <div className="form-field">
        <FormField
          label="MaxResults"
          type="number"
          labelWidth={8}
          inputWidth={20}
          placeholder="取值范围： 10~1000"
          value={ebsQuery.MaxResults}
          onChange={(e) => setEbs((state) => ({ ...state, MaxResults: e.target.value }))}
          tooltip={'单次调用所返回的最大实例数目，取值为10~1000，超过1000记为1000'}
        />
      </div>
      <div className="form-field">
        <FormField
          tooltip="分页标识，单次调用未返回全部实例时，标记下次调用的返回值的起点，默认值是0。"
          label="Marker"
          labelWidth={8}
          inputWidth={20}
          defaultValue={0}
          placeholder="Marker"
          onChange={(e) => setEbs((state) => ({ ...state, Marker: e.target.value }))}
        />
      </div>
      <SwitchIncrement
        label="VolumeId"
        tooltip="实例ID"
        datasource={['']}
        onChange={(value) => setEbs((state) => ({ ...state, ['VolumeId']: value }))}
      />
      <div className="form-field">
        <InlineField tooltip="云硬盘类型" label="VolumeType" labelWidth={30}>
          <Select
            onChange={({ value }) => setEbs((state) => ({ ...state, VolumeType: value }))}
            options={VolumeTypeOptions}
          />
        </InlineField>
      </div>
      <div className="form-field">
        <InlineField tooltip="云硬盘运行状态" label="VolumeStatus" labelWidth={30}>
          <Select
            onChange={({ value }) => setEbs((state) => ({ ...state, VolumeStatus: value }))}
            options={VolumeStatusOptions}
          />
        </InlineField>
      </div>

      <div className="form-field">
        <InlineField tooltip="云硬盘作用分类" label="VolumeCategory" labelWidth={30}>
          <Select
            onChange={({ value }) => setEbs((state) => ({ ...state, VolumeCategory: value }))}
            options={[
              { label: '有效值是系统盘（system）', value: 'system' },
              { label: '数据盘（data）', value: 'data' },
            ]}
          />
        </InlineField>
      </div>
    </div>
  );
};

export default QueryEbs;
