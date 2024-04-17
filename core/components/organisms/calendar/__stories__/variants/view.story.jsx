import * as React from 'react';
import { Calendar, Heading } from '@/index';

// CSF format story
export const view = () => {
  const view = ['year', 'month', 'date'];

  return (
    <>
      <div className="mt-8">
        <Heading>size: small</Heading>
        <div className="d-flex justify-content-between">
          {view.map((v, index) => (
            <Calendar key={index} date={new Date(2023, 2, 15)} size={'small'} view={v} />
          ))}
        </div>
      </div>

      <div className="mt-8">
        <Heading>size: large</Heading>
        <div className="d-flex">
          {view.map((v, index) => (
            <Calendar key={index} date={new Date(2023, 2, 15)} size={'large'} view={v} />
          ))}
        </div>
      </div>
    </>
  );
};

export default {
  title: 'Components/Calendar/Variants/View',
  component: Calendar,
  parameters: {
    docs: {
      docPage: {
        title: 'Calendar',
      },
    },
  },
};
