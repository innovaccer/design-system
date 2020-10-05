import * as React from 'react';
import { SharedProps } from "../calendar/Calendar";
import { DateType, DateFormat } from "../calendar/types";
import { Position } from "../../molecules/popover";
import { Mask, InputMaskProps } from "../../molecules/inputMask";
import { Validator } from "../calendar/utility";
export declare type DatePickerProps = SharedProps & {
    onDateChange?: (date: Date | undefined, dateVal?: string) => void;
    date?: DateType;
    withInput?: boolean;
    open?: boolean;
    position: Position;
    inputFormat: DateFormat;
    outputFormat: DateFormat;
    inputOptions: Omit<InputMaskProps, 'mask' | 'value' | 'onChange' | 'Blur' | 'onClick' | 'onClear' | 'error'>;
    mask?: Mask;
    validator: Validator;
    closeOnSelect: boolean;
};
interface DatePickerState {
    init: boolean;
    date?: Date;
    error: boolean;
    open: boolean;
}
export declare class DatePicker extends React.Component<DatePickerProps, DatePickerState> {
    static defaultProps: {
        position: string;
        inputFormat: string;
        outputFormat: string;
        validator: any;
        inputOptions: {};
        closeOnSelect: boolean;
        monthsInView: number;
        view: string;
        firstDayOfWeek: string;
    };
    constructor(props: DatePickerProps);
    componentDidUpdate(prevProps: DatePickerProps, prevState: DatePickerState): void;
    getError: (date?: Date | undefined) => boolean;
    onDateChangeHandler: (d?: Date | undefined) => void;
    onChangeHandler: (_e: React.ChangeEvent<HTMLInputElement>, val?: string | undefined) => void;
    onFocusHandler: () => void;
    onBlurHandler: (_e: React.ChangeEvent<HTMLInputElement>, val?: string | undefined) => void;
    onClearHandler: () => void;
    onToggleHandler: (o: boolean, type?: string | undefined) => void;
    renderCalendar(): JSX.Element;
    render(): JSX.Element;
}
export default DatePicker;
