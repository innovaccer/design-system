import * as React from 'react';
import { Slider } from '@/index';

// CSF format story
export const customLabels = () => {
  const [value, setValue] = React.useState(10);

  const onChange = (newValue) => {
    setValue(newValue);
  };

  const labelRenderer = (newValue) => {
    return <div>{newValue} GB</div>;
  };

  return (
    <Slider
      min={0}
      max={20}
      stepSize={3}
      labelStepSize={3}
      value={value}
      onChange={onChange}
      labelRenderer={labelRenderer}
      className="my-8"
    />
  );
};

const customCode = `() => {
  const [value, setValue] = React.useState(10);

  const onChange = (value) => {
    setValue(value);
  };

  const labelRenderer = (value) => {
    return \`\${value} GB\`;
  };

  return (
    <Slider
      min={0}
      max={20}
      stepSize={3}
      labelStepSize={3}
      value={value}
      onChange={onChange}
      labelRenderer={labelRenderer}
      className='my-8'
    />
  );
}`;

export default {
  title: 'Components/Slider/Slider/Custom Labels',
  component: Slider,
  parameters: {
    docs: {
      docPage: {
        customCode,
      },
    },
  },
};
