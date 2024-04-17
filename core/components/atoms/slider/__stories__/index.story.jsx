import * as React from 'react';
import { action } from '@/utils/action';
import { Slider } from '@/index';

// CSF format story
export const all = () => {
  const min = 0;
  const max = 10;
  const stepSize = 0.1;
  const labelStepSize = 1;
  const defaultValue = 4;
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
    defaultValue,
    onChange,
  };

  return <Slider key={defaultValue} className="my-8" {...options} />;
};

export default {
  title: 'Components/Slider/Slider/All',
  component: Slider,
};
