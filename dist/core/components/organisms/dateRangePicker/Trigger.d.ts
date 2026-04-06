import * as React from 'react';
import { DateRangePickerProps, DateRangePickerState } from './DateRangePicker';
type TriggerProps = {
    inputFormat: DateRangePickerProps['inputFormat'];
    startInputOptions: DateRangePickerProps['startInputOptions'];
    endInputOptions: DateRangePickerProps['endInputOptions'];
    validators: DateRangePickerProps['validators'];
    state: DateRangePickerState;
    setState: any;
};
export declare const Trigger: (props: TriggerProps) => React.JSX.Element;
export {};
