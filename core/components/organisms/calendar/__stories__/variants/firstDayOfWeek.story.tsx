import * as React from 'react';
import Calendar from '../../Calendar';
import { Day } from '@/components/organisms/calendar/types';
import Card from '@/components/atoms/card';

// CSF format story
export const firstDayOfWeek = () => {
  const values: Day[] = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

  const style = {
    flexWrap: 'wrap'
  };

  return (
    // @ts-ignore
    <div className="d-flex" style={style}>
      {values.map((v, index) => (
        <div className="mr-9 mt-5" key={index} style={{ maxWidth: '330px' }}>
          <Card
            shadow="light"
          >
            <Calendar
              date={new Date(2020, 2, 1)}
              firstDayOfWeek={v}
            />
          </Card>
        </div>
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
