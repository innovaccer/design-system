import * as React from 'react';
import { SelectionAvatarGroup } from '../SelectionAvatarGroup';
import { action } from '@/utils/action';
import { Checkbox } from '@/index';

export const custom = () => {
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

  const [avatarList, setAvatarList] = React.useState(list);
  const [searchList, setSearchList] = React.useState(list.slice(5, list.length));
  const [selectedItems, setSelectedItems] = React.useState([]);

  React.useEffect(() => {
    const updatedList = avatarList.map((patient) => {
      if (selectedItems.includes(patient)) {
        patient.selected = true;
      }
      return patient;
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

  const onSelectHandler = (props) => {
    action('myprops', props)();
    setSelectedItems(props);
  };

  return (
    <SelectionAvatarGroup size="tiny" list={avatarList} onSelect={onSelectHandler}>
      <SelectionAvatarGroup.Input placeholder="search user" onChange={onSearchHandler} />

      {searchList.length === 0 && (
        <SelectionAvatarGroup.EmptyState
          title="No users found"
          description="Try modifying your search to find what you are looking for."
        />
      )}

      <SelectionAvatarGroup.List>
        {searchList.map((avatarData, index) => {
          const { firstName = '', lastName = '' } = avatarData;
          const name = `${firstName} ${lastName}`;
          const isSelected = selectedItems.includes(avatarData);

          return (
            <SelectionAvatarGroup.Option key={index} value={avatarData} className="d-flex align-items-center">
              <Checkbox defaultChecked={isSelected} checked={isSelected} label={name} size="regular" />
            </SelectionAvatarGroup.Option>
          );
        })}
      </SelectionAvatarGroup.List>
    </SelectionAvatarGroup>
  );
};

export default {
  title: 'Indicators/SelectionAvatarGroup/Custom',
  component: SelectionAvatarGroup,
  parameters: {
    docs: {
      docPage: {
        // customCode,
      },
    },
  },
};
