import * as React from 'react';
import { AvatarGroup } from '@/index';

export const Shape = () => {
  const list = [
    {
      firstName: 'John',
      lastName: 'Doe',
      shape: 'square',
    },
    {
      firstName: 'Steven',
      lastName: 'Packton',
    },
    {
      firstName: 'Nancy',
      lastName: 'Wheeler',
      shape: 'square',
    },
    {
      firstName: 'Monica',
      lastName: 'Geller',
    },
  ];

  return <AvatarGroup size="regular" list={list} popoverOptions={{ on: 'hover' }} />;
};

const customCode = `() => {
  const list = [
    {
      firstName: 'John',
      lastName: 'Doe',
      shape: 'square',
    },
    {
      firstName: 'Steven',
      lastName: 'Packton',
    },
    {
      firstName: 'Nancy',
      lastName: 'Wheeler',
      shape: 'square',
    },
    {
      firstName: 'Monica',
      lastName: 'Geller',
    },
  ];

  return <AvatarGroup size="regular" list={list} popoverOptions={{ on: 'hover' }} />;
}`;

export default {
  title: 'Components/Avatar/AvatarGroup/Variants/Shape',
  component: AvatarGroup,
  parameters: {
    docs: {
      docPage: {
        customCode,
      },
    },
  },
};
