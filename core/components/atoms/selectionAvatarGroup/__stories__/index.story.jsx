import * as React from 'react';
import { SelectionAvatarGroup } from '../SelectionAvatarGroup';

export const all = () => {
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
