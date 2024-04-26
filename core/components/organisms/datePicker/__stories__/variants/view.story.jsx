import * as React from 'react';
import { DatePicker, Card } from '@/index';

// CSF format story
export const view = () => {
  const values = ['year', 'month', 'date'];

  return (
    <div className="d-flex">
      {values.map((v, index) => (
        <div key={index} className="mr-5">
          <Card className="d-inline-flex" shadow="light">
            <DatePicker date={new Date(2023, 5, 1)} view={v} />
          </Card>
        </div>
      ))}
    </div>
  );
};

export default {
  title: 'Components/DatePicker/DatePicker/Variants/View',
  component: DatePicker,
  parameters: {
    docs: {
      docPage: {
        title: 'DatePicker',
      },
    },
  },
};
