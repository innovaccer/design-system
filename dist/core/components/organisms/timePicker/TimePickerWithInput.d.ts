import { InputMaskProps } from "../../../index.type";
import { Validators } from "../../../utils/types";
export declare type AMPMType = 'AM' | 'PM';
export declare type InputFormat = 'hh:mm AM' | 'hh:mm';
export declare type TimeType = number | string;
export interface TimePickerInputProps {
    time?: TimeType;
    inputOptions: Omit<InputMaskProps, 'mask' | 'value' | 'validators'>;
    inputFormat: InputFormat;
    outputFormat: InputFormat;
    validators: Validators;
    onTimeChange?: (timeVal?: string) => void;
}
export declare const TimePickerWithInput: {
    (props: TimePickerInputProps): JSX.Element;
    defaultProps: {
        inputFormat: string;
        outputFormat: string;
        inputOptions: {};
        validators: ((val: string, format: string) => boolean)[];
    };
    displayName: string;
};
export default TimePickerWithInput;
