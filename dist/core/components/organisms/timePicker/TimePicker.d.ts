import { TimePickerDropdownProps } from "./TimePickerWithSearch";
import { TimePickerInputProps } from "./TimePickerWithInput";
export declare type TimePickerProps = TimePickerInputProps & TimePickerDropdownProps;
export declare const TimePicker: {
    (props: TimePickerProps): JSX.Element;
    defaultProps: {
        timeFormat: string;
        interval: number;
        inputFormat: string;
        outputFormat: string;
        inputOptions: {};
        validators: ((val: string, format: string) => boolean)[];
    };
    displayName: string;
};
export default TimePicker;
