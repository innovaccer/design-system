import * as React from 'react';
import { Avatar, Tooltip } from '@/index';
import StatusImage from './assets/status-image.png';

// CSF format story
export const statusWithImage = () => {
  return (
    <Avatar
      firstName="Tom"
      lastName="Yusuf"
      appearance="accent1"
      status={
        <Tooltip tooltip="DND" position="top">
          <img width="14px" alt="DND" src={StatusImage} />
        </Tooltip>
      }
    />
  );
};

export default {
  title: 'Components/Avatar/Avatar/Status/Status With Image',
  component: Avatar,
  parameters: {
    docs: {
      docPage: {
        title: 'Avatar',
      },
    },
  },
};
