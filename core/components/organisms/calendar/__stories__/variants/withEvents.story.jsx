import * as React from 'react';
import Calendar from '../../Calendar';
import Card from '@/components/atoms/card';
import Heading from '@/components/atoms/heading';

// CSF format story
export const withEvents = () => {
  return (
    <>
      <div className="mt-8">
        <Heading>size: small with events</Heading>
        <div className="d-flex">
          <div className="mr-8">
            <Card className="d-inline-flex" shadow="light">
              <Calendar events={{ '12/21/2021': true }} date={new Date('12/21/2021')} size={'small'} />
            </Card>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <Heading>size: large with events</Heading>
        <div className="d-flex">
          <div className="mr-8">
            <Card className="d-inline-flex" shadow="light">
              <Calendar events={{ '12/20/2021': true }} date={new Date('12/21/2021')} size={'large'} />
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default {
  title: 'Components/Calendar/Variants/With Events',
  component: Calendar,
  parameters: {
    docs: {
      docPage: {
        title: 'Calendar',
      },
    },
  },
};
