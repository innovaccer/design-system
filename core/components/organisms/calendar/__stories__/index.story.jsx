import * as React from 'react';
import { action } from '@/utils/action';
import { Calendar, Heading } from '@/index';

// CSF format story
export const all = () => {
  const dateValue = new Date(2020, 4, 5); // May 5, 2020
  const disabledAfter = new Date(2020, 5, 3); // June 3, 2020

  const sharedProps = {
    date: dateValue,
    disabledAfter,
    firstDayOfWeek: 'saturday',
    jumpView: true,
    'aria-label': 'Appointment calendar',
    onDateChange: (currDate) => action(`on date change : ${currDate}`)(),
    onRangeChange: (sDate, eDate) => action(`on range change: ${sDate} - ${eDate}`)(),
  };

  return (
    <>
      <Heading className="mb-6">Date view</Heading>
      <div className="d-flex mb-8">
        <Calendar {...sharedProps} view="date" aria-label="Appointment calendar date view" />
      </div>

      <Heading className="mb-6">Month view</Heading>
      <div className="d-flex mb-8">
        <Calendar {...sharedProps} view="month" aria-label="Appointment calendar month view" />
      </div>

      <Heading className="mb-6">Year view</Heading>
      <div className="d-flex">
        <Calendar {...sharedProps} view="year" aria-label="Appointment calendar year view" />
      </div>
    </>
  );
};

export default {
  title: 'Components/Calendar/All',
  component: Calendar,
};
