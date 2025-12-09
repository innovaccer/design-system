import * as React from 'react';
import { AvatarSelection } from '@/index';

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
    {
      firstName: 'Arya',
      lastName: 'Stark',
      shape: 'square',
    },
    {
      firstName: 'Rachel',
      lastName: 'Green',
    },
    {
      firstName: 'Walter',
      lastName: 'Wheeler',
      shape: 'square',
    },
  ];

  return <AvatarSelection size="regular" list={list} max={4} borderColor="white" tooltipPosition="bottom" />;
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
    {
      firstName: 'Arya',
      lastName: 'Stark',
      shape: 'square',
    },
    {
      firstName: 'Rachel',
      lastName: 'Green',
    },
    {
      firstName: 'Walter',
      lastName: 'Wheeler',
      shape: 'square',
    },
  ];

  return (
    <AvatarSelection size="regular" list={list} max={4} borderColor="white" tooltipPosition="bottom" />
  );
}`;

export default {
  title: 'Components/Avatar/AvatarSelection/Variants/Shape',
  component: AvatarSelection,
  parameters: {
    docs: {
      docPage: {
        customCode,
      },
    },
  },
};
