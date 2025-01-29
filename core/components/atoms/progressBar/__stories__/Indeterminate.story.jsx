import * as React from 'react';
import { ProgressBar } from '@/index';

// CSF format story
export const indeterminateState = () => {
  const value = 10;
  const max = 100;

  return (
    <div className="w-50">
      <ProgressBar value={value} max={max} state="indeterminate" />
    </div>
  );
};

export default {
  title: 'Components/Progress Indicators/ProgressBar/Indeterminate State',
  component: ProgressBar,
};
