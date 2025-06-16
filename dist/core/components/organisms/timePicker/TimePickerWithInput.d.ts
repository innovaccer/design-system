import * as React from 'react';
import { InputMaskProps } from '@/index.type';
import { Validators } from '@/utils/types';
export type AMPMType = 'AM' | 'PM';
export type InputFormat = 'hh:mm AM' | 'hh:mm';
export type TimeType = number | string;
export interface TimePickerInputProps {
    time?: TimeType;
    inputOptions: Omit<InputMaskProps, 'mask' | 'value' | 'validators'>;
    inputFormat: InputFormat;
    outputFormat: InputFormat;
    validators: Validators;
    onTimeChange?: (timeVal?: string) => void;
    error?: boolean;
}
export declare const TimePickerWithInput: {
    (props: TimePickerInputProps): React.JSX.Element;
    defaultProps: {
        inputFormat: string;
        outputFormat: string;
        inputOptions: {};
        validators: ((val: string, format: string) => boolean)[];
    };
    displayName: string;
};
export default TimePickerWithInput;
