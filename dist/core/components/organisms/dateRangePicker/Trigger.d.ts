import { DateRangePickerProps, DateRangePickerState } from "./DateRangePicker";
declare type TriggerProps = {
    inputFormat: DateRangePickerProps['inputFormat'];
    startInputOptions: DateRangePickerProps['startInputOptions'];
    endInputOptions: DateRangePickerProps['endInputOptions'];
    validators: DateRangePickerProps['validators'];
    state: DateRangePickerState;
    setState: any;
};
export declare const Trigger: (props: TriggerProps) => JSX.Element;
export {};
