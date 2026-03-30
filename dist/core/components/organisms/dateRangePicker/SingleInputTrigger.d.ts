import * as React from 'react';
import { DateRangePickerProps, DateRangePickerState } from './DateRangePicker';
type TriggerProps = {
    inputFormat: DateRangePickerProps['inputFormat'];
    inputOptions: DateRangePickerProps['startInputOptions'];
    validators: DateRangePickerProps['validators'];
    state: DateRangePickerState;
    setState: any;
};
export declare const SingleInputTrigger: (props: TriggerProps) => React.JSX.Element;
export {};
