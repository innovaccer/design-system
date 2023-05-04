import * as React from 'react';
import { Calendar, Heading } from '@/index';

// CSF format story
export const size = () => {
  return (
    <div className="d-flex mt-8">
      <div className="mr-8">
        <Heading>size: small</Heading>
        <Calendar date={new Date(2023, 2, 15)} size={'small'} view="date" />
      </div>

      <div>
        <Heading>size: large</Heading>
        <Calendar date={new Date(2023, 2, 15)} size={'large'} view="date" />
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
