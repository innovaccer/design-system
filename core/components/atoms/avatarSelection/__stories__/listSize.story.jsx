import * as React from 'react';
import { AvatarSelection, Checkbox, Label, Input, Avatar, Text } from '@/index';

export const listItemSize = () => {
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

  const listRef = React.createRef();

  const listSize = ['standard', 'compressed', 'tight'];
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
    <div>
      {listSize.map((size, index) => {
        return (
          <div key={index} className="mb-8 w-25">
            <Label htmlFor={size} withInput={true}>
              {size.charAt(0).toUpperCase() + size.slice(1)}
            </Label>
            <br />
            <AvatarSelection size="tiny" list={avatarList} onSelect={onSelectHandler} listRef={listRef}>
              <AvatarSelection.Input placeholder="Search user" onChange={onSearchHandler} />

              {searchList.length === 0 && (
                <AvatarSelection.EmptyState
                  title="No users found"
                  description="Try modifying your search to find what you are looking for."
                />
              )}

              <AvatarSelection.List size={size} ref={listRef}>
                {searchList.map((avatarData, index) => {
                  const { firstName = '', lastName = '' } = avatarData;
                  const name = `${firstName} ${lastName}`;

                  const isSelected = selectedItems.find((item) => item.firstName === avatarData.firstName);

                  return (
                    <AvatarSelection.Option key={index} value={avatarData} className="d-flex align-items-center">
                      <Checkbox
                        key={isSelected}
                        defaultChecked={isSelected}
                        checked={isSelected}
                        size="regular"
                        tabIndex={-1}
                      />
                      <Avatar {...avatarData} className="ml-3 mr-4" withTooltip={false} />
                      <Text className="ellipsis--noWrap">{name}</Text>
                    </AvatarSelection.Option>
                  );
                })}
              </AvatarSelection.List>
            </AvatarSelection>
          </div>
        );
      })}
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

  const listSize = ['standard', 'compressed', 'tight'];
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
    <div>
      {listSize.map((size, index) => {
        return (
          <div key={index} className="mb-8 w-25">
            <Label htmlFor={size} withInput={true}>
              {size.charAt(0).toUpperCase() + size.slice(1)}
            </Label>
            <br />
            <AvatarSelection size="tiny" list={avatarList} onSelect={onSelectHandler}>
              <AvatarSelection.Input placeholder="Search user" onChange={onSearchHandler} />

              {searchList.length === 0 && (
                <AvatarSelection.EmptyState
                  title="No users found"
                  description="Try modifying your search to find what you are looking for."
                />
              )}

              <AvatarSelection.List size={size}>
                {searchList.map((avatarData, index) => {
                  const { firstName = '', lastName = '' } = avatarData;
                  const name = \`\${firstName} \${lastName}\`;

                  const isSelected = selectedItems.find((item) => item.firstName === avatarData.firstName);

                  return (
                    <AvatarSelection.Option key={index} value={avatarData} className="d-flex align-items-center">
                      <Checkbox
                        key={isSelected}
                        defaultChecked={isSelected}
                        checked={isSelected}
                        size="regular"
                        tabIndex={-1}
                      />
                      <Avatar {...avatarData} className="ml-3 mr-4" withTooltip={false} />
                      <Text className="ellipsis--noWrap">{name}</Text>
                    </AvatarSelection.Option>
                  );
                })}
              </AvatarSelection.List>
            </AvatarSelection>
          </div>
        );
      })}
    </div>
  );
}`;

export default {
  title: 'Components/Avatar/AvatarSelection/List Item Size',
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
