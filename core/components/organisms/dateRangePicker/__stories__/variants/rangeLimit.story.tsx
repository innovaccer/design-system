import * as React from 'react';
import { DateRangePicker } from '@/index';
import Card from '@/components/atoms/card';

// CSF format story
export const rangeLimit = () => {
  const style = {
    display: 'flex',
  };

  return (
    <div style={style}>
      <Card
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
          rangeLimit={7}
          yearNav={2020}
          monthNav={2}
        />
      </Card>
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
