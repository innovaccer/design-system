import * as React from 'react';
import { RangeSlider } from '@/index';

// CSF format story
export const discreteSlider = () => {
  return (
    <RangeSlider
      min={1}
      max={10}
      label="Discrete Slider"
      stepSize={1}
      labelStepSize={1}
      defaultValue={[2, 4]}
      className="my-8"
    />
  );
};

export default {
  title: 'Components/Slider/RangeSlider/Variants/Discrete Slider',
  component: RangeSlider,
};
