import * as React from 'react';
import { Meter } from '@/index';

// CSF format story
export const customStepCount = () => {
  return <Meter value={60} />;
};

const customCode = `() => {
  return (
    <Meter value={60} stepCount={6} />
  );
}`;

export default {
  title: 'Components/Meter/Custom Step Count',
  component: Meter,
  parameters: {
    docs: {
      docPage: {
        title: 'Meter',
        customCode,
      },
    },
  },
};
