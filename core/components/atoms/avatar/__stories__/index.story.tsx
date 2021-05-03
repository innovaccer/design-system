import * as React from 'react';
import { select, text, boolean } from '@storybook/addon-knobs';
import Avatar from '../Avatar';

// CSF format story
export const all = () => {
  const appearance = select(
    'appearance',
    ['primary', 'secondary', 'alert', 'warning', 'success', 'accent1', 'accent2', 'accent3', 'accent4'],
    undefined
  );

  const size = select('size', ['regular', 'tiny'], undefined);
  const withTooltip = boolean('with tooltip', true);

  const children = text('children', '');
  const firstName = text('firstName', 'John');
  const lastName = text('lastName', 'Doe');

  const options = {
    appearance,
    withTooltip,
    size,
    firstName,
    lastName
  };

  return (
    <Avatar
      {...options}
    >
      {children}
    </Avatar>
  );
};

export default {
  title: 'Components/Avatar/All',
  component: Avatar
};
