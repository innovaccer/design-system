import * as React from 'react';
import Avatar from '../Avatar';

// CSF format story
export const all = () => {
  const appearance = 'primary';
  const size = 'tiny';
  const withTooltip = true;
  const children = '';
  const firstName = 'John';
  const lastName = 'Doe';

  const options = {
    appearance,
    withTooltip,
    size,
    firstName,
    lastName,
  };

  return <Avatar {...options}>{children}</Avatar>;
};

export default {
  title: 'Indicators/Avatar/All',
  component: Avatar,
};
