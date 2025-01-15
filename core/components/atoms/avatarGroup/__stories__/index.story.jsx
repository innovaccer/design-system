import * as React from 'react';
import { AvatarGroup } from '@/index';
import { list } from './AvatarList';

export const all = () => {
  const position = 'bottom';
  const max = 2;
  const options = {
    max,
    popoverOptions: {
      position,
      withSearch: true,
      searchPlaceholder: 'Search User',
      on: 'click',
    },
    list: list.slice(0, 4),
  };

  return <AvatarGroup {...options} />;
};

const customCode = `() => {
  const list = [
    {
      firstName: 'John',
      lastName: 'Doe',
    },
    {
      firstName: 'Steven',
      lastName: 'Packton',
    },
    {
      firstName: 'Nancy',
      lastName: 'Wheeler'
    },
    {
      firstName: 'Rachel',
      lastName: 'Green',
      icon: <Avatar.Icon name="person" />
    },
    {
      firstName: 'Anuradha',
      lastName: 'Aggarwal',
      image: <Avatar.Image src="https://design.innovaccer.com/images/avatar2.jpeg" />,
    },
    {
      firstName: 'Monica',
      lastName: 'Geller'
    },
    {
      firstName: 'Arya',
      lastName: 'Stark',
    },
  ];
  return <AvatarGroup list={list} popoverOptions={{ position: 'bottom', withSearch: true, on: 'click', searchPlaceholder: 'Search User',}} />;
}`;

export default {
  title: 'Components/Avatar/AvatarGroup/All',
  component: AvatarGroup,
  parameters: {
    docs: {
      docPage: {
        customCode,
      },
    },
  },
};
