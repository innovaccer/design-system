import * as React from 'react';
import Calendar from '../../Calendar';
import Card from '@/components/atoms/card';
import Heading from '@/components/atoms/heading';

// CSF format story
export const view = () => {
  const view = ['year', 'month', 'date'];

  return (
    <>
      <div className="mt-8">
        <Heading>size: small</Heading>
        <div className="d-flex">
          {view.map((v, index) => (
            <div className="mr-8" key={index}>
              <Card className="d-inline-flex" shadow="light">
                <Calendar date={new Date(2020, 2, 15)} size={'small'} view={v} />
              </Card>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8">
        <Heading>size: large</Heading>
        <div className="d-flex">
          {view.map((v, index) => (
            <div className="mr-8" key={index}>
              <Card className="d-inline-flex" shadow="light">
                <Calendar date={new Date(2020, 2, 15)} size={'large'} view={v} />
              </Card>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default {
  title: 'Date & Time/Calendar/Variants/View',
  component: Calendar,
  parameters: {
    docs: {
      docPage: {
        title: 'Calendar',
      },
    },
  },
};
