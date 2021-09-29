import * as React from 'react';
import MultiSlider, { MultiSliderProps } from '@/components/atoms/multiSlider';
import { NumberRange } from '@/common.type';

enum RangeIndex {
  START = 0,
  END = 1,
}

export interface RangeSliderProps extends MultiSliderProps {
  /**
   * Gives default value to `RangeSlider` (Used in case of uncontrolled `RangeSlider`).
   */
  defaultValue: NumberRange;
  /**
   * Denotes range value of slider. Handles will be rendered at each position in the range. <br/>
   * (Used in case of controlled `RangeSlider`)
   */
  value?: NumberRange;
  /**
   * Callback invoked when the range value changes.
   */
  onChange?: (value: NumberRange) => void;
  /**
   * Callback invoked when a handle is released.
   */
  onRelease?: (value: NumberRange) => void;
}

export const RangeSlider = (props: RangeSliderProps) => {
  const { value: valueProp, defaultValue, onChange, onRelease, ...rest } = props;

  const [value, setValue] = React.useState(valueProp === undefined ? defaultValue : valueProp);

  React.useEffect(() => {
    if (valueProp !== undefined) {
      setValue(valueProp);
    }
  }, [valueProp]);

  const onChangeHandler = (range: NumberRange) => {
    if (valueProp === undefined) {
      setValue(range);
    }
    if (onChange) onChange(range);
  };

  return (
    <MultiSlider onRangeChange={onChangeHandler} onRangeRelease={onRelease} {...rest}>
      <MultiSlider.Handle value={value[RangeIndex.START]} fillAfter={true} />
      <MultiSlider.Handle value={value[RangeIndex.END]} />
    </MultiSlider>
  );
};

RangeSlider.displayName = 'RangeSlider';
RangeSlider.defaultProps = {
  ...MultiSlider.defaultProps,
  defaultValue: [0, 10],
};

export default RangeSlider;
