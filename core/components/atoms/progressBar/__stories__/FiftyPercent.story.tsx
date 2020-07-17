import * as React from 'react';
import ProgressBar from '../ProgressBar';

// CSF format story
export const fiftyPercent = () => (
      <ProgressBar
        value={Number(50)}
        max={Number(100)}
      />
  );

export default {
  title: 'Atoms|ProgressBar',
  component: ProgressBar
};
