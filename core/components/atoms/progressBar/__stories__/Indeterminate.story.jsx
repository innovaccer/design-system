import * as React from 'react';
import { ProgressBar } from '@/index';

// CSF format story
export const indeterminateState = () => {
  return <ProgressBar className="w-50" state="indeterminate" />;
};

export default {
  title: 'Components/Progress Indicators/ProgressBar/Indeterminate State',
  component: ProgressBar,
};
