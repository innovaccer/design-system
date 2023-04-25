import * as React from 'react';
import Calendar from '../../Calendar';
import Card from '@/components/atoms/card';
import Heading from '@/components/atoms/heading';

// CSF format story
export const disabled = () => {
  const view = ['date', 'month', 'year'];

  return (
    <>
      <Heading>Disabled before</Heading>
      <div className="d-flex mb-8">
        {view.map((v, index) => (
          <div className="mr-8" key={index}>
            <Card className="d-inline-flex" shadow="light">
              <Calendar date={new Date(2020, 2, 15)} disabledBefore={new Date(2020, 2, 10)} view={v} />
            </Card>
          </div>
        ))}
      </div>

      <Heading>Disabled after</Heading>
      <div className="d-flex mb-8">
        {view.map((v, index) => (
          <div className="mr-8" key={index}>
            <Card className="d-inline-flex" shadow="light">
              <Calendar date={new Date(2020, 2, 15)} disabledAfter={new Date(2020, 2, 20)} view={v} />
            </Card>
          </div>
        ))}
      </div>

      <Heading>Disabled before and Disabled after</Heading>
      <div className="d-flex">
        {view.map((v, index) => (
          <div className="mr-8" key={index}>
            <Card className="d-inline-flex" shadow="light">
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
        title: 'Calendar',
      },
    },
  },
};
