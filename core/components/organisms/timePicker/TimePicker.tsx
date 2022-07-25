import * as React from 'react';
import TimePickerAsDropdown, { TimePickerDropdownProps } from './TimePickerAsDropdown';
import TimePickerAsInput, { TimePickerInputProps } from './TimePickerAsInput';

export type TimePickerProps = TimePickerInputProps & TimePickerDropdownProps;

export const TimePicker = (props: TimePickerProps) => {
  return props.withSearch ? <TimePickerAsDropdown {...props} /> : <TimePickerAsInput {...props} />;
};

TimePicker.defaultProps = {
  ...TimePickerAsInput.defaultProps,
  ...TimePickerAsDropdown.defaultProps,
};

TimePicker.displayName = 'TimePicker';
export default TimePicker;
