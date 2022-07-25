import * as React from 'react';
import TimePickerWithFuzzySearch, { TimePickerDropdownProps } from './TimePickerAsDropdown';
import TimePickerAsInput, { TimePickerInputProps } from './TimePickerAsInput';
// import { Utils } from '@/index';

export type TimePickerProps = TimePickerInputProps & TimePickerDropdownProps;

export const TimePicker = (props: TimePickerProps) => {
  return props.withSearch ? <TimePickerWithFuzzySearch {...props} /> : <TimePickerAsInput {...props} />;
};

// TimePicker.defaultProps = {
//   inputFormat: 'hh:mm AM',
//   outputFormat: 'hh:mm AM',
//   inputOptions: {},
//   validators: [Utils.validators.time],
//   timeFormat: '12-Hour',
//   interval: 15,
// };

TimePicker.displayName = 'TimePicker';
export default TimePicker;
