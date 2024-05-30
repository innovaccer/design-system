import * as React from 'react';
import { action } from '@/utils/action';
import { Calendar } from '@/index';

// CSF format story
export const all = () => {
  const monthsInView = 1;

  const dateValue = new Date('Jan 11 2023');

  const view = 'date';

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

  // we redefine this function here because in storybook.json we do not get imported functions.

  const isValid = (validators, ...value) => {
    const iterator = Array.isArray(validators) ? validators : [validators];

    return iterator.every((validator) => validator(...value));
  };

  const translateToDate = (format, val, validators) => {
    if (isValid(validators, val, format)) {
      const separator = format.includes('/') ? '/' : '-';

      let year = -1,
        month = -1,
        date = -1;
      const v = val.split(separator);
      format.split(separator).forEach((f, i) => {
        switch (f) {
          case 'mm':
            month = +v[i] - 1;
            break;
          case 'yyyy':
            year = +v[i];
            break;
          case 'dd':
            date = +v[i];
            break;
        }
      });
      const d = convertToDate({ year, month, date });
      return d;
    } else {
      return undefined;
    }
  };

  const convertToDate = (d, format, validators) => {
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
    <Calendar
      monthsInView={monthsInView}
      rangePicker={rangePicker}
      jumpView={jumpView}
      date={convertToDate(dateValue)}
      events={{
        '01/12/2023': true,
      }}
      onDateChange={(currDate) => action(`on date change : ${currDate}`)()}
      onRangeChange={(sDate, eDate) => action(`on range change: ${sDate} - ${eDate}`)()}
      view={view}
      firstDayOfWeek={firstDayOfWeek}
      {...attr}
    />
  );
};

export default {
  title: 'Components/Calendar/All',
  component: Calendar,
};
