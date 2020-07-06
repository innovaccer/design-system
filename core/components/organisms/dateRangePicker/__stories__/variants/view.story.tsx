import * as React from 'react';
import { View } from '@/components/organisms/calendar/types';
import { DateRangePicker, Card } from '@/index';

// CSF format story
export const view = () => {
  const values: View[] = ['year', 'month', 'date'];

  const style = {
    display: 'flex',
  };

  return (
    <div style={style}>
      {values.map((v, index) => (
        <Card
          key={index}
          shadow="light"
          style={{
            marginRight: '50px',
            maxWidth: '330px',
            alignSelf: 'flex-start'
          }}
        >
          <DateRangePicker
            startDate={new Date(2020, 2, 3)}
            endDate={new Date(2020, 2, 11)}
            view={v}
            yearNav={2020}
            monthNav={2}
          />
        </Card>
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
