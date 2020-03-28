import * as React from 'react';
import { boolean, select, date, number } from '@storybook/addon-knobs';
import { DatePicker } from '@/components/atoms/calendar';
import { action } from '@storybook/addon-actions';

// CSF format story
export const withInput = () => {
  const dateValue = date(
    'date',
    undefined
  );

  const inputFormat = select(
    'inputFormat',
    ['mm/dd/yy', 'dd/mm/yy', 'yy-mm-dd', 'mm-dd-yy', 'dd-mm-yy', 'yy-mm-dd'],
    undefined
  );

  const outputFormat = select(
    'outputFormat',
    ['mm/dd/yy', 'dd/mm/yy', 'yy-mm-dd', 'mm-dd-yy', 'dd-mm-yy', 'yy-mm-dd'],
    undefined
  );

  const view = select(
    'view',
    ['date', 'month', 'year'],
    undefined
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
  if (yearNav !== -1) attr.yearNav = yearNav;
  if (monthNav !== -1) attr.monthNav = monthNav;

  return (
    <DatePicker
      withInput={true}
      inputFormat={inputFormat}
      outputFormat={outputFormat}
      jumpView={jumpView}
      date={dateValue}
      onDateChange={(currDate?: Date, currValue?: string) => action(`on date change : ${currDate} --- ${currValue}`)()}
      view={view}
      firstDayOfWeek={firstDayOfWeek}
      {...attr}
    />
  );
};

// Required for CSF format story
// https://medium.com/storybookjs/component-story-format-66f4c32366df
export default { title: 'Calendar/Datepicker' };
