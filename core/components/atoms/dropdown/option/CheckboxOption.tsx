import * as React from 'react';
import { OptionTypeProps } from './index';
import Checkbox from '@/components/atoms/checkbox';

const CheckboxOption = (props: OptionTypeProps) => {
  const {
    className,
    selected,
    optionData,
    onChangeHandler,
    onUpdateActiveOption,
    dataTest,
  } = props;

  const { label } = optionData;

  return (
    <div
      className={className}
      onMouseEnter={onUpdateActiveOption}
      data-test={dataTest}
    >
      <Checkbox
        label={label}
        checked={selected}
        onChange={onChangeHandler}
        tabIndex={-1}
        className="OptionCheckbox"
      />
    </div>
  );
};

export default CheckboxOption;
