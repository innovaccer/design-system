import { DateRangePickerProps, DateRangePickerState } from "./DateRangePicker";
declare type TriggerProps = {
    inputFormat: DateRangePickerProps['inputFormat'];
    inputOptions: DateRangePickerProps['startInputOptions'];
    validators: DateRangePickerProps['validators'];
    state: DateRangePickerState;
    setState: any;
};
export declare const SingleInputTrigger: (props: TriggerProps) => JSX.Element;
export {};
