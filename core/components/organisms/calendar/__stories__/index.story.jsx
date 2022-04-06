import * as React from 'react';
import Calendar from '../Calendar';
import Card from '@/components/atoms/card';
import { action } from '@/utils/action';

// CSF format story
export const all = () => {
  const monthsInView = 1;

  const dateValue = new Date('Jan 11 2021');

  const startDate = new Date('Jan 15 2021');

  const endDate = new Date('Jan 20 2021');

  const view = 'year';

  const rangePicker = false;

  const rangeLimit = 0;

  const firstDayOfWeek = 'saturday';

  const disabledBefore = new Date('Jan 20 2015');

  const disabledAfter = new Date('Jan 20 2028');

  const jumpView = true;

  const yearNav = -1;

  const monthNav = -1;

  const attr = {};
  if (disabledBefore) attr.disabledBefore = disabledBefore;
  if (disabledAfter) attr.disabledAfter = disabledAfter;
  if (rangeLimit) attr.rangeLimit = rangeLimit;
  if (yearNav !== -1) attr.yearNav = yearNav;
  if (monthNav !== -1) attr.monthNav = monthNav;
  
  // we redefine this function here because in storybook.json we donot get imported functions.
  const convertToDate = (
    d, format, validators
  ) => {
    let dateVal;
  
    if (d) {
      if (typeof d === 'number') {
        dateVal = new Date(d);
      } else if (typeof d === 'string') {
        return format ? translateToDate(format, d, validators) : undefined;
      } else if (!(d instanceof Date)) {
        const { year, month, date } = d;
        dateVal = new Date(year, month, date, 0, 0, 0);
      } else {
        dateVal = d;
      }
    }
    return dateVal;
  };

  return (
    <Card className="d-inline-flex" shadow="light">
      <Calendar
        monthsInView={monthsInView}
        rangePicker={rangePicker}
        jumpView={jumpView}
        date={convertToDate(dateValue)}
        startDate={convertToDate(startDate)}
        endDate={convertToDate(endDate)}
        onDateChange={(currDate) => action(`on date change : ${currDate}`)()}
        onRangeChange={(sDate, eDate) => action(`on range change: ${sDate} - ${eDate}`)()}
        view={view}
        firstDayOfWeek={firstDayOfWeek}
        {...attr}
      />
    </Card>
  );
};

export default {
  title: 'Components/Calendar/All',
  component: Calendar,
};
