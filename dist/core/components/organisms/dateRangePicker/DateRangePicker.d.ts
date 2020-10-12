import * as React from 'react';
import { SharedProps } from "../calendar/Calendar";
import { DateType, DateFormat } from "../calendar/types";
import { Position } from "../../molecules/popover";
import { InputMaskProps } from "../../molecules/inputMask";
import { Validators } from "../../../utils/types";
export declare type DateRangePickerProps = SharedProps & {
    onRangeChange?: (startDate?: Date, endDate?: Date, startValue?: string, endValue?: string) => void;
    startDate?: DateType;
    endDate?: DateType;
    rangeLimit?: number;
    withInput?: boolean;
    open?: boolean;
    position: Position;
    inputFormat: DateFormat;
    outputFormat: DateFormat;
    startInputOptions: Omit<InputMaskProps, 'mask' | 'value' | 'onChange' | 'onBlur' | 'onClick' | 'onClear' | 'error'> & {
        label?: string;
    };
    endInputOptions: Omit<InputMaskProps, 'mask' | 'value' | 'onChange' | 'onBlur' | 'onClick' | 'onClear' | 'error'> & {
        label?: string;
    };
    validators: Validators;
};
interface DateRangePickerState {
    init: boolean;
    startDate?: Date;
    endDate?: Date;
    startError: boolean;
    endError: boolean;
    yearNav?: number;
    monthNav?: number;
    open: boolean;
}
export declare class DateRangePicker extends React.Component<DateRangePickerProps, DateRangePickerState> {
    static defaultProps: {
        monthsInView: number;
        position: string;
        inputFormat: string;
        outputFormat: string;
        validators: ((val: string, format: string) => boolean)[];
        startInputOptions: {
            label: string;
        };
        endInputOptions: {
            label: string;
        };
        view: string;
        firstDayOfWeek: string;
    };
    monthsInView: number;
    constructor(props: DateRangePickerProps);
    componentDidUpdate(prevProps: DateRangePickerProps, prevState: DateRangePickerState): void;
    getErrors: (startDate?: Date | undefined, endDate?: Date | undefined) => {
        startError: boolean;
        endError: boolean;
    };
    getInRangeError: () => boolean;
    onRangeChangeHandler: (sDate?: Date | undefined, eDate?: Date | undefined) => void;
    updateNav: (type: string) => void;
    onChangeHandler: (_e: React.ChangeEvent<HTMLInputElement>, val: string, type: string) => void;
    onFocusHandler: () => void;
    onBlurHandler: (_e: React.ChangeEvent<HTMLInputElement>, val: string, type: string) => void;
    onClearHandler: (type: string) => void;
    onClickHandler: (type: string) => void;
    onToggleHandler: (o: boolean, type?: string | undefined) => void;
    renderCalendar(): JSX.Element;
    render(): JSX.Element;
}
export default DateRangePicker;
