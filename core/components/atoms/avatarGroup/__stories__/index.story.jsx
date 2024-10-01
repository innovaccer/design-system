import * as React from 'react';
import { AvatarGroup } from '@/index';
import { list } from './AvatarList';

export const all = () => {
  const position = 'bottom';
  const on = 'hover';
  const max = 2;
  const options = {
    max,
    popoverOptions: {
      on,
      position,
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
      firstName: 'Monica',
      lastName: 'Geller'
    },
    {
      firstName: 'Arya',
      lastName: 'Stark',
    },
    {
      firstName: 'Rachel',
      lastName: 'Green',
    },
    {
      firstName: 'Walter',
      lastName: 'Wheeler'
    },
  ];
  return <AvatarGroup list={list} popoverOptions={{ position: 'bottom'}} />;
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
