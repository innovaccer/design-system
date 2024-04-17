import * as React from 'react';
import { RangeSlider } from '@/index';

// CSF format story
export const disabled = () => {
  return (
    <RangeSlider
      className="my-8"
      label="Disabled Slider"
      disabled={true}
      stepSize={0.1}
      labelStepSize={1}
      defaultValue={[2, 4]}
    />
  );
};

export default {
  title: 'Components/Slider/RangeSlider/Disabled',
  component: RangeSlider,
};
