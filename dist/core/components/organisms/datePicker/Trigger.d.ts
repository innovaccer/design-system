import * as React from 'react';
import { DatePickerProps, DatePickerState } from './DatePicker';
type TriggerProps = {
    inputFormat: DatePickerProps['inputFormat'];
    inputOptions: DatePickerProps['inputOptions'];
    validators: DatePickerProps['validators'];
    state: DatePickerState;
    setState: any;
};
export declare const Trigger: (props: TriggerProps) => React.JSX.Element;
export {};
