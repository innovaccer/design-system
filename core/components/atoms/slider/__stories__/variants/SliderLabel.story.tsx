import * as React from 'react';
import { Slider, Text } from '@/index';

// CSF format story
export const sliderLabel = () => {

  return (
    <div>
      <div className="mb-9">
        <Text weight="strong">With Slider Label</Text><br />
        <Slider
          label="Slider-label"
          stepSize={0.1}
          labelStepSize={1}
          defaultValue={4}
          className="mt-2"
        />
      </div>
      <div>
        <Text weight="strong">Without Slider Label</Text><br />
        <Slider
          stepSize={0.1}
          labelStepSize={1}
          defaultValue={4}
          className="mt-2"
        />
      </div>
    </div>
  );
};

export default {
  title: 'Atoms|Slider/Variants',
  component: Slider,
};
