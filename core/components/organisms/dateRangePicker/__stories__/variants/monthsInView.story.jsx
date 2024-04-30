import * as React from 'react';
import { DateRangePicker } from '@/index';
import Card from '@/components/atoms/card';

// CSF format story
export const monthsInView = () => {
  // to freeze the object for typescript

  return (
    <div className="d-flex flex-column">
      {Array.from([1, 2, 3], (x, key) => (
        <div key={key} className="mt-5 align-self-start">
          <Card className="d-inline-flex" shadow="light">
            <DateRangePicker
              monthsInView={x}
              startDate={new Date(2023, 11, 3)}
              endDate={new Date(2023, x - 2, 11)}
              yearNav={2023}
              monthNav={11}
            />
          </Card>
        </div>
      ))}
    </div>
  );
};

export default {
  title: 'Components/DatePicker/DateRangePicker/Variants/Months In View',
  component: DateRangePicker,
  parameters: {
    docs: {
      docPage: {
        title: 'DateRangePicker',
      },
    },
  },
};
