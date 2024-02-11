import * as React from 'react';
import { SelectionAvatarGroup } from '../SelectionAvatarGroup';

export const all = () => {
  const list = [
    {
      firstName: 'John',
      lastName: 'Doe',
      iconOptions: {
        name: 'places',
        type: 'outlined',
      },
    },
    {
      firstName: 'Steven',
      lastName: 'Packton',
      imgOptions: {
        src: 'https://design.innovaccer.com/images/avatar2.jpeg',
      },
    },
    {
      firstName: 'Nancy',
      lastName: 'Wheeler',
    },
    {
      firstName: 'Monica',
      lastName: 'Geller',
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
      lastName: 'Wheeler',
    },
  ];

  return (
    <SelectionAvatarGroup
      list={list}
      // borderColor="red"
    />
  );
};

export default {
  title: 'Indicators/SelectionAvatarGroup/All',
  component: SelectionAvatarGroup,
  parameters: {
    docs: {
      docPage: {
        // customCode,
      },
    },
  },
};
