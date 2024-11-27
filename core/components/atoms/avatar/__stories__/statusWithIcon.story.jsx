import * as React from 'react';
import { Avatar, Icon, Tooltip } from '@/index';
import './assets/styles.css';

// CSF format story
export const statusWithIcon = () => {
  return (
    <Avatar
      lastName="Doe"
      firstName="John"
      appearance="primary"
      status={
        <Tooltip tooltip="Verified" triggerClass="status-trigger bg-success" position="top">
          <Icon name="done" size={10} appearance="white" />
        </Tooltip>
      }
    />
  );
};

const customCode = `() => {
  /*
    // style.css
      .status-trigger {
        width: 100%;
        border-radius: 50%;
        height: inherit;
        display: flex;
        align-items: center;
        justify-content: center;
      }
  */

  return (
    <Avatar
      lastName="Doe"
      firstName="John"
      appearance="primary"
      status={
        <Tooltip tooltip="Verified" triggerClass="status-trigger bg-success" position="top">
          <Icon name="done" size={10} appearance="white" />
        </Tooltip>
      }
    />
  );
}`;

export default {
  title: 'Components/Avatar/Avatar/Status/Status With Icon',
  component: Avatar,
  parameters: {
    docs: {
      docPage: {
        title: 'Avatar',
        customCode,
      },
    },
  },
};
