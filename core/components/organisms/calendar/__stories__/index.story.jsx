import * as React from 'react';
import Calendar from '../Calendar';
import Card from '@/components/atoms/card';
import { action } from '@/utils/action';
import { convertToDate } from '@/components/organisms/calendar/utility';

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
