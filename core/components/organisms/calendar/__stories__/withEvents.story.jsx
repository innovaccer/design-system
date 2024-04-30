import * as React from 'react';
import { Calendar, Heading } from '@/index';

// CSF format story
export const dateWithEvents = () => {
  return (
    <div className="d-flex mt-8">
      <div className="mr-8">
        <Heading>size: small</Heading>
        <Calendar events={{ '12/21/2023': true }} date={new Date('12/21/2023')} size={'small'} />
      </div>

      <div>
        <Heading>size: large</Heading>
        <Calendar events={{ '12/20/2023': true }} date={new Date('12/21/2023')} size={'large'} />
      </div>
    </div>
  );
};

export default {
  title: 'Components/Calendar/Date With Events',
  component: Calendar,
  parameters: {
    docs: {
      docPage: {
        title: 'Calendar',
      },
    },
  },
};
