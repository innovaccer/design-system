import * as React from 'react';
import { DateRangePickerProps, DateRangePickerState } from "./DateRangePicker";
declare type TriggerProps = {
    inputFormat: DateRangePickerProps['inputFormat'];
    startInputOptions: DateRangePickerProps['startInputOptions'];
    endInputOptions: DateRangePickerProps['endInputOptions'];
    validators: DateRangePickerProps['validators'];
    state: DateRangePickerState;
    setState: any;
    startInputRef?: React.Ref<HTMLInputElement>;
    endInputRef?: React.Ref<HTMLInputElement>;
    onStartInputKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
    onEndInputKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
    onStartInputActivate?: () => void;
    onEndInputActivate?: () => void;
};
export declare const Trigger: (props: TriggerProps) => React.JSX.Element;
export {};
