import React, { FC, useEffect, useRef, useState } from 'react';
import { LegacyForms } from '@grafana/ui';
import _ from 'lodash';

const { Select } = LegacyForms;
interface SubItem {
  [name: number]: string[];
}

interface OwnProps {
  subChosed: SubItem;
  onChange: (value: string) => void;
  defaultValue?: string;
}
const MetricSubSelect: FC<OwnProps> = ({ subChosed = {}, onChange, defaultValue }) => {
  const subSeletValues = useRef<any[]>([]);
  const [subValues, setSubValues] = useState<any[]>([]);
  useEffect(() => {
    subSeletValues.current = [];
    setSubValues([]);
    console.log('subchosed', subChosed);
  }, [subChosed]);

  useEffect(() => {
    console.log('defaultValue', defaultValue);
    if (defaultValue && defaultValue.includes('[') && defaultValue.includes(']')) {
      const subChoseArray = defaultValue.split('[')[1].split(']')[0].split(',');
      const defaultSubValue = subChoseArray.map((i: any) => ({ label: i, value: i }));
      setSubValues(defaultSubValue);
      subSeletValues.current = defaultSubValue;
    } else {
      subSeletValues.current = [];
      setSubValues([]);
    }
  }, [defaultValue]);
  const onMetricItemChange = (value: any, index: number) => {
    subSeletValues.current[index] = value;
    setSubValues((state) => {
      state[index] = value;
      return state;
    });
    if (subSeletValues.current.length !== Object.keys(subChosed).length) {
      return;
    }
    const stringMetric = subSeletValues.current.map((i) => i.value).toString();
    onChange && onChange(stringMetric);
  };

  return (
    <>
      {Array.isArray(Object.keys(subChosed)) &&
        Object.keys(subChosed).map((item: string, index: number) => {
          const subChosedOptions = Array.from(new Set(subChosed[Number(item)] || [])).map((i) => ({
            label: i,
            value: i,
          }));
          return (
            <div key={item + index + subValues[index]}>
              <Select
                width={'auto'}
                value={subValues[index]}
                options={subChosedOptions}
                allowCustomValue={true}
                isSearchable={true}
                onChange={(value: any) => onMetricItemChange(value, index)}
                placeholder=" "
              />
            </div>
          );
        })}
    </>
  );
};

export default MetricSubSelect;
