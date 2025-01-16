import * as React from 'react';
import { action } from '@/utils/action';
import { AvatarSelection, Avatar, Input, Text } from '@/index';

export const states = () => {
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
      firstName: 'Walter',
      lastName: 'Wheeler',
      selected: true,
    },
    {
      firstName: 'Rachel',
      lastName: 'Green',
    },
    {
      firstName: 'Walter',
      lastName: 'Paxton',
      selected: true,
    },
  ];

  const disabledList = [
    {
      firstName: 'John',
      lastName: 'Doe',
      selected: true,
      disabled: true,
      tooltipSuffix: '(Deactivated)',
    },
    {
      firstName: 'Anuradha',
      lastName: 'Aggarwal',
      image: <Avatar.Image src="https://design.innovaccer.com/images/avatar2.jpeg" />,
      disabled: true,
      tooltipSuffix: '(Deactivated)',
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
      firstName: 'Walter',
      lastName: 'Wheeler',
      selected: true,
    },
    {
      firstName: 'Rachel',
      lastName: 'Green',
      disabled: true,
      tooltipSuffix: '(Deactivated)',
    },
    {
      firstName: 'Walter',
      lastName: 'Paxton',
      selected: true,
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
    <div className="d-flex">
      <div className="flex-column mr-9 ">
        <Text weight="strong">Default</Text>
        <div className="mt-7">
          <AvatarSelection
            list={list}
            withSearch={true}
            onSelect={onSelectHandler}
            searchPlaceholder="Search User"
            searchComparator={searchComparator}
          />
        </div>
      </div>
      <div className="flex-column">
        <Text weight="strong">Disabled</Text>
        <div className="mt-7">
          <AvatarSelection
            list={disabledList}
            withSearch={true}
            onSelect={onSelectHandler}
            searchPlaceholder="Search User"
            searchComparator={searchComparator}
          />
        </div>
      </div>
    </div>
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
      firstName: 'Walter',
      lastName: 'Wheeler',
      selected: true,
    },
    {
      firstName: 'Rachel',
      lastName: 'Green',
    },
    {
      firstName: 'Walter',
      lastName: 'Paxton',
      selected: true,
    },
  ];

  const disabledList = [
    {
      firstName: 'John',
      lastName: 'Doe',
      selected: true,
      disabled: true,
      tooltipSuffix: '(Deactivated)',
    },
    {
      firstName: 'Anuradha',
      lastName: 'Aggarwal',
      image: <Avatar.Image src="https://design.innovaccer.com/images/avatar2.jpeg" />,
      disabled: true,
      tooltipSuffix: '(Deactivated)',
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
      firstName: 'Walter',
      lastName: 'Wheeler',
      selected: true,
    },
    {
      firstName: 'Rachel',
      lastName: 'Green',
      disabled: true,
      tooltipSuffix: '(Deactivated)',
    },
    {
      firstName: 'Walter',
      lastName: 'Paxton',
      selected: true,
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
    <div className="d-flex">
      <div className="flex-column mr-9">
        <Text weight="strong">Default</Text>
        <div className="mt-7">
          <AvatarSelection
            list={list}
            withSearch={true}
            onSelect={onSelectHandler}
            searchPlaceholder="Search User"
            searchComparator={searchComparator}
          />
        </div>
      </div>
      <div className="flex-column">
        <Text weight="strong">Disabled</Text>
        <div className="mt-7">
          <AvatarSelection
            list={disabledList}
            withSearch={true}
            onSelect={onSelectHandler}
            searchPlaceholder="Search User"
            searchComparator={searchComparator}
          />
        </div>
      </div>
    </div>
  );
}`;

export default {
  title: 'Components/Avatar/AvatarSelection/States',
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
