import * as React from 'react';
import Avatar from '../Avatar';

export const defaultAvatar = () => (
  <Avatar firstName="John" lastName="Doe" appearance="primary" />
);

export default {
  title: 'Components/Avatar/Default Avatar',
  component: Avatar,
  parameters: {
    docs: {
      docPage: {
        title: 'Avatar'
      }
    }
  }
};
