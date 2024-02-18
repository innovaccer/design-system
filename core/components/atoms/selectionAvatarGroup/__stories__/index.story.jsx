import * as React from 'react';
import { SelectionAvatarGroup } from '../SelectionAvatarGroup';
import { action } from '@/utils/action';

export const all = () => {
  const list = [
    {
      firstName: 'John',
      lastName: 'Doe',
      iconOptions: {
        name: 'places',
        type: 'outlined',
      },
      selected: true,
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
      selected: true,
    },
  ];

  const onSelectHandler = (props) => {
    action('props', props)();
  };

  const searchComparator = (searchValue, data) => {
    return data.firstName.toLowerCase().includes(searchValue.toLowerCase());
  };

  return (
    <SelectionAvatarGroup
      withSearch={true}
      list={list}
      onSelect={onSelectHandler}
      searchPlaceholder="Search User"
      searchComparator={searchComparator}
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
