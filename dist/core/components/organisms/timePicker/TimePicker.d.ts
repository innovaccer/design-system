import { InputMaskProps } from "../../../index.type";
import { Validators } from "../../../utils/types";
export declare type AMPMType = 'AM' | 'PM';
export declare type TimeFormat = 'hh:mm AM' | 'hh:mm';
export declare type TimeType = number | string;
export interface TimePickerProps {
    time?: TimeType;
    inputOptions: Omit<InputMaskProps, 'mask' | 'value' | 'validators'>;
    inputFormat: TimeFormat;
    outputFormat: TimeFormat;
    validators: Validators;
    onTimeChange?: (timeVal?: string) => void;
}
export declare const TimePicker: {
    (props: TimePickerProps): JSX.Element;
    defaultProps: {
        inputFormat: string;
        outputFormat: string;
        inputOptions: {};
        validators: ((val: string, format: string) => boolean)[];
    };
    displayName: string;
};
export default TimePicker;
