import * as React from 'react';
import { RangeSlider } from '@/index';

// CSF format story
export const controlledSlider = () => {
  const [value, setValue] = React.useState([2, 4]);

  const onChange = (newValue) => {
    this.window.setTimeout(() => {
      setValue(newValue);
    }, 1000);
  };

  return (
    <RangeSlider
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
  const [value, setValue] = React.useState([2, 4]);

  const onChange = (value) => {
    this.window.setTimeout(() => {
      setValue(value);
    }, 1000);
  };

  return (
    <RangeSlider
      min={1}
      max={10}
      label='Controlled Slider'
      stepSize={0.1}
      labelStepSize={1}
      value={value}
      onChange={onChange}
    />
  );
}`;

export default {
  title: 'Components/RangeSlider/Variants/Controlled Slider',
  component: RangeSlider,
  parameters: {
    docs: {
      docPage: {
        customCode,
      },
    },
  },
};
