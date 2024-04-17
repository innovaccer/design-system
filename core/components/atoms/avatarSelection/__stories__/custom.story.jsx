import * as React from 'react';
import { AvatarSelection, Checkbox, Input } from '@/index';

export const custom = () => {
  const list = [
    {
      firstName: 'John',
      lastName: 'Doe',
      selected: true,
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
      selected: true,
    },
  ];

  const [avatarList, setAvatarList] = React.useState(list);
  const [searchList, setSearchList] = React.useState(list.slice(5, list.length));
  const [selectedItems, setSelectedItems] = React.useState([
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
      firstName: 'Walter',
      lastName: 'Wheeler',
      selected: true,
    },
  ]);

  React.useEffect(() => {
    const updatedList = avatarList.map((avatar) => {
      if (selectedItems.includes(avatar)) {
        avatar.selected = true;
      } else {
        avatar.selected = false;
      }
      return avatar;
    });
    setAvatarList(updatedList);
  }, [selectedItems]);

  const onSearchHandler = (event) => {
    const searchValue = event.target.value.toLowerCase();
    const popoverList = avatarList?.slice(5, avatarList.length);

    const list = popoverList.filter((avatarData) => {
      return avatarData.firstName.toLowerCase().includes(searchValue.toLowerCase());
    });

    setSearchList(list);
  };

  const onSelectHandler = (list) => {
    setSelectedItems(list);
  };

  return (
    <AvatarSelection size="tiny" list={avatarList} onSelect={onSelectHandler}>
      <AvatarSelection.Input placeholder="search user" onChange={onSearchHandler} />

      {searchList.length === 0 && (
        <AvatarSelection.EmptyState
          title="No users found"
          description="Try modifying your search to find what you are looking for."
        />
      )}

      <AvatarSelection.List>
        {searchList.map((avatarData, index) => {
          const { firstName = '', lastName = '' } = avatarData;
          const name = `${firstName} ${lastName}`;

          const isSelected = selectedItems.find((item) => item.firstName === avatarData.firstName);

          return (
            <AvatarSelection.Option key={index} value={avatarData} className="d-flex align-items-center">
              <Checkbox key={isSelected} checked={isSelected} label={name} size="regular" />
            </AvatarSelection.Option>
          );
        })}
      </AvatarSelection.List>
    </AvatarSelection>
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
      firstName: 'Thom',
      lastName: 'Yorke',
      email: 'thomyorke12@gmail.com'
    },
    {
      firstName: 'Walter',
      lastName: 'Wheeler',
      selected: true,
    },
  ];

  const [avatarList, setAvatarList] = React.useState(list);
  const [searchList, setSearchList] = React.useState(list.slice(5, list.length));
  const [selectedItems, setSelectedItems] = React.useState([
    {
      firstName: 'John',
      lastName: 'Doe',
      selected: true,
    },
    {
      firstName: 'Walter',
      lastName: 'Wheeler',
      selected: true,
    },
  ]);

  React.useEffect(() => {
    const updatedList = avatarList.map((avatar) => {
      if (selectedItems.includes(avatar)) {
        avatar.selected = true;
      } else {
        avatar.selected = false;
      }
      return avatar;
    });
    setAvatarList(updatedList);
  }, [selectedItems]);

  const onSearchHandler = (event) => {
    const searchValue = event.target.value.toLowerCase();
    const popoverList = avatarList.slice(5, avatarList.length);

    const list = popoverList.filter((avatarData) => {
      return avatarData.firstName.toLowerCase().includes(searchValue.toLowerCase());
    });

    setSearchList(list);
  };

  const onSelectHandler = (list) => {
    setSelectedItems(list);
  };

  return (
    <AvatarSelection size="tiny" list={avatarList} onSelect={onSelectHandler}>
      <AvatarSelection.Input placeholder="search user" onChange={onSearchHandler} />

      {searchList.length === 0 && (
        <AvatarSelection.EmptyState
          title="No users found"
          description="Try modifying your search to find what you are looking for."
        />
      )}

      <AvatarSelection.List>
        {searchList.map((avatarData, index) => {
          const { firstName = '', lastName = '', email } = avatarData;
          const name = \`\${firstName} \${lastName}\`;

          const isSelected = selectedItems.find((item) => item.firstName === avatarData.firstName);

          return (
            <AvatarSelection.Option key={index} value={avatarData} className="d-flex align-items-center">
              <Checkbox key={isSelected} checked={isSelected} label={name} size="regular" helpText={email} />
            </AvatarSelection.Option>
          );
        })}
      </AvatarSelection.List>
    </AvatarSelection>
  );
}`;

export default {
  title: 'Components/AvatarSelection/Custom',
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
