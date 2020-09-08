import * as React from 'react';
import { View } from '@/components/organisms/calendar/types';
import { DateRangePicker, Card } from '@/index';

// CSF format story
export const view = () => {
  const values: View[] = ['year', 'month', 'date'];

  return (
    <div className="d-flex">
      {values.map((v, index) => (
        <div className="mr-9" key={index}>
          <Card
            className="d-inline-flex"
            shadow="light"
          >
            <DateRangePicker
              startDate={new Date(2020, 2, 3)}
              endDate={new Date(2020, 2, 11)}
              view={v}
              yearNav={2020}
              monthNav={2}
            />
          </Card>
        </div>
      ))}
    </div>
  );
};

export default {
  title: 'Organisms|DateRangePicker/Variants',
  component: DateRangePicker,
  parameters: {
    docs: {
      docPage: {
        title: 'DateRangePicker'
      }
    }
  }
};
