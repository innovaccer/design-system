import * as React from 'react';
import { Calendar, Heading } from '@/index';

// CSF format story
export const disabled = () => {
  const view = ['date', 'month', 'year'];

  return (
    <>
      <Heading>Disabled before</Heading>
      <div className="d-flex mb-8 justify-content-between">
        {view.map((v, index) => (
          <Calendar key={index} date={new Date(2023, 2, 15)} disabledBefore={new Date(2023, 2, 10)} view={v} />
        ))}
      </div>

      <Heading>Disabled after</Heading>
      <div className="d-flex mb-8 justify-content-between">
        {view.map((v, index) => (
          <Calendar key={index} date={new Date(2023, 2, 15)} disabledAfter={new Date(2023, 2, 20)} view={v} />
        ))}
      </div>

      <Heading>Disabled before and Disabled after</Heading>
      <div className="d-flex justify-content-between">
        {view.map((v, index) => (
          <Calendar
            key={index}
            date={new Date(2023, 2, 15)}
            disabledBefore={new Date(2023, 2, 10)}
            disabledAfter={new Date(2023, 2, 20)}
            view={v}
          />
        ))}
      </div>
    </>
  );
};

export default {
  title: 'Components/Calendar/Disabled',
  component: Calendar,
  parameters: {
    docs: {
      docPage: {
        title: 'Calendar',
      },
    },
  },
};
