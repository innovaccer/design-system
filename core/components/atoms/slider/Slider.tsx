import * as React from 'react';
import MultiSlider, { MultiSliderProps } from '@/components/atoms/multiSlider';

export interface SliderProps extends MultiSliderProps {
  /**
   * Accessible label for the slider handle
   */
  'aria-label'?: string;
  /**
   * Associates the slider handle with an external label
   */
  'aria-labelledby'?: string;
  /**
   * Gives default value to `Slider` (Used in case of uncontrolled `Slider`).
   */
  defaultValue: number;
  /**
   * Value of `Slider`(Used in case of controlled `Slider`).
   */
  value?: number;
  /**
   * Callback invoked when the value changes.
   */
  onChange?: (value: number) => void;
  /**
   * Callback invoked when the handle is released.
   */
  onRelease?: (value: number) => void;
}

export const Slider = (props: SliderProps) => {
  const { value: valueProp, defaultValue, onRelease, onChange, ...rest } = props;

  const [value, setValue] = React.useState(valueProp === undefined ? defaultValue : valueProp);

  React.useEffect(() => {
    if (valueProp !== undefined) {
      setValue(valueProp);
    }
  }, [valueProp]);

  const onChangeHandler = (newValue: number) => {
    if (valueProp === undefined) {
      setValue(newValue);
    }
    if (onChange) onChange(newValue);
  };

  return (
    <MultiSlider {...rest}>
      <MultiSlider.Handle
        value={value}
        onChange={onChangeHandler}
        onRelease={onRelease}
        fillBefore={true}
        aria-label={props['aria-label']}
        aria-labelledby={props['aria-labelledby']}
      />
    </MultiSlider>
  );
};

Slider.displayName = 'Slider';
Slider.defaultProps = {
  ...MultiSlider.defaultProps,
  defaultValue: 0,
};

export default Slider;
