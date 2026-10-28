import * as React from 'react';
import { DatePickerProps, DatePickerState } from "./DatePicker";
declare type TriggerProps = {
    inputFormat: DatePickerProps['inputFormat'];
    inputOptions: DatePickerProps['inputOptions'];
    validators: DatePickerProps['validators'];
    state: DatePickerState;
    setState: any;
    inputRef?: React.Ref<HTMLInputElement>;
    onInputKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
    popupId?: string;
};
export declare const Trigger: (props: TriggerProps) => React.JSX.Element;
export {};
