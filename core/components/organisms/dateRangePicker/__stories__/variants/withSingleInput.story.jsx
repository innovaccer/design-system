import * as React from 'react';
import { DateRangePicker, InputMask } from '@/index';
import { action } from '@/utils/action';

// CSF format story
export const withSingleInput = () => {
  const monthsInView = 2;

  const startDate = new Date('Jan 20 2023');

  const endDate = new Date('Jan 28 2023');

  const inputFormat = 'dd/mm/yyyy';

  const outputFormat = 'mm-dd-yyyy';

  const view = 'date';

  const firstDayOfWeek = 'monday';

  const disabledBefore = new Date('Jan 20 2015');

  const disabledAfter = new Date('Jan 20 2028');

  const jumpView = true;

  const yearNav = -1;

  const monthNav = -1;

  const open = false;

  const attr = {};
  if (disabledBefore) attr.disabledBefore = disabledBefore;
  if (disabledAfter) attr.disabledAfter = disabledAfter;
  if (yearNav !== -1) attr.yearNav = yearNav;
  if (monthNav !== -1) attr.monthNav = monthNav;

  return (
    <div className="w-50">
      <DateRangePicker
        withInput={true}
        singleInput={true}
        startDate={startDate}
        endDate={endDate}
        inputFormat={inputFormat}
        outputFormat={outputFormat}
        jumpView={jumpView}
        onRangeChange={(sDate, eDate, sValue, eValue) =>
          action(`on range change: ${sDate} - ${eDate} ---- ${sValue} - ${eValue}`)()
        }
        view={view}
        firstDayOfWeek={firstDayOfWeek}
        monthsInView={monthsInView}
        inputOptions={{
          required: true,
          label: 'Date',
        }}
        {...attr}
        open={open}
      />
    </div>
  );
};

export default {
  title: 'Components/DatePicker/DateRangePicker/Variants/With Single Input',
  component: DateRangePicker,
  subcomponents: { InputMask },
};
