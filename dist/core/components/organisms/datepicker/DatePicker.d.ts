import * as React from 'react';
import { SharedProps } from '../calendar/Calendar';
import { DateType, DateFormat } from '../calendar/types';
import { Position } from '@/components/molecules/popover';
import { Mask, InputMaskProps } from '@/components/molecules/inputMask';
import { Validator } from '../calendar/utility';
export declare type DatePickerProps = {
    onDateChange?: (date: Date, dateVal: string) => void;
    date?: DateType;
    withInput?: boolean;
    position?: Position;
    inputFormat?: DateFormat;
    outputFormat?: DateFormat;
    inputProps?: InputMaskProps;
    mask?: Mask;
    validator?: Validator;
} & SharedProps;
export declare const DatePicker: React.FunctionComponent<DatePickerProps>;
export default DatePicker;
