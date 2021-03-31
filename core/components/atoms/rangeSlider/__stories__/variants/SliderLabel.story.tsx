import * as React from 'react';
import { RangeSlider, Text } from '@/index';

// CSF format story
export const sliderLabel = () => {

  return (
    <div>
      <div className="mb-9">
        <Text weight="strong">With Slider Label</Text><br />
        <RangeSlider
          label="Slider-label"
          stepSize={0.1}
          labelStepSize={1}
          defaultValue={[2, 4]}
          className="mt-2"
        />
      </div>
      <div>
        <Text weight="strong">Without Slider Label</Text><br />
        <RangeSlider
          stepSize={0.1}
          labelStepSize={1}
          defaultValue={[2, 4]}
          className="mt-2"
        />
      </div>
    </div>
  );
};

export default {
  title: 'Components/RangeSlider/Variants/Slider Label',
  component: RangeSlider
};
