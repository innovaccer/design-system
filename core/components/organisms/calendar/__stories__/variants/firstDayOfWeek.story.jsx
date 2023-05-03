import * as React from 'react';
import { Calendar } from '@/index';

// CSF format story
export const firstDayOfWeek = () => {
  const values = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

  return (
    <div className="d-flex flex-wrap">
      {values.map((v, index) => (
        <div className="mr-9 mt-5" key={index}>
          <Calendar date={new Date(2020, 2, 1)} firstDayOfWeek={v} />
        </div>
      ))}
    </div>
  );
};

export default {
  title: 'Components/Calendar/Variants/First Day Of Week',
  component: Calendar,
  parameters: {
    docs: {
      docPage: {
        title: 'Calendar',
      },
    },
  },
};
