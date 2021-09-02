import * as React from 'react';
import { OptionTypeProps } from './index';
import Checkbox from '@/components/atoms/checkbox';

const CheckboxOption = (props: OptionTypeProps) => {
  const { className, selected, optionData, onChangeHandler, onUpdateActiveOption, dataTest } = props;

  const { label, disabled } = optionData;

  return (
    <div className={className} onMouseEnter={onUpdateActiveOption} data-test={dataTest} data-disabled={disabled}>
      <Checkbox
        label={label}
        disabled={disabled}
        checked={selected}
        onChange={onChangeHandler}
        tabIndex={-1}
        className="OptionCheckbox"
        data-test={`${dataTest}--Checkbox`}
      />
    </div>
  );
};

export default CheckboxOption;
