import * as React from 'react';
import { RangeSlider } from '@/index';

// CSF format story
export const customLabels = () => {
  const [value, setValue] = React.useState([2, 4]);

  const onChange = (newValue) => {
    setValue(newValue);
  };

  const labelRenderer = (newValue) => {
    return <div>${newValue}%</div>;
  };

  return (
    <RangeSlider
      min={1}
      max={10}
      stepSize={0.1}
      labelStepSize={1}
      value={value}
      onChange={onChange}
      labelRenderer={labelRenderer}
      className="my-8"
    />
  );
};

const customCode = `() => {
  const [value, setValue] = React.useState([2, 4]);

  const onChange = (value) => {
    setValue(value);
  };

  const labelRenderer = (value) => {
    return \`\${value}%\`;
  };

  return (
    <RangeSlider
      min={1}
      max={10}
      value={value}
      stepSize={0.1}
      labelStepSize={1}
      onChange={onChange}
      labelRenderer={labelRenderer}
      className="my-8"
    />
  );
}`;

export default {
  title: 'Components/Slider/RangeSlider/Custom Labels',
  component: RangeSlider,
  parameters: {
    docs: {
      docPage: {
        customCode,
      },
    },
  },
};
