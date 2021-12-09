import * as React from 'react';
import { CalendarProps, SharedProps } from "../calendar/Calendar";
import { DateType, DateFormat } from "../calendar/types";
import { InputMaskProps, PopoverProps } from "../../../index.type";
import { Validators } from "../../../utils/types";
export declare type InputOptions = Omit<InputMaskProps, 'mask' | 'value' | 'onChange' | 'onBlur' | 'onClick' | 'onClear'> & {
    label?: string;
};
export declare type DateRangePickerProps = SharedProps & {
    onRangeChange?: (startDate?: Date, endDate?: Date, startValue?: string, endValue?: string) => void;
    children: React.ReactNode;
    contentAlign?: 'left' | 'right';
    startDate?: DateType;
    endDate?: DateType;
    rangeLimit?: number;
    withInput?: boolean;
    singleInput?: boolean;
    open?: boolean;
    position: PopoverProps['position'];
    inputFormat: DateFormat;
    outputFormat: DateFormat;
    inputOptions: InputOptions;
    startInputOptions: InputOptions;
    endInputOptions: InputOptions;
    validators: Validators;
    monthsInView?: CalendarProps['monthsInView'];
};
export interface DateRangePickerState {
    init: boolean;
    startDate?: Date;
    endDate?: Date;
    startValue: string;
    endValue: string;
    startError: boolean;
    endError: boolean;
    yearNav?: number;
    monthNav?: number;
    open: boolean;
}
export declare class DateRangePicker extends React.Component<DateRangePickerProps, DateRangePickerState> {
    static defaultProps: {
        children: JSX.Element;
        contentAlign: string;
        monthsInView: undefined;
        position: string;
        inputFormat: string;
        outputFormat: string;
        validators: ((val: string, format: string) => boolean)[];
        inputOptions: {
            label: string;
        };
        startInputOptions: {
            label: string;
        };
        endInputOptions: {
            label: string;
        };
        size: string;
        view: string;
        firstDayOfWeek: string;
        jumpView: boolean;
    };
    monthsInView: number;
    constructor(props: DateRangePickerProps);
    componentDidUpdate(prevProps: DateRangePickerProps, prevState: DateRangePickerState): void;
    getDate: (startDate?: Date | undefined, endDate?: Date | undefined) => {
        startValue: string;
        endValue: string;
    };
    getErrors: (startDate?: Date | undefined, endDate?: Date | undefined) => {
        startError: boolean;
        endError: boolean;
    };
    getInRangeError: () => boolean;
    onRangeChangeHandler: (sDate?: Date | undefined, eDate?: Date | undefined) => void;
    onToggleHandler: (o: boolean, type?: string | undefined) => void;
    renderCalendar(): JSX.Element;
    render(): JSX.Element;
}
export default DateRangePicker;
