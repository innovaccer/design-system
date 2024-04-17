import * as React from 'react';
import { Avatar } from '@/index';

export const defaultAvatar = () => <Avatar firstName="John" lastName="Doe" appearance="primary" />;

export default {
  title: 'Components/Avatar/Avatar/Default Avatar',
  component: Avatar,
  parameters: {
    docs: {
      docPage: {
        title: 'Avatar',
      },
    },
  },
};
