import * as React from 'react';
import { ProgressRing } from '@/index';

// CSF format story
export const all = () => {
  const value = 50;
  const max = 100;

  return <ProgressRing value={value} max={max} />;
};

export default {
  title: 'Components/Progress Indicators/ProgressRing/All',
  component: ProgressRing,
};
