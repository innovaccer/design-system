import * as React from 'react';
import Pills from '../Pills';

// CSF format story
export const all = () => {
  const appearance = 'warning';
  const subtle = false;
  const children = 10;

  return (
    <Pills appearance={appearance} subtle={subtle}>
      {children}
    </Pills>
  );
};

export default {
  title: 'Indicators/Pills/All',
  component: Pills,
};
