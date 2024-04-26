import * as React from 'react';
import { Slider } from '@/index';

// CSF format story
export const discreteSlider = () => {
  return (
    <Slider min={1} max={10} label="Discrete Slider" stepSize={1} labelStepSize={1} defaultValue={4} className="my-8" />
  );
};

export default {
  title: 'Components/Slider/Slider/Variants/Discrete Slider',
  component: Slider,
};
