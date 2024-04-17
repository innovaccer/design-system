import * as React from 'react';
import { AvatarGroup, Avatar } from '@/index';

export const withIcon = () => {
  const list = [
    {
      firstName: 'John',
      lastName: 'Doe',
      icon: <Avatar.Icon name="person" />,
    },
    {
      firstName: 'Steven',
      lastName: 'Packton',
      icon: <Avatar.Icon name="person" />,
    },
    {
      firstName: 'Nancy',
      lastName: 'Wheeler',
      icon: <Avatar.Icon name="person" />,
    },
    {
      firstName: 'Monica',
      lastName: 'Geller',
      icon: <Avatar.Icon name="person" />,
    },
    {
      firstName: 'Arya',
      lastName: 'Stark',
      icon: <Avatar.Icon name="person" />,
    },
    {
      firstName: 'Rachel',
      lastName: 'Green',
      icon: <Avatar.Icon name="person" />,
    },
    {
      firstName: 'Walter',
      lastName: 'Wheeler',
      icon: <Avatar.Icon name="person" />,
    },
  ];
  return <AvatarGroup list={list} />;
};

const customCode = `() => {
  const list = [
    {
      firstName: 'John',
      lastName: 'Doe',
      icon: <Avatar.Icon name="person" />
    },
    {
      firstName: 'Steven',
      lastName: 'Packton',
      icon: <Avatar.Icon name="person" />
    },
    {
      firstName: 'Nancy',
      lastName: 'Wheeler',
      icon: <Avatar.Icon name="person" />
    },
    {
      firstName: 'Monica',
      lastName: 'Geller',
      icon: <Avatar.Icon name="person" />
    },
    {
      firstName: 'Arya',
      lastName: 'Stark',
      icon: <Avatar.Icon name="person" />
    },
    {
      firstName: 'Rachel',
      lastName: 'Green',
      icon: <Avatar.Icon name="person" />
    },
    {
      firstName: 'Walter',
      lastName: 'Wheeler',
      icon: <Avatar.Icon name="person" />
    },
  ];
  return <AvatarGroup list={list} />;
}`;

export default {
  title: 'Components/Avatar/AvatarGroup/With Icon',
  component: AvatarGroup,
  subcomponents: { 'Avatar.Image': Avatar.Image, 'Avatar.Icon': Avatar.Icon },
  parameters: {
    docs: {
      docPage: {
        customCode,
      },
    },
  },
};
