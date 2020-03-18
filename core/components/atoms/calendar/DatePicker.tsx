import * as React from 'react';
import Calendar from './Calendar';
import { View, Day, DateType } from './types';

export interface IDatePickerProps {
  onDateChange?: (date?: Date) => void;
  jumpView?: boolean;
  date?: DateType;
  firstDayOfWeek?: Day;
  view?: View;
  disabledBefore?: DateType;
  disabledAfter?: DateType;
  yearNav?: number;
  monthNav?: number;
}

export const DatePicker: React.FunctionComponent<IDatePickerProps> = props => {
  return (
    <Calendar
      {...props}
    />
  );
};

export default DatePicker;
