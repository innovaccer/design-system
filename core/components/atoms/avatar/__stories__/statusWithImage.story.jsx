import * as React from 'react';
import { Avatar, Tooltip } from '@/index';
import StatusImage from './assets/status-image.png';
import './assets/styles.css';

// CSF format story
export const statusWithImage = () => {

  return (
    <Avatar
      firstName="Tom"
      lastName="Yusuf"
      appearance="accent1"
      status={
        <Tooltip tooltip="DND" position="top">
          <img 
            width="14px" 
            alt="DND" 
            src={StatusImage} 
          />
        </Tooltip>
      }
    />
  );
};

const ImagePath = JSON.stringify(StatusImage);

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
      firstName="Tom"
      lastName="Yusuf"
      appearance="accent1"
      status={
        <Tooltip tooltip="DND" position="top">
          <img 
            width="14px" 
            alt="DND" 
            src={${ImagePath}}  
          />
        </Tooltip>
      }
    />
  );
}`;

export default {
  title: 'Components/Avatar/Avatar/Status/Status With Image',
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
