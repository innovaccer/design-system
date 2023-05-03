import * as React from 'react';
import ProgressRing from '../ProgressRing';

// CSF format story
export const all = () => {
  const size = 'small';
  const value = 30;
  const max = 100;

  return <ProgressRing value={value} size={size} max={max} />;
};

export default {
  title: 'Indicators/ProgressRing/All',
  component: ProgressRing,
};
