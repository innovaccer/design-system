import * as React from 'react';
import { number } from '@storybook/addon-knobs';
import ProgressBar from '../ProgressBar';

// CSF format story
export const all = () => {
  const value = number('value', 10);
  const max = number('max', 100);

  return (
    <div className="w-50">
      <ProgressBar
        value={value}
        max={max}
      />
    </div>
  );
};

export default {
  title: 'Components/ProgressBar',
  component: ProgressBar
};
