import * as React from 'react';
import { View, Day, DateType, DateFormat } from '../calendar/types';
import { Position } from '@/components/molecules/popover';
import { Mask, InputMaskProps } from '@/components/molecules/inputMask';
import { Validator } from '../calendar/utility';
export interface DatePickerProps {
    onDateChange?: (date: Date, dateVal?: string) => void;
    jumpView?: boolean;
    date?: DateType;
    firstDayOfWeek?: Day;
    view?: View;
    disabledBefore?: DateType;
    disabledAfter?: DateType;
    yearNav?: number;
    monthNav?: number;
    withInput?: boolean;
    position?: Position;
    inputFormat?: DateFormat;
    outputFormat?: DateFormat;
    inputProps?: InputMaskProps;
    mask?: Mask;
    validator?: Validator;
}
export declare const DatePicker: React.FunctionComponent<DatePickerProps>;
export default DatePicker;
