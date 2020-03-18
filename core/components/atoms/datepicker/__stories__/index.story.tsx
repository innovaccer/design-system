import * as React from 'react';
import { boolean, select, date, number } from '@storybook/addon-knobs';
import DatePicker from '../DatePicker';
import Card from '@/components/atoms/card';
import { action } from '@storybook/addon-actions';

// CSF format story
export const all = () => {
  const monthsInView = number(
    'monthsInView',
    1
  );

  const dateValue = date(
    'date',
    undefined
  );

  const startDate = date(
    'startDate',
    undefined
  );

  const endDate = date(
    'endDate',
    undefined
  );

  const view = select(
    'view',
    ['date', 'month', 'year'],
    undefined
  );

  const rangePicker = boolean(
    'rangePicker',
    false
  );

  const rangeLimit = number(
    'rangeLimit',
    0
  );

  const firstDayOfWeek = select(
    'firstDayOfWeek',
    ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'],
    undefined
  );

  const disabledBefore = date(
    'disabledBefore',
    new Date('Jan 20 2015')
  );

  const disabledAfter = date(
    'disabledAfter',
    new Date('Jan 20 2028')
  );

  const jumpView = boolean(
    'jumpView',
    true
  );

  const yearNav = number(
    'yearNav',
    -1
  );

  const monthNav = number(
    'monthNav',
    -1
  );

  const attr: Record<string, any> = {};
  if (disabledBefore) attr.disabledBefore = disabledBefore;
  if (disabledAfter) attr.disabledAfter = disabledAfter;
  if (rangeLimit) attr.rangeLimit = rangeLimit;
  if (yearNav !== -1) attr.yearNav = yearNav;
  if (monthNav !== -1) attr.monthNav = monthNav;

  return (
    <Card
      shadow="light"
      style={{
        maxWidth: `${monthsInView * 330}px`
      }}
    >
      <DatePicker
        monthsInView={monthsInView}
        rangePicker={rangePicker}
        jumpView={jumpView}
        date={dateValue}
        startDate={startDate}
        endDate={endDate}
        onDateChange={(currDate?: Date) => action(`on date change : ${currDate}`)()}
        onRangeChange={(sDate?: Date, eDate?: Date) => action(`on range change: ${sDate} - ${eDate}`)()}
        view={view}
        firstDayOfWeek={firstDayOfWeek}
        {...attr}
      />
    </Card>
  );
};

// Required for CSF format story
// https://medium.com/storybookjs/component-story-format-66f4c32366df
export default { title: 'Calendar' };
