import * as React from 'react';
import ProgressBar from '../ProgressBar';

// CSF format story
export const zeroPercent = () => (
      <ProgressBar
        value={Number(0)}
        max={Number(100)}
      />
  );

export default {
  title: 'Atoms|ProgressBar',
  component: ProgressBar
};
