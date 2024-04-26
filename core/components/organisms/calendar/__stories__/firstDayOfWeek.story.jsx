import * as React from 'react';
import { Calendar } from '@/index';

// CSF format story
export const firstDayOfWeek = () => {
  const values = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

  return (
    <div className="d-flex flex-wrap">
      {values.map((v, index) => (
        <Calendar className="mr-9 mt-5" key={index} date={new Date(2023, 2, 1)} firstDayOfWeek={v} />
      ))}
    </div>
  );
};

export default {
  title: 'Components/Calendar/First Day Of Week',
  component: Calendar,
  parameters: {
    docs: {
      docPage: {
        title: 'Calendar',
      },
    },
  },
};
