import * as React from 'react';
import { Day, View } from './types';
export interface SharedProps {
    monthsInView?: number;
    jumpView?: boolean;
    firstDayOfWeek?: Day;
    view?: View;
    disabledBefore?: Date;
    disabledAfter?: Date;
    yearNav?: number;
    monthNav?: number;
}
export declare type CalendarProps = {
    onDateChange?: (date: Date) => void;
    onRangeChange?: (startDate: Date | undefined, endDate: Date | undefined) => void;
    date?: Date;
    rangePicker?: boolean;
    startDate?: Date;
    endDate?: Date;
    rangeLimit?: number;
} & SharedProps;
export declare const Calendar: React.FunctionComponent<CalendarProps>;
export default Calendar;
