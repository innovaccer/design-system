import * as React from 'react';
import { Slider } from '@/index';

// CSF format story
export const controlledSlider = () => {
  const [value, setValue] = React.useState(4);

  const onChange = (newValue: number) => {
    window.setTimeout(() => {
      setValue(newValue);
    }, 1000);
  };

  return (
    <Slider
      min={1}
      max={10}
      label="Controlled Slider"
      stepSize={0.1}
      labelStepSize={1}
      value={value}
      onChange={onChange}
      className="mt-2"
    />
  );
};

const customCode = `() => {
  const [value, setValue] = React.useState(4);

  const onChange = (value) => {
    window.setTimeout(() => {
      setValue(value);
    }, 1000);
  };

  return (
    <Slider
      min={1}
      max={10}
      label='Controlled Slider'
      stepSize={0.1}
      labelStepSize={1}
      value={value}
      onChange={onChange}
      className="mt-2"
    />
  );
}`;

export default {
  title: 'Components/Slider/Variants/Controlled Slider',
  component: Slider,
  parameters: {
    docs: {
      docPage: {
        customCode,
      },
    },
  },
};
