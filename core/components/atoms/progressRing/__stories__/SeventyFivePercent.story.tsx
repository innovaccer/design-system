import * as React from 'react';
import ProgressRing from '../ProgressRing';

// CSF format story
export const seventyFivePercent = () => (
  <ProgressRing
    value={Number(75)}
    size="small"
    max={Number(100)}
  />
);

export default {
  title: 'Atoms|ProgressRing',
  component: ProgressRing
};
