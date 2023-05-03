import * as React from 'react';
import { RangeSlider } from '@/index';

// CSF format story
export const disctereSlider = () => {
  return (
    <RangeSlider
      min={1}
      max={10}
      label="Discrete Slider"
      stepSize={1}
      labelStepSize={1}
      defaultValue={[2, 4]}
      className="mt-2"
    />
  );
};

export default {
  title: 'Components/Sliders/RangeSlider/Variants/Disctere Slider',
  component: RangeSlider,
};
