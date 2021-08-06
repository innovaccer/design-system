import * as React from 'react';
import { Slider } from '@/index';

// CSF format story
export const cutsomLabels = () => {
  const [value, setValue] = React.useState(4);

  const onChange = (newValue: number) => {
    setValue(newValue);
  };

  const labelRenderer = (newValue: number) => {
    return `${newValue}%`;
  };

  return (
    <Slider
      min={1}
      max={10}
      stepSize={0.1}
      labelStepSize={1}
      value={value}
      onChange={onChange}
      labelRenderer={labelRenderer}
      className="mt-7"
    />
  );
};

const customCode = `() => {
  const [value, setValue] = React.useState(4);

  const onChange = (value) => {
    setValue(value);
  };

  const labelRenderer = (value) => {
    return \`\${value}%\`;
  };

  return (
    <Slider
      min={1}
      max={10}
      stepSize={0.1}
      labelStepSize={1}
      value={value}
      onChange={onChange}
      labelRenderer={labelRenderer}
    />
  );
}`;

export default {
  title: 'Components/Slider/Variants/Cutsom Labels',
  component: Slider,
  parameters: {
    docs: {
      docPage: {
        customCode,
      },
    },
  },
};
