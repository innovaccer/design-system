import * as React from 'react';
import { action } from '@/utils/action';
import { RangeSlider } from '@/index';

// CSF format story
export const all = () => {
  const min = 0;
  const max = 10;
  const stepSize = 0.1;
  const labelStepSize = 1;
  const label = 'Slider Label';
  const disabled = false;

  const onChange = (value) => {
    return action(`new value: ${value}`);
  };

  const options = {
    min,
    max,
    stepSize,
    labelStepSize,
    label,
    disabled,
    onChange,
    defaultValue: [2, 4],
  };

  return <RangeSlider className="my-8" {...options} />;
};

export default {
  title: 'Components/Slider/RangeSlider/All',
  component: RangeSlider,
};
