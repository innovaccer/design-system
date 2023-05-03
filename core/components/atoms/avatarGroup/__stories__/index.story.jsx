import * as React from 'react';
import { AvatarGroup } from '../AvatarGroup';
import { list } from './AvatarList';

export const all = () => {
  const position = 'bottom-end';
  const on = 'hover';
  const dark = true;
  const max = 2;
  const options = {
    max,
    popoverOptions: {
      on,
      position,
      dark,
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
  return <AvatarGroup list={list} popoverOptions={{ dark: true, on: 'hover', position: 'bottom'}}/>;
}`;

export default {
  title: 'Indicators/AvatarGroup/All',
  component: AvatarGroup,
  parameters: {
    docs: {
      docPage: {
        customCode,
      },
    },
  },
};
