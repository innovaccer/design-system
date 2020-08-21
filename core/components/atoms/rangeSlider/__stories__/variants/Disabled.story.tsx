import * as React from 'react';
import { RangeSlider } from '@/index';

// CSF format story
export const disabled = () => {

  return (
    <div>
      <RangeSlider
        className="mb-9 mt-2"
        label="Disabled Slider"
        disabled={true}
        stepSize={0.1}
        labelStepSize={1}
        defaultValue={[2, 4]}
      />
      <RangeSlider
        label="Default Slider"
        stepSize={0.1}
        labelStepSize={1}
        defaultValue={[2, 4]}
        className="mt-2"
      />
    </div>
  );
};

export default {
  title: 'Atoms|RangeSlider/Variants',
  component: RangeSlider,
};
