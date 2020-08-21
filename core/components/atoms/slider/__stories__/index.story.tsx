import * as React from 'react';
import { text, boolean, number } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import Slider from '../Slider';

// CSF format story
export const all = () => {

  const min = number('min', 0) || undefined;
  const max = number('max', 10)  || undefined;
  const stepSize = number('step size', 0.1)  || undefined;
  const labelStepSize = number('label step size', 1)  || undefined;
  const defaultValue = number('default value', 4)  || undefined;
  const label = text('Label', 'Slider Label');
  const disabled = boolean('disabled', false);

  const onChange = (value: number) => {
    return action(`new value: ${value}`);
  };

  const options = {
    min,
    max,
    stepSize,
    labelStepSize,
    label,
    disabled,
    defaultValue,
    onChange
  };

  return (
    <Slider key={defaultValue} className="mt-2" {...options} />
  );
};

export default {
  title: 'Atoms|Slider',
  component: Slider,
};
