import * as React from 'react';
import Calendar from '../../Calendar';
import { Day } from '@/components/organisms/calendar/types';
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
          <Calendar
            date={new Date(2020, 2, 1)}
            firstDayOfWeek={v}
          />
        </Card>
      ))}
    </div>
  );
};

export default {
  title: 'Organisms|Calendar/Variants',
  component: Calendar,
  parameters: {
    docs: {
      docPage: {
        title: 'Calendar'
      }
    }
  }
};
