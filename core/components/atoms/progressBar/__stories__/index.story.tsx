import * as React from 'react';
import { number } from '@storybook/addon-knobs';
import ProgressBar from '../ProgressBar';

// CSF format story
export const all = () => {
  const value = number('value', 10);
  const max = number('max', 100);

  return (
    <div style={{ width: '400px' }}>
      <ProgressBar
        value={value}
        max={max}
      />
    </div>
  );
};

export default {
  title: 'Atoms|ProgressBar',
  component: ProgressBar
};
