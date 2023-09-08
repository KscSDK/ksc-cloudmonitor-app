import React, { FC, useState, useEffect } from 'react';
import { LegacyForms } from '@grafana/ui';
import SwitchInput from '../common/SwitchInput';
import _ from 'lodash';
const { FormField } = LegacyForms;

interface KceProps {
  [queryKey: string]: any;
}

const Querykce: FC<any> = ({ onChange }) => {
  const [kceQuery, setKceQuery] = useState<KceProps>();
  useEffect(() => {
    onChange && onChange(kceQuery);
  }, [kceQuery, onChange]);

  return (
    <div className="common-content">
      <div className="form-field">
        <FormField
          tooltip="单次调用所返回的最大实例数目，默认10， 范围(0-20]。"
          label="MaxResults"
          labelWidth={10}
          inputWidth={20}
          placeholder="可输入值范围：0~20"
          onChange={(e) => setKceQuery((state) => ({ ...state, MaxResults: e.target.value }))}
        />
      </div>
      <div className="form-field">
        <FormField
          tooltip="分页标识，单次调用未返回全部实例时，标记下次调用的返回值的起点，默认值是0。"
          label="Marker"
          labelWidth={10}
          inputWidth={20}
          defaultValue={0}
          placeholder="Marker"
          onChange={(e) => setKceQuery((state) => ({ ...state, Marker: e.target.value }))}
        />
      </div>

      <SwitchInput
        label="Search"
        tooltip="模糊匹配，可匹配如下字段：集群名称(ClusterName)。"
        onChange={(value: any) => setKceQuery((state) => ({ ...state, Search: value }))}
      />
    </div>
  );
};

export default Querykce;
