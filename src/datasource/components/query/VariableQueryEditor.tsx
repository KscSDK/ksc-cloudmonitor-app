// Dashbord Variable Setting面板自定义query变量部分
import React, { useState } from 'react';
import { InlineLabel } from '@grafana/ui';
import _ from 'lodash';

interface VariableQueryProps {
  query: string;
  onChange: (query: string) => void;
}

export const VariableQueryEditor: React.FC<VariableQueryProps> = ({ onChange, query }) => {
  const [state, setState] = useState(query);

  const saveQuery = () => {
    onChange(state);
  };

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => setState(event.currentTarget.value);

  return (
    <>
      <div className="gf-form help-content">
        <InlineLabel width={20}>Query</InlineLabel>
        <input
          name="rawQuery"
          className="gf-form-input gf-form-input-query"
          onBlur={saveQuery}
          onChange={handleChange}
          value={state}
        />
      </div>
      <div style={{ padding: '6px 8px' }}>
        Query帮助文档：
        <a
          style={{ color: 'cornflowerblue' }}
          onClick={() => {
            window.open('https://docs.ksyun.com/documents/41740?type=3');
          }}
        >
          https://docs.ksyun.com/documents/41740?type=3
        </a>
      </div>
    </>
  );
};
