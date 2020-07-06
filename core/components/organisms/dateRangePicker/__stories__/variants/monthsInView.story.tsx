import * as React from 'react';
import { DateRangePicker } from '@/index';
import Card from '@/components/atoms/card';

// CSF format story
export const monthsInView = () => {
  const style = {
    display: 'flex',
    flexDirection: 'column'
  };

  return (
    // @ts-ignore
    <div style={style}>
      {Array.from([1, 2, 3], x => (
        <Card
          shadow="light"
          style={{
            marginTop: '20px',
            alignSelf: 'flex-start'
          }}
        >
          <DateRangePicker
            monthsInView={x}
            startDate={new Date(2019, 11, 3)}
            endDate={new Date(2020, x - 2, 11)}
            yearNav={2019}
            monthNav={11}
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
