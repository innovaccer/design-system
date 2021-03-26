import * as React from 'react';
import { RangeSlider } from '@/index';

// CSF format story
export const freeSlider = () => {
  return (
    <RangeSlider
      min={1}
      max={10}
      label="Free Slider"
      stepSize={0.1}
      labelStepSize={1}
      defaultValue={[2, 4]}
      className="mt-2"
    />
  );
};

export default {
  title: 'Components/RangeSlider/Variants/Free Slider',
  component: RangeSlider
};
