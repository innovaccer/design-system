import * as React from 'react';
import TimePickerWithFuzzySearch, { TimePickerDropdownProps } from './TimePickerAsDropdown';
import TimePickerAsInput, { TimePickerInputProps } from './TimePickerAsInput';

export type TimePickerProps = TimePickerInputProps & TimePickerDropdownProps;

export const TimePicker = (props: TimePickerProps) => {
  return props.withSearch ? <TimePickerWithFuzzySearch {...props} /> : <TimePickerAsInput {...props} />;
};

TimePicker.displayName = 'TimePicker';
export default TimePicker;
