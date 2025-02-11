import * as React from 'react';
import { Meter } from '@/index';

// CSF format story
export const defaultMeter = () => {
  return <Meter value={60} />;
};

const customCode = `() => {
  return (
    <Meter value={60} />
  );
}`;

export default {
  title: 'Components/Meter/Default Meter',
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
