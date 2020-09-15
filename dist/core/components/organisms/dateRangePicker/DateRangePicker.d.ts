import * as React from 'react';
import { SharedProps } from "../calendar/Calendar";
import { DateType, DateFormat } from "../calendar/types";
import { Position } from "../../molecules/popover";
import { Mask, InputMaskProps } from "../../molecules/inputMask";
import { Validator } from "../calendar/utility";
declare type CompProps = {
    onRangeChange?: (startDate: Date, endDate: Date, startValue?: string, endValue?: string) => void;
    startDate?: DateType;
    endDate?: DateType;
    rangeLimit?: number;
    withInput?: boolean;
    open?: boolean;
    position?: Position;
    inputFormat?: DateFormat;
    outputFormat?: DateFormat;
    startInputOptions?: Omit<InputMaskProps, 'mask' | 'value' | 'onChange' | 'Blur' | 'onClick' | 'onClear'>;
    endInputOptions?: Omit<InputMaskProps, 'mask' | 'value' | 'onChange' | 'Blur' | 'onClick' | 'onClear'>;
    mask?: Mask;
    validator?: Validator;
} & SharedProps;
declare const defaultProps: {
    view: string;
    firstDayOfWeek: string;
    position: string;
    inputFormat: string;
    outputFormat: string;
    validator: any;
    startInputOptions: {
        label: string;
    };
    endInputOptions: {
        label: string;
    };
};
declare type DefaultProps = Readonly<typeof defaultProps>;
export declare type DateRangePickerProps = CompProps & DefaultProps;
interface DateRangePickerState {
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
        view: string;
        firstDayOfWeek: string;
        position: string;
        inputFormat: string;
        outputFormat: string;
        validator: any;
        startInputOptions: {
            label: string;
        };
        endInputOptions: {
            label: string;
        };
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
    onBlurHandler: (_e: React.ChangeEvent<HTMLInputElement>, val: string, type: string) => void;
    onClearHandler: (type: string) => void;
    onClickHandler: (type: string) => void;
    onToggleHandler: (o: boolean, type?: string | undefined) => void;
    renderCalendar(): JSX.Element;
    render(): JSX.Element;
}
export default DateRangePicker;
