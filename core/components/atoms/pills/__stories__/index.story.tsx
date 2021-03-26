import * as React from 'react';
import { select, boolean, text } from '@storybook/addon-knobs';
import Pills from '../Pills';

// CSF format story
export const all = () => {
  const appearance = select(
    'appearance',
    ['primary', 'secondary', 'alert', 'warning', 'success', 'accent1', 'accent2', 'accent3', 'accent4'],
    undefined
  );

  const subtle = boolean('subtle', false);

  const children = text('children', 'Pill');

  return (
    <Pills
      appearance={appearance}
      subtle={subtle}
    >
      {children}
    </Pills>
  );
};

export default {
  title: 'Components/Pills/All',
  component: Pills
};
