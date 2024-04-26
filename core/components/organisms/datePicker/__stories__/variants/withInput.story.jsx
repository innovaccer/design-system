import * as React from 'react';
import { DatePicker, InputMask } from '@/index';
import { action } from '@/utils/action';

// CSF format story
export const withInput = () => {
  const dateValue = undefined;

  const inputFormat = 'mm/dd/yyyy';

  const outputFormat = 'yyyy/mm/dd';

  const view = 'date';

  const firstDayOfWeek = 'saturday';

  const disabledBefore = new Date('Jan 20 2015');

  const disabledAfter = new Date('Jan 20 2028');

  const jumpView = true;

  const yearNav = -1;

  const monthNav = -1;

  const closeOnSelect = true;

  const attr = {};
  if (disabledBefore) attr.disabledBefore = disabledBefore;
  if (disabledAfter) attr.disabledAfter = disabledAfter;
  if (yearNav !== -1) attr.yearNav = yearNav;
  if (monthNav !== -1) attr.monthNav = monthNav;

  return (
    <div className="w-25">
      <DatePicker
        withInput={true}
        closeOnSelect={closeOnSelect}
        inputFormat={inputFormat}
        outputFormat={outputFormat}
        jumpView={jumpView}
        date={dateValue}
        onDateChange={(currDate, currValue) => {
          action(`on date change : ${currDate} --- ${currValue}`)();
        }}
        view={view}
        firstDayOfWeek={firstDayOfWeek}
        inputOptions={{
          required: true,
        }}
        {...attr}
      />
    </div>
  );
};

export default {
  title: 'Components/DatePicker/DatePicker/Variants/With Input',
  component: DatePicker,
  subcomponents: { InputMask },
};
