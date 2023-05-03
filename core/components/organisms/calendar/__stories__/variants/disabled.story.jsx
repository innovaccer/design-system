import * as React from 'react';
import { Calendar, Heading } from '@/index';

// CSF format story
export const disabled = () => {
  const view = ['date', 'month', 'year'];

  return (
    <>
      <Heading>Disabled before</Heading>
      <div className="d-flex mb-8">
        {view.map((v, index) => (
          <div className="mr-8" key={index}>
            <Calendar date={new Date(2020, 2, 15)} disabledBefore={new Date(2020, 2, 10)} view={v} />
          </div>
        ))}
      </div>

      <Heading>Disabled after</Heading>
      <div className="d-flex mb-8">
        {view.map((v, index) => (
          <div className="mr-8" key={index}>
            <Calendar date={new Date(2020, 2, 15)} disabledAfter={new Date(2020, 2, 20)} view={v} />
          </div>
        ))}
      </div>

      <Heading>Disabled before and Disabled after</Heading>
      <div className="d-flex">
        {view.map((v, index) => (
          <div className="mr-8" key={index}>
            <Calendar
              date={new Date(2020, 2, 15)}
              disabledBefore={new Date(2020, 2, 10)}
              disabledAfter={new Date(2020, 2, 20)}
              view={v}
            />
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
