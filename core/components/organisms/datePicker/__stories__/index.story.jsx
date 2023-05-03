import * as React from 'react';
import { DatePicker, Card, InputMask } from '@/index';
import { action } from '@/utils/action';

// CSF format story
export const all = () => {
  const withInput = false;

  const open = false;

  const closeOnSelect = true;

  const inputFormat = 'dd-mm-yyyy';

  const outputFormat = 'yyyy-mm-dd';

  const dateValue = undefined;

  const view = 'month';

  const firstDayOfWeek = 'sunday';

  const disabledBefore = new Date('Jan 20 2015');

  const disabledAfter = new Date('Jan 20 2028');

  const jumpView = true;

  const yearNav = -1;

  const monthNav = -1;

  const attr = {};
  if (disabledBefore) attr.disabledBefore = disabledBefore;
  if (disabledAfter) attr.disabledAfter = disabledAfter;
  if (yearNav !== -1) attr.yearNav = yearNav;
  if (monthNav !== -1) attr.monthNav = monthNav;

  if (withInput) {
    return (
      <DatePicker
        withInput={withInput}
        closeOnSelect={closeOnSelect}
        open={open}
        inputFormat={inputFormat}
        outputFormat={outputFormat}
        jumpView={jumpView}
        date={dateValue}
        onDateChange={(currDate) => action(`on date change : ${currDate}`)()}
        view={view}
        firstDayOfWeek={firstDayOfWeek}
        {...attr}
      />
    );
  }
  return (
    <Card className="d-inline-flex" shadow="light">
      <DatePicker
        withInput={withInput}
        inputFormat={inputFormat}
        outputFormat={outputFormat}
        jumpView={jumpView}
        date={dateValue}
        onDateChange={(currDate) => action(`on date change : ${currDate}`)()}
        view={view}
        firstDayOfWeek={firstDayOfWeek}
        {...attr}
      />
    </Card>
  );
};

export default {
  title: 'Components/DatePicker/DatePicker/All',
  component: DatePicker,
  subcomponents: { InputMask },
};
