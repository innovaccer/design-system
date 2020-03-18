import * as React from 'react';
import { RangePicker } from '@/components/atoms/calendar';
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
        <RangePicker
          startDate={new Date(2020, 2, 3)}
          endDate={new Date(2020, 2, 11)}
          rangeLimit={7}
        />
      </Card>
    </div>
  );
};

// Required for CSF format story
// https://medium.com/storybookjs/component-story-format-66f4c32366df
export default { title: 'Calendar/Rangepicker' };
