import * as React from 'react';
import MultiSlider, { MultiSliderProps } from '@/components/atoms/multiSlider';

export interface SliderProps
  extends Omit<MultiSliderProps, 'labelStepSize' | 'max' | 'min' | 'stepSize' | 'labelRenderer'> {
  /**
   * Gives default value to `Slider` (Used in case of uncontrolled `Slider`).
   */
  defaultValue?: number;
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
  /**
   * Indicates increment between successive labels (Must be greater than zero).
   */
  labelStepSize?: number;
  /**
   * Maximum value of the `Slider`.
   */
  max?: number;
  /**
   * Minimum value of the `Slider`.
   */
  min?: number;
  /**
   * Indicates the amount by which the handle moves (Must be greater than zero).
   */
  stepSize?: number;
  /**
   * Callback to render a custom label.
   * If `true`, labels will use number value formatted to `labelPrecision` decimal places.
   * If `false`, labels will not be shown.
   */
  labelRenderer?: boolean | ((value: number) => string);
}

export const Slider = (props: SliderProps) => {
  const { value: valueProp, defaultValue = 0, onChange, onRelease, ...rest } = props;

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
      <MultiSlider.Handle value={value} onChange={onChangeHandler} onRelease={onRelease} fillBefore={true} />
    </MultiSlider>
  );
};

Slider.displayName = 'Slider';

export default Slider;
