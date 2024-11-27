import * as React from 'react';
import { Avatar, Icon, Tooltip } from '@/index';

// CSF format story
export const statusWithIcon = () => {
  return (
    <Avatar
      lastName="Doe"
      firstName="John"
      appearance="primary"
      status={
        <Tooltip tooltip="Verified" position="top">
          <Icon name="done" size={10} appearance="white" className="p-1 bg-success" />
        </Tooltip>
      }
    />
  );
};

export default {
  title: 'Components/Avatar/Avatar/Status/Status With Icon',
  component: Avatar,
  parameters: {
    docs: {
      docPage: {
        title: 'Avatar',
      },
    },
  },
};
