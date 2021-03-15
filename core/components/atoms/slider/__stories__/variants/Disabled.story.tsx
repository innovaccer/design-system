import * as React from 'react';
import { Slider } from '@/index';

// CSF format story
export const disabled = () => {

  return (
    <div>
      <Slider
        className="mb-9 mt-2"
        label="Disabled Slider"
        disabled={true}
        stepSize={0.1}
        labelStepSize={1}
        defaultValue={4}
      />
      <Slider
        label="Default Slider"
        stepSize={0.1}
        labelStepSize={1}
        defaultValue={4}
        className="mt-2"
      />
    </div>
  );
};

export default {
  title: 'Components/Slider/Variants',
  component: Slider,
};
