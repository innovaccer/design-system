import * as React from 'react';
import { SharedProps } from "../calendar/Calendar";
import { DateType, DateFormat } from "../calendar/types";
import { PopoverProps, InputMaskProps } from "../../../index.type";
import { Validators } from "../../../utils/types";
export declare type DatePickerProps = SharedProps & {
    onDateChange?: (date: Date | undefined, dateVal?: string) => void;
    date?: DateType;
    withInput?: boolean;
    open?: boolean;
    position: PopoverProps['position'];
    inputFormat: DateFormat;
    outputFormat: DateFormat;
    inputOptions: Omit<InputMaskProps, 'mask' | 'value'>;
    validators: Validators;
    closeOnSelect: boolean;
    showTodayDate?: boolean;
    children?: React.ReactNode;
    onError?: (date: Date | undefined, dateVal?: string) => void;
    popoverOptions?: PopoverOptions;
};
export interface DatePickerState {
    init: boolean;
    date?: Date;
    error: boolean;
    open: boolean;
}
interface PopoverOptions {
    appendToBody?: PopoverProps['appendToBody'];
    hideOnReferenceEscape?: PopoverProps['hideOnReferenceEscape'];
    boundaryElement?: PopoverProps['boundaryElement'];
}
export declare class DatePicker extends React.Component<DatePickerProps, DatePickerState> {
    static defaultProps: {
        position: string;
        inputFormat: string;
        outputFormat: string;
        validators: ((val: string, format: string) => boolean)[];
        inputOptions: {};
        closeOnSelect: boolean;
        size: string;
        monthsInView: number;
        view: string;
        firstDayOfWeek: string;
        jumpView: boolean;
    };
    constructor(props: DatePickerProps);
    componentDidUpdate(prevProps: DatePickerProps, prevState: DatePickerState): void;
    getError: (date?: Date | undefined) => boolean;
    onDateChangeHandler: (d?: Date | undefined) => void;
    onToggleHandler: (o: boolean, type?: string | undefined) => void;
    renderCalendar(): JSX.Element;
    render(): JSX.Element;
}
export default DatePicker;
