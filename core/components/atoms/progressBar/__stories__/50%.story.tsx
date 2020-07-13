import * as React from 'react';
import ProgressBar from '../ProgressBar';

// CSF format story
export const fiftyPercent = () => {
  return (
    <div className="w-50">
      <ProgressBar
        value={Number(50)}
        max={Number(100)}
      />
    </div>
  );
};

export default {
  title: 'Atoms|ProgressBar',
  component: ProgressBar
};
