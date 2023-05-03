import * as React from 'react';
import Calendar from '../../Calendar';
import Card from '@/components/atoms/card';
import Heading from '@/components/atoms/heading';

// CSF format story
export const size = () => {
  return (
    <>
      <div className="mt-8">
        <Heading>size: small</Heading>
        <div className="d-flex">
          <div className="mr-8">
            <Card className="d-inline-flex" shadow="light">
              <Calendar date={new Date(2020, 2, 15)} size={'small'} view="date" />
            </Card>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <Heading>size: large</Heading>
        <div className="d-flex">
          <div className="mr-8">
            <Card className="d-inline-flex" shadow="light">
              <Calendar date={new Date(2020, 2, 15)} size={'large'} view="date" />
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default {
  title: 'Date & Time/Calendar/Variants/Size',
  component: Calendar,
  parameters: {
    docs: {
      docPage: {
        title: 'Calendar',
      },
    },
  },
};
