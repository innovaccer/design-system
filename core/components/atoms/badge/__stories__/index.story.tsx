import * as React from 'react';
import { select, boolean, text } from '@storybook/addon-knobs';
import Badge from '../Badge';

// CSF format story
export const all = () => {
  const appearance = select(
    'appearance',
    ['primary', 'secondary', 'alert', 'warning', 'success', 'accent1', 'accent2', 'accent3', 'accent4'],
    undefined
  );

  const subtle = boolean('subtle', false);

  const children = text('children', 'Badge');

  return (
    <Badge
      appearance={appearance}
      subtle={subtle}
    >
      {children}
    </Badge>
  );
};

// Required for CSF format story
// https://medium.com/storybookjs/component-story-format-66f4c32366df
export default { title: 'Badge' };
