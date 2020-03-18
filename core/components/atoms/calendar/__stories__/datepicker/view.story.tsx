import * as React from 'react';
import { DatePicker } from '@/components/atoms/calendar';
import { View } from '@/components/atoms/calendar/types';
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

// Required for CSF format story
// https://medium.com/storybookjs/component-story-format-66f4c32366df
export default { title: 'Calendar/Datepicker' };
