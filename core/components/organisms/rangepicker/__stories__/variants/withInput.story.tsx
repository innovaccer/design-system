import * as React from 'react';
import { boolean, select, date, number } from '@storybook/addon-knobs';
import RangePicker from '@/components/organisms/rangepicker';
import InputMask from '@/components/molecules/inputMask';
import { action } from '@storybook/addon-actions';

// CSF format story
export const withInput = () => {
  const startDate = date(
    'startDate',
    undefined
  );

  const endDate = date(
    'endDate',
    undefined
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
    <RangePicker
      withInput={true}
      startDate={startDate}
      endDate={endDate}
      inputFormat={inputFormat}
      outputFormat={outputFormat}
      jumpView={jumpView}
      onRangeChange={(sDate?: Date, eDate?: Date, sValue?: string, eValue?: string) => action(`on range change: ${sDate} - ${eDate} ---- ${sValue} - ${eValue}`)()}
      view={view}
      firstDayOfWeek={firstDayOfWeek}
      {...attr}
    />
  );
};

export default {
  title: 'Organisms|RangePicker/Variants',
  component: RangePicker,
  subcomponents: { InputMask }
};
