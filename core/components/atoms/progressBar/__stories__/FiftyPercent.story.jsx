import * as React from 'react';
import { ProgressBar } from '@/index';

// CSF format story
export const fiftyPercent = () => <ProgressBar value={50} max={100} />;

export default {
  title: 'Components/Progress Indicators/ProgressBar/Fifty Percent',
  component: ProgressBar,
};
