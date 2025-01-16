import * as React from 'react';
import { action } from '@/utils/action';
import { AvatarSelection, Avatar, Input } from '@/index';

export const all = () => {
  const list = [
    {
      firstName: 'John',
      lastName: 'Doe',
      selected: true,
    },
    {
      firstName: 'Anuradha',
      lastName: 'Aggarwal',
      image: <Avatar.Image src="https://design.innovaccer.com/images/avatar2.jpeg" />,
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
      icon: <Avatar.Icon name="person" />,
    },
    {
      firstName: 'Satyam',
      lastName: 'Yadav',
      selected: true,
      image: <Avatar.Image src="https://design.innovaccer.com/images/avatar1.png" />,
    },
    {
      firstName: 'Walter',
      lastName: 'Wheeler',
      selected: true,
    },
    {
      firstName: 'Monica',
      lastName: 'Geller',
    },
    {
      firstName: 'Arya',
      lastName: 'Stark',
    },
  ];

  const onSelectHandler = (props) => {
    action('props', props)();
  };

  const searchComparator = (searchValue, data) => {
    if (searchValue === '') {
      return true;
    }
    return data.firstName.toLowerCase().includes(searchValue.toLowerCase());
  };

  return (
    <AvatarSelection
      list={list}
      withSearch={true}
      onSelect={onSelectHandler}
      searchPlaceholder="Search User"
      searchComparator={searchComparator}
    />
  );
};

const customCode = `() => {
  const list = [
    {
      firstName: 'John',
      lastName: 'Doe',
      selected: true,
    },
    {
      firstName: 'Anuradha',
      lastName: 'Aggarwal',
      image: <Avatar.Image src="https://design.innovaccer.com/images/avatar2.jpeg" />,
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
      icon: <Avatar.Icon name="person" />,
    },
    {
      firstName: 'Satyam',
      lastName: 'Yadav',
      selected: true,
      image: <Avatar.Image src="https://design.innovaccer.com/images/avatar1.png" />,
    },
    {
      firstName: 'Walter',
      lastName: 'Wheeler',
      selected: true,
    },
    {
      firstName: 'Monica',
      lastName: 'Geller',
    },
    {
      firstName: 'Arya',
      lastName: 'Stark',
    },
  ];

  const onSelectHandler = (props) => {
    console.log('props', props);
  };

  const searchComparator = (searchValue, data) => {
    if (searchValue === '') {
      return true;
    }
    return data.firstName.toLowerCase().includes(searchValue.toLowerCase());
  };

  return (
    <AvatarSelection
      list={list}
      withSearch={true}
      onSelect={onSelectHandler}
      searchPlaceholder="Search User"
      searchComparator={searchComparator}
    />
  );
}`;

export default {
  title: 'Components/Avatar/AvatarSelection/All',
  component: AvatarSelection,
  subcomponents: {
    'AvatarSelection.Input': Input,
    'AvatarSelection.List': AvatarSelection.List,
    'AvatarSelection.Option': AvatarSelection.Option,
    'AvatarSelection.EmptyState': AvatarSelection.EmptyState,
  },
  parameters: {
    docs: {
      docPage: {
        customCode,
      },
    },
  },
};
