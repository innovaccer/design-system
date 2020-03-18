import * as React from 'react';
import Calendar from './Calendar';
import { View, Day, DateType } from './types';

export interface IRangePickerProps {
  onRangeChange?: (startDate?: Date, endDate?: Date) => void;
  monthsInView?: number;
  jumpView?: boolean;
  firstDayOfWeek?: Day;
  view?: View;
  disabledBefore?: DateType;
  disabledAfter?: DateType;
  startDate?: DateType;
  endDate?: DateType;
  rangeLimit?: number;
  yearNav?: number;
  monthNav?: number;
}

export const RangePicker: React.FunctionComponent<IRangePickerProps> = props => {
  return (
    <Calendar
      rangePicker={true}
      {...props}
    />
  );
};

export default RangePicker;
