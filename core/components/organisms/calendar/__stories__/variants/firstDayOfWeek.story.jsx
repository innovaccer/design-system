import * as React from 'react';
import Calendar from '../../Calendar';
import Card from '@/components/atoms/card';

// CSF format story
export const firstDayOfWeek = () => {
  const values = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

  // to freeze the object for typescript

  return (
    <div className="d-flex flex-wrap">
      {values.map((v, index) => (
        <div className="mr-9 mt-5" key={index}>
          <Card className="d-inline-flex" shadow="light">
            <Calendar date={new Date(2020, 2, 1)} firstDayOfWeek={v} />
          </Card>
        </div>
      ))}
    </div>
  );
};

export default {
  title: 'Date & Time/Calendar/Variants/First Day Of Week',
  component: Calendar,
  parameters: {
    docs: {
      docPage: {
        title: 'Calendar',
      },
    },
  },
};
