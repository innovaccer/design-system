import * as React from 'react';
import { AvatarGroup, Tooltip, Icon, Avatar } from '@/index';

export const withStatus = () => {
  const statusList = [
    {
      firstName: 'John',
      lastName: 'Doe',
    },
    {
      firstName: 'Steven',
      lastName: 'Packton',
      status: (
        <Tooltip position="top" tooltip="Verified">
          <Icon appearance="white" className="p-1 bg-success" name="done" size={10} />
        </Tooltip>
      ),
    },
    {
      firstName: 'Nancy',
      lastName: 'Wheeler',
      status: (
        <Tooltip position="top" tooltip="On Call">
          <Icon appearance="white" className="p-1 bg-primary" name="phone" size={10} />
        </Tooltip>
      ),
    },
    {
      firstName: 'Monica',
      lastName: 'Geller',
    },
    {
      firstName: 'Anuradha',
      lastName: 'Aggarwal',
      image: <Avatar.Image src="https://design.innovaccer.com/images/avatar2.jpeg" />,
      status: (
        <Tooltip position="top" tooltip="Verified">
          <Icon appearance="white" className="p-1 bg-success" name="done" size={10} />
        </Tooltip>
      ),
    },
    {
      firstName: 'Rachel',
      lastName: 'Green',
    },
    {
      firstName: 'Walter',
      lastName: 'Wheeler',
    },
    {
      firstName: 'Mark',
      lastName: 'Snow',
    },
  ];

  return <AvatarGroup list={statusList} />;
};

const customCode = `() => {
  const statusList = [
    {
      firstName: 'John',
      lastName: 'Doe',
    },
    {
      firstName: 'Steven',
      lastName: 'Packton',
      status: (
        <Tooltip position="top" tooltip="Verified">
          <Icon appearance="white" className="p-1 bg-success" name="done" size={10} />
        </Tooltip>
      ),
    },
    {
      firstName: 'Nancy',
      lastName: 'Wheeler',
      status: (
        <Tooltip position="top" tooltip="On Call">
          <Icon appearance="white" className="p-1 bg-primary" name="phone" size={10} />
        </Tooltip>
      ),
    },
    {
      firstName: 'Monica',
      lastName: 'Geller',
    },
    {
      firstName: 'Anuradha',
      lastName: 'Aggarwal',
      image: <Avatar.Image src="https://design.innovaccer.com/images/avatar2.jpeg" />,
      status: (
        <Tooltip position="top" tooltip="Verified">
          <Icon appearance="white" className="p-1 bg-success" name="done" size={10} />
        </Tooltip>
      ),
    },
    {
      firstName: 'Rachel',
      lastName: 'Green',
    },
    {
      firstName: 'Walter',
      lastName: 'Wheeler',
    },
    {
      firstName: 'Mark',
      lastName: 'Snow',
    },
  ];

  return <AvatarGroup list={statusList} />;
}`;

export default {
  title: 'Components/Avatar/AvatarGroup/With Status',
  component: AvatarGroup,
  parameters: {
    docs: {
      docPage: {
        customCode,
      },
    },
  },
};
