import * as React from 'react';
import { TimePickerDropdownProps } from './TimePickerWithSearch';
import { TimePickerInputProps } from './TimePickerWithInput';
export type TimePickerProps = TimePickerInputProps & TimePickerDropdownProps;
export declare const TimePicker: {
    (props: TimePickerProps): React.JSX.Element;
    displayName: string;
};
export default TimePicker;
