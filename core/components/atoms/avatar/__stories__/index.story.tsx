import * as React from 'react';
import { select, text } from '@storybook/addon-knobs';
import Avatar from '../Avatar';

// CSF format story
export const all = () => {
  const appearance = select(
    'appearance',
    ['primary', 'alert', 'warning', 'success', 'accent1', 'accent2', 'accent3', 'accent4'],
    undefined
  );

  const children = text('children', 'JD');
  const options = {
    appearance
  };

  return (
    <Avatar
      {...options}
    >
      {children}
    </Avatar>
  );
};

// Required for CSF format story
// https://medium.com/storybookjs/component-story-format-66f4c32366df
export default { title: 'Avatar' };
