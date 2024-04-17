import * as React from 'react';
import { Slider } from '@/index';

// CSF format story
export const disabled = () => {
  return (
    <Slider
      className="my-8"
      label="Disabled Slider"
      disabled={true}
      stepSize={0.1}
      labelStepSize={1}
      defaultValue={4}
    />
  );
};

export default {
  title: 'Components/Slider/Slider/Disabled',
  component: Slider,
};
