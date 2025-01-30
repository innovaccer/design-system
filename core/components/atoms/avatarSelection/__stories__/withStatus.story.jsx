import * as React from 'react';
import { action } from '@/utils/action';
import { AvatarSelection, Avatar, Input, Tooltip, Icon } from '@/index';

export const withStatus = () => {
  const list = [
    {
      firstName: 'John',
      lastName: 'Doe',
      selected: true,
      status: (
        <Tooltip position="top" tooltip="Verified">
          <Icon appearance="white" className="p-1 bg-success" name="done" size={10} />
        </Tooltip>
      ),
    },
    {
      firstName: 'Anuradha',
      lastName: 'Aggarwal',
      image: <Avatar.Image src="https://design.innovaccer.com/images/avatar2.jpeg" />,
    },
    {
      firstName: 'Nancy',
      lastName: 'Wheeler',
      status: (
        <Tooltip position="top" tooltip="Verified">
          <Icon appearance="white" className="p-1 bg-success" name="done" size={10} />
        </Tooltip>
      ),
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
      status: (
        <Tooltip position="top" tooltip="Deactivated">
          <Icon appearance="white" className="p-1 bg-danger" name="remove" size={10} />
        </Tooltip>
      ),
    },
    {
      firstName: 'Walter',
      lastName: 'Wheeler',
      selected: true,
      status: (
        <Tooltip position="top" tooltip="Traveling">
          <Icon appearance="white" className="p-1 bg-secondary" name="water" size={10} />
        </Tooltip>
      ),
    },
    {
      firstName: 'Monica',
      lastName: 'Geller',
      status: (
        <Tooltip position="top" tooltip="Verified">
          <Icon appearance="white" className="p-1 bg-success" name="done" size={10} />
        </Tooltip>
      ),
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
      status: (
        <Tooltip position="top" tooltip="Verified">
          <Icon appearance="white" className="p-1 bg-success" name="done" size={10} />
        </Tooltip>
      ),
    },
    {
      firstName: 'Anuradha',
      lastName: 'Aggarwal',
      image: <Avatar.Image src="https://design.innovaccer.com/images/avatar2.jpeg" />,
    },
    {
      firstName: 'Nancy',
      lastName: 'Wheeler',
      status: (
        <Tooltip position="top" tooltip="Verified">
          <Icon appearance="white" className="p-1 bg-success" name="done" size={10} />
        </Tooltip>
      ),
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
      status: (
        <Tooltip position="top" tooltip="Deactivated">
          <Icon appearance="white" className="p-1 bg-danger" name="remove" size={10} />
        </Tooltip>
      ),
    },
    {
      firstName: 'Walter',
      lastName: 'Wheeler',
      selected: true,
      status: (
        <Tooltip position="top" tooltip="Traveling">
          <Icon appearance="white" className="p-1 bg-secondary" name="water" size={10} />
        </Tooltip>
      ),
    },
    {
      firstName: 'Monica',
      lastName: 'Geller',
      status: (
        <Tooltip position="top" tooltip="Verified">
          <Icon appearance="white" className="p-1 bg-success" name="done" size={10} />
        </Tooltip>
      ),
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
  title: 'Components/Avatar/AvatarSelection/With Status',
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
