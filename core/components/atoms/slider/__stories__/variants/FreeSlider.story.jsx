import * as React from 'react';
import { Slider } from '@/index';

// CSF format story
export const freeSlider = () => {
  return (
    <Slider min={1} max={10} label="Free Slider" stepSize={0.1} labelStepSize={1} defaultValue={4} className="my-8" />
  );
};

export default {
  title: 'Components/Slider/Slider/Variants/Free Slider',
  component: Slider,
};
