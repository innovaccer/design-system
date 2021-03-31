import * as React from 'react';
import { number, select } from '@storybook/addon-knobs';
import ProgressRing from '../ProgressRing';

// CSF format story
export const all = () => {

  const size = select(
    'size',
    ['regular', 'small'],
    undefined
  );

  const value = number('value', 30);
  const max = number('max', 100);

  return (
    <ProgressRing
      value={value}
      size={size}
      max={max}
    />
  );
};

export default {
  title: 'Components/ProgressRing/All',
  component: ProgressRing
};
