import * as React from 'react';
import Calendar from '../../Calendar';
import { View } from '@/components/organisms/calendar/types';
import Card from '@/components/atoms/card';
import Heading from '@/components/atoms/heading';

// CSF format story
export const disabled = () => {
  const view: View[] = ['year', 'month', 'date'];

  return (
    <>
      <Heading>disabledBefore</Heading>
      <div className="d-flex">
        {view.map((v, index) => (
          <div className="mr-8" key={index}>
            <Card
              className="d-inline-flex"
              shadow="light"
            >
              <Calendar
                date={new Date(2020, 2, 15)}
                disabledBefore={new Date(2020, 2, 10)}
                view={v}
              />
            </Card>
          </div>
        ))}
      </div>

      <Heading>disabledAfter</Heading>
      <div className="d-flex">
        {view.map((v, index) => (
          <div className="mr-8" key={index}>
            <Card
              className="d-inline-flex"
              shadow="light"
            >
              <Calendar
                date={new Date(2020, 2, 15)}
                disabledAfter={new Date(2020, 2, 20)}
                view={v}
              />
            </Card>
          </div>
        ))}
      </div>

      <Heading>disabledBefore and disabledAfter</Heading>
      <div className="d-flex">
        {view.map((v, index) => (
          <div className="mr-8" key={index}>
            <Card
              className="d-inline-flex"
              shadow="light"
            >
              <Calendar
                date={new Date(2020, 2, 15)}
                disabledBefore={new Date(2020, 2, 10)}
                disabledAfter={new Date(2020, 2, 20)}
                view={v}
              />
            </Card>
          </div>
        ))}
      </div>
    </>
  );
};

export default {
  title: 'Components/Calendar/Variants/Disabled',
  component: Calendar,
  parameters: {
    docs: {
      docPage: {
        title: 'Calendar'
      }
    }
  }
};
