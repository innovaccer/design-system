import * as React from 'react';
import { text } from '@storybook/addon-knobs';
import Avatar from '../Avatar';

export const defaultAvatar = () => {
  const children = text('children', 'JD');
  return (
    <Avatar appearance="primary">
      {children}
    </Avatar>
  );
};

export default {
  title: 'Atoms|Avatar',
  component: Avatar,
  parameters: {
    docs: {
      docPage: {
        title: 'Avatar'
      }
    }
  }
};
