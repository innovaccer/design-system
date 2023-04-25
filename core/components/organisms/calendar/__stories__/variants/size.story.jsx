import * as React from 'react';
import { Calendar, Card, Heading } from '@/index';

// CSF format story
export const size = () => {
  return (
    <div className="d-flex mt-8">
      <div className="mr-8">
        <Heading>size: small</Heading>
        <Card className="d-inline-flex" shadow="light">
          <Calendar date={new Date(2020, 2, 15)} size={'small'} view="date" />
        </Card>
      </div>

      <div>
        <Heading>size: large</Heading>
        <Card className="d-inline-flex" shadow="light">
          <Calendar date={new Date(2020, 2, 15)} size={'large'} view="date" />
        </Card>
      </div>
    </div>
  );
};

export default {
  title: 'Components/Calendar/Variants/Size',
  component: Calendar,
  parameters: {
    docs: {
      docPage: {
        title: 'Calendar',
      },
    },
  },
};
