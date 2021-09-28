import * as React from 'react';
import { View } from '@/components/organisms/calendar/types';
import { DatePicker, Card } from '@/index';

// CSF format story
export const view = () => {
  const values: View[] = ['year', 'month', 'date'];

  return (
    <div className="d-flex">
      {values.map((v, index) => (
        <div key={index} className="mr-5">
          <Card className="d-inline-flex" shadow="light">
            <DatePicker date={new Date(2020, 2, 1)} view={v} />
          </Card>
        </div>
      ))}
    </div>
  );
};

export default {
  title: 'Components/DatePicker/Variants/View',
  component: DatePicker,
  parameters: {
    docs: {
      docPage: {
        title: 'DatePicker',
      },
    },
  },
};
