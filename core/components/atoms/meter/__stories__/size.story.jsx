import * as React from 'react';
import { Meter } from '@/index';

// CSF format story
export const meterSize = () => {
  return (
    <div className="d-flex align-items-center justify-content-around">
      <Meter value={40} max={100} stepCount={5} meterSize="small" />
      <Meter value={40} max={100} stepCount={5} meterSize="regular" />
      <Meter value={40} max={100} stepCount={5} meterSize="large" />
    </div>
  );
};

export default {
  title: 'Components/Meter/Variants/Meter Size',
  component: Meter,
  parameters: {
    docs: {
      docPage: {
        title: 'Meter',
      },
    },
  },
};
