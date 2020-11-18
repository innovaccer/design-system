/// <reference types="react" />
import { DatePickerProps, DatePickerState } from "./DatePicker";
declare type TriggerProps = {
    inputFormat: DatePickerProps['inputFormat'];
    inputOptions: DatePickerProps['inputOptions'];
    validators: DatePickerProps['validators'];
    state: DatePickerState;
    setState: any;
};
export declare const Trigger: (props: TriggerProps) => JSX.Element;
export {};
