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

  const children = text('children', '');
  const firstName = text('firstName', 'John');
  const lastName = text('lastName', 'Doe');
  const options = {
    appearance,
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
  title: 'Atoms|Avatar',
  component: Avatar
};
