import * as React from 'react';
import { Meter } from '@/index';

// CSF format story
export const customLabelSize = () => {
  return <Meter value={40} meterSize="small" labelSize="large" />;
};

export default {
  title: 'Components/Meter/Variants/Custom Label Size',
  component: Meter,
  parameters: {
    docs: {
      docPage: {
        title: 'Meter',
      },
    },
  },
};
