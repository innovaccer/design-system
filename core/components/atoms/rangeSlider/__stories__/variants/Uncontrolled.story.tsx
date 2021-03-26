import * as React from 'react';
import { RangeSlider } from '@/index';

// CSF format story
export const uncontrolledSlider = () => {
  return (
    <RangeSlider
      min={1}
      max={10}
      label="Uncontrolled Slider"
      stepSize={0.1}
      labelStepSize={1}
      defaultValue={[2, 4]}
      className="mt-2"
    />
  );
};

export default {
  title: 'Components/RangeSlider/Variants/Uncontrolled Slider',
  component: RangeSlider
};
