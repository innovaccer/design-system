import * as React from 'react';
import ProgressBar from '../ProgressBar';

// CSF format story
export const zeroPercent = () => {
  return (
    <div className="w-50">
      <ProgressBar
        value={Number(0)}
        max={Number(100)}
      />
    </div>
  );
};

export default {
  title: 'Atoms|ProgressBar',
  component: ProgressBar
};
