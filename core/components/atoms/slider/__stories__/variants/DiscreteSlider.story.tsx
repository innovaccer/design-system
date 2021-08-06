import * as React from 'react';
import { Slider } from '@/index';

// CSF format story
export const disctereSlider = () => {
  return (
    <Slider min={1} max={10} label="Discrete Slider" stepSize={1} labelStepSize={1} defaultValue={4} className="mt-2" />
  );
};

export default {
  title: 'Components/Slider/Variants/Disctere Slider',
  component: Slider,
};
