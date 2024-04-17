import * as React from 'react';
import { Slider } from '@/index';

// CSF format story
export const controlledSlider = () => {
  const [value, setValue] = React.useState(4);

  const onChange = (newValue) => {
    setValue(newValue);
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
      className="my-8"
    />
  );
};

const customCode = `() => {
  const [value, setValue] = React.useState(4);

  const onChange = (value) => {
    setValue(value);
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
      className="my-8"
    />
  );
}`;

export default {
  title: 'Components/Slider/Slider/Types/Controlled Slider',
  component: Slider,
  parameters: {
    docs: {
      docPage: {
        customCode,
      },
    },
  },
};
