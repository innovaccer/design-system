/// <reference types="react" />
import { SharedProps } from "../calendar/Calendar";
import { DateType, DateFormat } from "../calendar/types";
import { Position } from "../../molecules/popover";
import { Mask, InputMaskProps } from "../../molecules/inputMask";
import { Validator } from "../calendar/utility";
export declare type DatePickerProps = {
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
} & SharedProps;
export declare const DatePicker: {
    (props: DatePickerProps): JSX.Element;
    displayName: string;
};
export default DatePicker;
