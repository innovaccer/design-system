import * as React from 'react';
import { DateRangePicker, InputMask, Card } from '@/index';
import { action } from '@/utils/action';

// CSF format story
export const all = () => {
  const withInput = false;

  const open = false;

  const monthsInView = withInput ? 2 : 1;

  const inputFormat = 'dd/mm/yyyy';

  const outputFormat = 'mm/dd/yyyy';

  const startDate = new Date('Jun 20 2023');

  const endDate = new Date('Jun 27 2023');

  const view = 'month';

  const rangeLimit = 0;

  const firstDayOfWeek = 'thursday';

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
        onRangeChange={(sDate, eDate, sValue, eValue) =>
          action(`on range change: ${sDate} - ${eDate} ---- ${sValue} - ${eValue}`)()
        }
        view={view}
        firstDayOfWeek={firstDayOfWeek}
        {...attr}
      />
    );
  }
  return (
    <Card className="d-inline-flex" shadow="light">
      <DateRangePicker
        withInput={withInput}
        monthsInView={monthsInView}
        jumpView={jumpView}
        startDate={startDate}
        endDate={endDate}
        onRangeChange={(sDate, eDate, sValue, eValue) =>
          action(`on range change: ${sDate} - ${eDate} ---- ${sValue} - ${eValue}`)()
        }
        view={view}
        firstDayOfWeek={firstDayOfWeek}
        {...attr}
      />
    </Card>
  );
};

export default {
  title: 'Components/DatePicker/DateRangePicker/All',
  component: DateRangePicker,
  subcomponents: { InputMask },
};
