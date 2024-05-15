import React, { FC, useState, useEffect } from 'react';
import SwitchIncrement from '../common/SwtichIncrement';

const QueryKS3: FC<any> = ({ onChange }) => {

  const [ks3Query, setKs3] = useState<{ [name: string]: any }>({});
  useEffect(() => {
    onChange && onChange(ks3Query);
  }, [ks3Query, onChange]);
  return (
    <div className="common-content">
      <SwitchIncrement
        label="ProjectId"
        tooltip="缺省值: 默认项目"
        datasource={['']}
        onChange={(value) => setKs3((state) => ({ ...state, ProjectId: value }))}
      />
    </div>
  );
};

export default QueryKS3;
