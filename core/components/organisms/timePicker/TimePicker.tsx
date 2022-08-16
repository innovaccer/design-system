import * as React from 'react';
import TimePickerWithSearch, { TimePickerDropdownProps } from './TimePickerWithSearch';
import TimePickerWithInput, { TimePickerInputProps } from './TimePickerWithInput';

export type TimePickerProps = TimePickerInputProps & TimePickerDropdownProps;

export const TimePicker = (props: TimePickerProps) => {
  return props.withSearch ? <TimePickerWithSearch {...props} /> : <TimePickerWithInput {...props} />;
};

TimePicker.defaultProps = {
  ...TimePickerWithInput.defaultProps,
  ...TimePickerWithSearch.defaultProps,
};

TimePicker.displayName = 'TimePicker';
export default TimePicker;
