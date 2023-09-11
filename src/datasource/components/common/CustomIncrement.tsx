import React, { FC, useState } from 'react';
import { IconButton, InlineLabel } from '@grafana/ui';
import CustomInput from './CustomInput';

import _ from 'lodash';
interface OwnProps {
  datasource: string[];
  label?: string;
  tooltip?: any;
  onAdd?: (value: string[]) => void;
  onDelete?: (value: string[]) => void;
  onValueChange?: (value: string[]) => void;
}
const CustomIncrement: FC<OwnProps> = ({ datasource, onAdd, onDelete, onValueChange, label, tooltip }) => {
  const [incrementData, setIncrement] = useState<string[]>(datasource);
  // onInputChange
  const dealValueByIndex = (value: string, index: number) => {
    const sourceList = _.cloneDeep(incrementData);
    sourceList[index] = value;
    setIncrement(sourceList);
    const filterEmptyList = sourceList.filter((item) => item !== '');
    onValueChange && onValueChange(filterEmptyList);
  };
  const addItem = () => {
    if (incrementData.length === 100) {
      return;
    }
    const addArrays = _.cloneDeep(incrementData);
    const addArr = addArrays.concat(['']);
    setIncrement(addArr);
    onAdd && onAdd(addArr);
  };
  // delete
  const deleteItem = (delIndex: number) => {
    if (incrementData.length === 0) {
      return;
    }
    const delArrays = _.cloneDeep(incrementData);
    const delArr = delArrays.filter((item: string, index: number) => index !== delIndex);
    setIncrement(delArr);
    const filterEmptyList = delArr.filter((item) => item !== '');
    onValueChange && onValueChange(filterEmptyList);
  };

  return (
    <>
      {label || tooltip ? (
        <InlineLabel width={24} tooltip={tooltip ? tooltip : undefined}>
          {label}
        </InlineLabel>
      ) : null}
      {incrementData.map((item: any, index: number) => (
        <>
          <CustomInput defaultValue={item} onChange={(value: string) => dealValueByIndex(value, index)} />
          <IconButton className="inline-button" name="minus" onClick={() => deleteItem(index)} />
        </>
      ))}
      <IconButton className="inline-button-add" name="plus" onClick={() => addItem()} />
    </>
  );
};

export default CustomIncrement;
