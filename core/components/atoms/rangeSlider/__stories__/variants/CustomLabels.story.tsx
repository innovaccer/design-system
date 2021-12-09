import * as React from 'react';
import { RangeSlider } from '@/index';
import { NumberRange } from '@/common.type';

// CSF format story
export const cutsomLabels = () => {
  const [value, setValue] = React.useState<NumberRange>([2, 4]);

  const onChange = (newValue: NumberRange) => {
    setValue(newValue);
  };

  const labelRenderer = (newValue: number) => {
    return `${newValue}%`;
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
      className="mt-7"
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
      stepSize={0.1}
      labelStepSize={1}
      value={value}
      onChange={onChange}
      labelRenderer={labelRenderer}
    />
  );
}`;

export default {
  title: 'Components/RangeSlider/Variants/Cutsom Labels',
  component: RangeSlider,
  parameters: {
    docs: {
      docPage: {
        customCode,
      },
    },
  },
};
