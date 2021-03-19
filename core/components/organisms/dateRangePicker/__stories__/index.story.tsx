import * as React from 'react';
import { boolean, select, date, number } from '@storybook/addon-knobs';
import { DateRangePicker, InputMask, Card } from '@/index';
import { action } from '@storybook/addon-actions';

// CSF format story
export const all = () => {
  const withInput = boolean(
    'withInput',
    false
  );

  const open = boolean(
    'open',
    false
  );

  const monthsInView = number(
    'monthsInView',
    withInput ? 2 : 1
  );

  const inputFormat = select(
    'inputFormat',
    ['mm/dd/yyyy', 'dd/mm/yyyy', 'yyyy-mm-dd', 'mm-dd-yyyy', 'dd-mm-yyyy', 'yyyy-mm-dd'],
    undefined
  );

  const outputFormat = select(
    'outputFormat',
    ['mm/dd/yyyy', 'dd/mm/yyyy', 'yyyy-mm-dd', 'mm-dd-yyyy', 'dd-mm-yyyy', 'yyyy-mm-dd'],
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

  if (withInput) {
    return (
      <DateRangePicker
        withInput={withInput}
        open={open}
        monthsInView={monthsInView}
        inputFormat={inputFormat}
        outputFormat={outputFormat}
        jumpView={jumpView}
        startDate={startDate}
        endDate={endDate}
        onRangeChange={(sDate?: Date, eDate?: Date, sValue?: string, eValue?: string) => action(`on range change: ${sDate} - ${eDate} ---- ${sValue} - ${eValue}`)()}
        view={view}
        firstDayOfWeek={firstDayOfWeek}
        {...attr}
      />
    );
  }
  return (
    <Card
      className="d-inline-flex"
      shadow="light"
    >
      <DateRangePicker
        withInput={withInput}
        monthsInView={monthsInView}
        jumpView={jumpView}
        startDate={startDate}
        endDate={endDate}
        onRangeChange={(sDate?: Date, eDate?: Date, sValue?: string, eValue?: string) => action(`on range change: ${sDate} - ${eDate} ---- ${sValue} - ${eValue}`)()}
        view={view}
        firstDayOfWeek={firstDayOfWeek}
        {...attr}
      />
    </Card>
  );
};

export default {
  title: 'Components/DateRangePicker',
  component: DateRangePicker,
  subcomponents: { InputMask }
};
