import * as React from 'react';
import DatePicker from '@/components/organisms/datepicker';
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
          <DatePicker
            date={new Date(2020, 2, 1)}
            view={v}
          />
        </Card>
      ))}
    </div>
  );
};

export default {
  title: 'Organisms|Datepicker/Variants',
  component: DatePicker,
  parameters: {
    docs: {
      docPage: {
        title: 'DatePicker'
      }
    }
  }
};
