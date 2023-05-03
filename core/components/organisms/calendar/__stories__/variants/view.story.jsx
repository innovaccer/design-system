import * as React from 'react';
import { Calendar, Heading } from '@/index';

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
              <Calendar date={new Date(2020, 2, 15)} size={'small'} view={v} />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8">
        <Heading>size: large</Heading>
        <div className="d-flex">
          {view.map((v, index) => (
            <div className="mr-8" key={index}>
              <Calendar date={new Date(2020, 2, 15)} size={'large'} view={v} />
            </div>
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
