import * as React from 'react';
import { number, select } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import ProgressRing from '../ProgressRing';

// CSF format story
export const all = () => {

  const size = select(
    'size',
    ['regular', 'small'],
    undefined
  );

  const value = number('value', 30);

  const onChange = (completedValue: number) => {
    return action(`selected values length: ${completedValue}`)();
  };

  return (
    <ProgressRing
      value={value}
      size={size}
      onChange={onChange}
    />
  );
};

export default {
  title: 'Atoms|ProgressRing',
  component: ProgressRing
};
