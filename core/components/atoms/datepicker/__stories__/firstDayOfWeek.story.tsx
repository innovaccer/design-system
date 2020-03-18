import * as React from 'react';
import DatePicker, { Day } from '@/components/atoms/datepicker';
import Card from '@/components/atoms/card';

// CSF format story
export const firstDayOfWeek = () => {
  const values: Day[] = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

  const style = {
    display: 'flex',
    flexWrap: 'wrap'
  };

  return (
    // @ts-ignore
    <div style={style}>
      {values.map((v, index) => (
        <Card
          key={index}
          shadow="light"
          style={{
            marginRight: '50px',
            maxWidth: '330px',
            alignSelf: 'flex-start',
            marginTop: '20px'
          }}
        >
          <DatePicker
            date={new Date(2020, 2, 1)}
            firstDayOfWeek={v}
          />
        </Card>
      ))}
    </div>
  );
};

// Required for CSF format story
// https://medium.com/storybookjs/component-story-format-66f4c32366df
export default { title: 'Calendar' };
