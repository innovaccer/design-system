import * as React from 'react';
import { AvatarGroup, Avatar } from '@/index';

export const withPresence = () => {
  const presenceList = [
    {
      firstName: 'John',
      lastName: 'Doe',
    },
    {
      firstName: 'Steven',
      lastName: 'Packton',
      presence: 'active',
    },
    {
      firstName: 'Nancy',
      lastName: 'Wheeler',
      presence: 'away',
    },
    {
      firstName: 'Monica',
      lastName: 'Geller',
    },
    {
      firstName: 'Anuradha',
      lastName: 'Aggarwal',
      image: <Avatar.Image src="https://design.innovaccer.com/images/avatar2.jpeg" />,
      presence: 'active',
    },
    {
      firstName: 'Rachel',
      lastName: 'Green',
      presence: 'away',
      disabled: true,
    },
    {
      firstName: 'Walter',
      lastName: 'Wheeler',
      presence: 'away',
    },
    {
      firstName: 'Mark',
      lastName: 'Snow',
    },
  ];

  return <AvatarGroup list={presenceList} />;
};

const customCode = `() => {
  const presenceList = [
    {
      firstName: 'John',
      lastName: 'Doe',
    },
    {
      firstName: 'Steven',
      lastName: 'Packton',
      presence: 'active',
    },
    {
      firstName: 'Nancy',
      lastName: 'Wheeler',
      presence: 'away',
    },
    {
      firstName: 'Monica',
      lastName: 'Geller',
    },
    {
      firstName: 'Anuradha',
      lastName: 'Aggarwal',
      image: <Avatar.Image src="https://design.innovaccer.com/images/avatar2.jpeg" />,
      presence: 'active',
    },
    {
      firstName: 'Rachel',
      lastName: 'Green',
      presence: 'away',
      disabled: true,
    },
    {
      firstName: 'Walter',
      lastName: 'Wheeler',
      presence: 'away',
    },
    {
      firstName: 'Mark',
      lastName: 'Snow',
    },
  ];

  return <AvatarGroup list={presenceList} />;
}`;

export default {
  title: 'Components/Avatar/AvatarGroup/With Presence',
  component: AvatarGroup,
  parameters: {
    docs: {
      docPage: {
        customCode,
      },
    },
  },
};
