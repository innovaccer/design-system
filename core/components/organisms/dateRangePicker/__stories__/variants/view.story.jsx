import * as React from 'react';
import { DateRangePicker, Card } from '@/index';

// CSF format story
export const view = () => {
  const values = ['year', 'month', 'date'];

  return (
    <div className="d-flex">
      {values.map((v, index) => (
        <div className="mr-9" key={index}>
          <Card className="d-inline-flex" shadow="light">
            <DateRangePicker
              startDate={new Date(2023, 2, 3)}
              endDate={new Date(2023, 2, 11)}
              view={v}
              yearNav={2023}
              monthNav={2}
            />
          </Card>
        </div>
      ))}
    </div>
  );
};

export default {
  title: 'Components/DatePicker/DateRangePicker/Variants/View',
  component: DateRangePicker,
  parameters: {
    docs: {
      docPage: {
        title: 'DateRangePicker',
      },
    },
  },
};
