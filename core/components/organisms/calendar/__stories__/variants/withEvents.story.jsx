import * as React from 'react';
import Calendar from '../../Calendar';
import Card from '@/components/atoms/card';
import Heading from '@/components/atoms/heading';

// CSF format story
export const dateWithEvents = () => {
  return (
    <div className="d-flex mt-8">
      <div className="mr-8">
        <Heading>size: small</Heading>
        <Card className="d-inline-flex" shadow="light">
          <Calendar events={{ '12/21/2021': true }} date={new Date('12/21/2021')} size={'small'} />
        </Card>
      </div>

      <div>
        <Heading>size: large</Heading>
        <Card className="d-inline-flex" shadow="light">
          <Calendar events={{ '12/20/2021': true }} date={new Date('12/21/2021')} size={'large'} />
        </Card>
      </div>
    </div>
  );
};

export default {
  title: 'Components/Calendar/Variants/Date With Events',
  component: Calendar,
  parameters: {
    docs: {
      docPage: {
        title: 'Calendar',
      },
    },
  },
};
