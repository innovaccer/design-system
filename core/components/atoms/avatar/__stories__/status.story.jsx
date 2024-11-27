import * as React from 'react';
import { Avatar, Icon, Tooltip } from '@/index';
import StatusImage from './assets/status-image.png';
import './assets/styles.css';

// CSF format story
export const status = () => {
  const statusMapper = [
    {
      icon: 'done',
      tooltip: 'Verified',
      bgColor: 'success',
      firstName: 'John',
      lastName: 'Doe',
      appearance: 'primary',
    },
    { icon: 'done', tooltip: 'DND', image: true, firstName: 'Tom', lastName: 'Yusuf', appearance: 'accent1' },
    {
      icon: 'mode_night',
      tooltip: 'Night time',
      bgColor: 'accent2-darker',
      firstName: 'John',
      lastName: 'Geller',
      appearance: 'success',
    },
    {
      icon: 'call',
      tooltip: 'Available to take calls',
      bgColor: 'success-dark',
      firstName: 'Royal',
      lastName: 'Pearl',
      appearance: 'accent2',
    },
  ];

  const StatusImage = () => {
    return (
      <Tooltip tooltip="DND" position="top">
        <img src={StatusImage} width="14px" alt="DND" />
      </Tooltip>
    );
  };

  const StatusIcon = ({ bgColor, tooltip, icon }) => {
    return (
      <Tooltip tooltip={tooltip} triggerClass={`status-trigger status-trigger--${bgColor}`} position="top">
        <Icon name={icon} size={10} appearance="white" />
      </Tooltip>
    );
  };

  return (
    <div className="d-flex justify-content-between">
      {statusMapper.map((statusItem, ind) => {
        const { icon, tooltip, image, bgColor, appearance, firstName, lastName } = statusItem;
        const status = image ? <StatusImage /> : <StatusIcon bgColor={bgColor} tooltip={tooltip} icon={icon} />;
        return <Avatar key={ind} firstName={firstName} lastName={lastName} status={status} appearance={appearance} />;
      })}
    </div>
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

      .status-trigger--success {
        background-color: var(--success);
      }

      .status-trigger--accent2-darker {
        background-color: var(--accent2-darker);
      }

      .status-trigger--success-dark {
        background-color: var(--success-dark);
      }
  */

  const statusMapper = [
    {
      icon: 'done',
      tooltip: 'Verified',
      bgColor: 'success',
      firstName: 'John',
      lastName: 'Doe',
      appearance: 'primary',
    },
    { icon: 'done', tooltip: 'DND', image: true, firstName: 'Tom', lastName: 'Yusuf', appearance: 'accent1' },
    {
      icon: 'mode_night',
      tooltip: 'Night time',
      bgColor: 'accent2-darker',
      firstName: 'John',
      lastName: 'Geller',
      appearance: 'success',
    },
    {
      icon: 'call',
      tooltip: 'Available to take calls',
      bgColor: 'success-dark',
      firstName: 'Royal',
      lastName: 'Pearl',
      appearance: 'accent2',
    },
  ];

  const StatusImage = () => {
    return (
      <Tooltip tooltip="DND" position="top">
        <img src={${ImagePath}} width="14px" alt="DND" />
      </Tooltip>
    );
  };

  const StatusIcon = ({bgColor, tooltip, icon}) => {
    return (
      <Tooltip tooltip={tooltip} triggerClass={\`status-trigger status-trigger--\${bgColor}\`} position="top">
        <Icon name={icon} size={10} appearance="white" />
      </Tooltip>
    );
  };

  return (
    <div className="d-flex justify-content-between">
      {statusMapper.map((statusItem, ind) => {
        const { icon, tooltip, image, bgColor, appearance, firstName, lastName } = statusItem;
        const status = image ? <StatusImage /> : <StatusIcon bgColor={bgColor} tooltip={tooltip} icon={icon} />;
        return <Avatar key={ind} firstName={firstName} lastName={lastName} status={status} appearance={appearance} />;
      })}
    </div>
  );
}`;

export default {
  title: 'Components/Avatar/Avatar/Status',
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
