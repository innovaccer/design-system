import * as React from 'react';
import ProgressBar from '../ProgressBar';

// CSF format story
export const fiftyPercent = () => (
  <ProgressBar
    value={50}
    max={100}
  />
);

export default {
  title: 'Components/ProgressBar/Fifty Percent',
  component: ProgressBar
};
