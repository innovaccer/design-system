import * as React from 'react';
import Avatar from '../Avatar';

export const defaultAvatar = () => (
    <Avatar appearance="primary">
      {'JD'}
    </Avatar>
  );

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
