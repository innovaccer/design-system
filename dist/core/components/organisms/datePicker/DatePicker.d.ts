import * as React from 'react';
import { SharedProps } from "../calendar/Calendar";
import { DateType, DateFormat } from "../calendar/types";
import { Position } from "../../molecules/popover";
import { Mask, InputMaskProps } from "../../molecules/inputMask";
import { Validator } from "../calendar/utility";
declare type CompProps = {
    onDateChange?: (date: Date, dateVal: string) => void;
    date?: DateType;
    withInput?: boolean;
    open?: boolean;
    position?: Position;
    inputFormat?: DateFormat;
    outputFormat?: DateFormat;
    inputOptions?: InputMaskProps;
    mask?: Mask;
    validator?: Validator;
    closeOnSelect?: boolean;
} & SharedProps;
declare const defaultProps: {
    view: string;
    firstDayOfWeek: string;
    position: string;
    inputFormat: string;
    outputFormat: string;
    validator: any;
    inputOptions: {};
    closeOnSelect: boolean;
};
declare type DefaultProps = Readonly<typeof defaultProps>;
export declare type DatePickerProps = CompProps & DefaultProps;
interface DatePickerState {
    date?: Date;
    error: boolean;
    open: boolean;
}
export declare class DatePicker extends React.Component<DatePickerProps, DatePickerState> {
    static defaultProps: {
        view: string;
        firstDayOfWeek: string;
        position: string;
        inputFormat: string;
        outputFormat: string;
        validator: any;
        inputOptions: {};
        closeOnSelect: boolean;
    };
    constructor(props: DatePickerProps);
    componentDidUpdate(prevProps: DatePickerProps, prevState: DatePickerState): void;
    getError: (date?: Date | undefined) => boolean;
    onDateChangeHandler: (d?: Date | undefined) => void;
    onChangeHandler: (_e: React.ChangeEvent<HTMLInputElement>, val?: string | undefined) => void;
    onBlurHandler: (_e: React.ChangeEvent<HTMLInputElement>, val?: string | undefined) => void;
    onClearHandler: () => void;
    onToggleHandler: (o: boolean, type?: string | undefined) => void;
    renderCalendar(): JSX.Element;
    render(): JSX.Element;
}
export default DatePicker;
