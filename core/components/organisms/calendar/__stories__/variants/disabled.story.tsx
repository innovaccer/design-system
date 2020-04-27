import * as React from 'react';
import Calendar from '../../Calendar';
import { View } from '@/components/organisms/calendar/types';
import Card from '@/components/atoms/card';
import Heading from '@/components/atoms/heading';

// CSF format story
export const disabled = () => {
  const view: View[] = ['year', 'month', 'date'];

  const style = {
    display: 'flex',
  };

  return (
    <>
      <Heading>disabledBefore</Heading>
      <div style={style}>
        {view.map((v, index) => (
          <Card
            key={index}
            shadow="light"
            style={{
              marginRight: '50px',
              maxWidth: '330px',
              alignSelf: 'flex-start'
            }}
          >
            <Calendar
              date={new Date(2020, 2, 15)}
              disabledBefore={new Date(2020, 2, 10)}
              view={v}
            />
          </Card>
        ))}
      </div>

      <Heading>disabledAfter</Heading>
      <div style={style}>
        {view.map((v, index) => (
          <Card
            key={index}
            shadow="light"
            style={{
              marginRight: '50px',
              maxWidth: '330px',
              alignSelf: 'flex-start'
            }}
          >
            <Calendar
              date={new Date(2020, 2, 15)}
              disabledAfter={new Date(2020, 2, 20)}
              view={v}
            />
          </Card>
        ))}
      </div>

      <Heading>disabledBefore and disabledAfter</Heading>
      <div style={style}>
        {view.map((v, index) => (
          <Card
            key={index}
            shadow="light"
            style={{
              marginRight: '50px',
              maxWidth: '330px',
              alignSelf: 'flex-start'
            }}
          >
            <Calendar
              date={new Date(2020, 2, 15)}
              disabledBefore={new Date(2020, 2, 10)}
              disabledAfter={new Date(2020, 2, 20)}
              view={v}
            />
          </Card>
        ))}
      </div>
    </>
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
