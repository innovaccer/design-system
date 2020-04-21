import * as React from 'react';
import { boolean, select, date, number } from '@storybook/addon-knobs';
import DatePicker from '@/components/organisms/datepicker';
import Card from '@/components/atoms/card';
import InputMask from '@/components/molecules/inputMask';
import { action } from '@storybook/addon-actions';

// CSF format story
export const all = () => {
  const withInput = boolean(
    'withInput',
    false
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

  const dateValue = date(
    'date',
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

  if (withInput) {
    return (
      <DatePicker
        withInput={withInput}
        inputFormat={inputFormat}
        outputFormat={outputFormat}
        jumpView={jumpView}
        date={dateValue}
        onDateChange={(currDate?: Date) => action(`on date change : ${currDate}`)()}
        view={view}
        firstDayOfWeek={firstDayOfWeek}
        {...attr}
      />
    );
  }
  return (
    <Card
      shadow="light"
      style={{
        maxWidth: '330px'
      }}
    >
      <DatePicker
        withInput={withInput}
        inputFormat={inputFormat}
        outputFormat={outputFormat}
        jumpView={jumpView}
        date={dateValue}
        onDateChange={(currDate?: Date) => action(`on date change : ${currDate}`)()}
        view={view}
        firstDayOfWeek={firstDayOfWeek}
        {...attr}
      />
    </Card>
  );
};

export default {
  title: 'Organisms|Datepicker',
  component: DatePicker,
  subcomponents: { InputMask }
};
