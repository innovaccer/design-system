import * as React from 'react';
import { Day, View } from './types';
export interface CalendarProps {
    onDateChange?: (date: Date | undefined) => void;
    onRangeChange?: (startDate: Date | undefined, endDate: Date | undefined) => void;
    monthsInView?: number;
    jumpView?: boolean;
    date?: Date;
    firstDayOfWeek?: Day;
    view?: View;
    disabledBefore?: Date;
    disabledAfter?: Date;
    rangePicker?: boolean;
    startDate?: Date;
    endDate?: Date;
    rangeLimit?: number;
    yearNav?: number;
    monthNav?: number;
}
export declare const Calendar: React.FunctionComponent<CalendarProps>;
export default Calendar;
