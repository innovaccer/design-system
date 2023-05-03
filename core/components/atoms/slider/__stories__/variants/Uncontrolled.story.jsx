import * as React from 'react';
import { Slider } from '@/index';

// CSF format story
export const uncontrolledSlider = () => {
  return (
    <Slider
      min={1}
      max={10}
      label="Uncontrolled Slider"
      stepSize={0.1}
      labelStepSize={1}
      defaultValue={4}
      className="mt-2"
    />
  );
};

export default {
  title: 'Components/Sliders/Slider/Variants/Uncontrolled Slider',
  component: Slider,
};
