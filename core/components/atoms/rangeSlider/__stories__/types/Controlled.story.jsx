import * as React from 'react';
import { RangeSlider } from '@/index';

// CSF format story
export const controlledSlider = () => {
  const [value, setValue] = React.useState([2, 4]);

  const onChange = (newValue) => {
    setValue(newValue);
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
      className="my-8"
    />
  );
};

const customCode = `() => {
  const [value, setValue] = React.useState([2, 4]);

  const onChange = (value) => {
    setValue(value);
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
      className="my-8"
    />
  );
}`;

export default {
  title: 'Components/Slider/RangeSlider/Types/Controlled Slider',
  component: RangeSlider,
  parameters: {
    docs: {
      docPage: {
        customCode,
      },
    },
  },
};
