import * as React from 'react';
import RangePicker from '@/components/organisms/rangepicker';
import { View } from '@/components/organisms/calendar/types';
import Card from '@/components/atoms/card';

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
          <RangePicker
            startDate={new Date(2020, 2, 3)}
            endDate={new Date(2020, 2, 11)}
            view={v}
          />
        </Card>
      ))}
    </div>
  );
};

export default {
  title: 'Organisms|RangePicker/Variants',
  component: RangePicker,
  parameters: {
    docs: {
      docPage: {
        title: 'RangePicker'
      }
    }
  }
};
