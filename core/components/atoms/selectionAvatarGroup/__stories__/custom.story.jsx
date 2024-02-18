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

  const [patientList, setPatientList] = React.useState(list);
  const [searchList, setSearchList] = React.useState(list.slice(5, list.length));
  const [selectedItems, setSelectedItems2] = React.useState([]);

  React.useEffect(() => {
    const updatedList = patientList.map((patient) => {
      if (selectedItems.includes(patient)) {
        patient.selected = true;
      }
      return patient;
    });
    setPatientList(updatedList);
  }, [selectedItems]);

  const onSearchHandler = (event) => {
    const searchValue = event.target.value.toLowerCase();
    const popoverList = list.slice(5, list.length);

    const list = popoverList.filter((avatarData) => {
      return avatarData.firstName.toLowerCase().includes(searchValue.toLowerCase());
    });

    setSearchList(list);
  };

  const mySelectHandler = (props) => {
    action('myprops', props)();
    setSelectedItems2(props);
  };

  return (
    <div>
      <SelectionAvatarGroup
        size="tiny"
        list={patientList}
        // onSelect={onAvatarSelect}
        onSelect={mySelectHandler}
      >
        <div
        // style={{ width: customStyle.width }}
        >
          <SelectionAvatarGroup.Input placeholder="search user" onChange={onSearchHandler} />

          <div
          // style={customStyle} className={popperClassName}
          >
            {searchList.length === 0 && (
              <SelectionAvatarGroup.EmptyState
                // height={customStyle.maxHeight}
                title="No users found"
                description="Try modifying your search to find what you are looking for."
              />
            )}

            <SelectionAvatarGroup.List>
              {searchList.map((avatarData, index) => {
                const { firstName = '', lastName = '' } = avatarData;
                const name = `${firstName} ${lastName}`;
                const isSelected = selectedItems.includes(avatarData);
                // console.log('isSelected isSelected', isSelected, 'name', name);

                return (
                  <SelectionAvatarGroup.Option
                    key={index}
                    // onClick={() => onSelectHandler(avatarData)}
                    // selected={isSelected}
                    value={avatarData}
                    className="d-flex align-items-center"
                  >
                    <Checkbox
                      defaultChecked={isSelected}
                      checked={isSelected}
                      label={name}
                      size="regular"
                      // onChange={(e) => {
                      //   e.stopPropagation();
                      //   e.preventDefault();
                      //   onSelectHandler(avatarData);
                      // }}
                    />
                    {/* <Text>{name}</Text> */}
                  </SelectionAvatarGroup.Option>
                );
              })}
            </SelectionAvatarGroup.List>
          </div>
        </div>
      </SelectionAvatarGroup>

      <div>
        {selectedItems.map((item, key) => (
          <p key={key}>{item.toString()}</p>
        ))}
      </div>
    </div>
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
