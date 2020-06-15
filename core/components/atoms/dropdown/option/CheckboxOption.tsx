import * as React from 'react';
import { OptionTypeProps } from './index';
import Checkbox from '@/components/atoms/checkbox';

const CheckboxOption = (props: OptionTypeProps) => {
  const {
    className,
    selected,
    onChange,
    optionData,
  } = props;

  const { label } = optionData;

  const onChangeHandler = (checked: boolean) => {
    if (onChange) onChange(checked);
  };

  return (
    <div className={className}>
      <Checkbox
        label={label}
        checked={selected}
        onChange={onChangeHandler}
      />
    </div>
  );
};

export default CheckboxOption;
