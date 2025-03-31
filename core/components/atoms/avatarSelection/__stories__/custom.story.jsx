import * as React from 'react';
import { AvatarSelection, Checkbox, Input, Tooltip } from '@/index';
import './style.css';

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
      firstName: 'Thom',
      lastName: 'Yorke',
      email: 'thom12@gmail.com',
    },
    {
      firstName: 'Rachel',
      lastName: 'Green',
    },
    {
      firstName: 'Walter Harry Paxton',
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

  const AvatarSelectionItem = (props) => {
    const { avatarData, isSelected } = props;
    const [showTooltip, setShowTooltip] = React.useState(false);
    const elementRef = React.useRef(null);

    const { firstName = '', lastName = '', email } = avatarData;
    const name = `${firstName} ${lastName}`;

    return (
      <Tooltip showOnTruncation={true} tooltip={name} elementRef={elementRef} open={showTooltip}>
        <AvatarSelection.Option
          value={avatarData}
          className="d-flex align-items-center"
          onFocus={() => {
            setShowTooltip(true);
          }}
          onBlur={() => {
            setShowTooltip(false);
          }}
        >
          <Checkbox
            key={isSelected}
            checked={isSelected}
            label={name}
            size="regular"
            helpText={email}
            labelRef={elementRef}
            className="w-100"
          />
        </AvatarSelection.Option>
      </Tooltip>
    );
  };

  return (
    <AvatarSelection size="tiny" list={avatarList} onSelect={onSelectHandler}>
      <div className="AvatarSelection-wrapper">
        <AvatarSelection.Input placeholder="Search user" onChange={onSearchHandler} />

        {searchList.length === 0 && (
          <AvatarSelection.EmptyState
            title="No users found"
            description="Try modifying your search to find what you are looking for."
          />
        )}

        <AvatarSelection.List>
          {searchList.map((avatarData, index) => {
            const isSelected = selectedItems.find((item) => item.firstName === avatarData.firstName);

            return <AvatarSelectionItem key={index} avatarData={avatarData} isSelected={isSelected} />;
          })}
        </AvatarSelection.List>
      </div>
    </AvatarSelection>
  );
};

const customCode = `() => {

  /*
    .AvatarSelection-wrapper {
      width: var(--spacing-440);
    }
  */
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
      email: 'thom12@gmail.com',
    },
    {
      firstName: 'Rachel',
      lastName: 'Green',
    },
    {
      firstName: 'Walter Harry Paxton',
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
    const popoverList = avatarList.slice(5, avatarList.length);

    const list = popoverList.filter((avatarData) => {
      return avatarData.firstName.toLowerCase().includes(searchValue.toLowerCase());
    });

    setSearchList(list);
  };

  const onSelectHandler = (list) => {
    setSelectedItems(list);
  };

  const AvatarSelectionItem = (props) => {
    const { avatarData, isSelected } = props;
    const [showTooltip, setShowTooltip] = React.useState(false);
    const elementRef = React.useRef(null);

    const { firstName = '', lastName = '', email } = avatarData;
    const name = \`\${firstName} \${lastName}\`;

    return (
      <Tooltip showOnTruncation={true} tooltip={name} elementRef={elementRef} open={showTooltip}>
        <AvatarSelection.Option
          value={avatarData}
          className="d-flex align-items-center"
          onFocus={() => {
            setShowTooltip(true);
          }}
          onBlur={() => {
            setShowTooltip(false);
          }}
        >
          <Checkbox
            key={isSelected}
            checked={isSelected}
            label={name}
            size="regular"
            helpText={email}
            labelRef={elementRef}
            className="w-100"
          />
        </AvatarSelection.Option>
      </Tooltip>
    );
  };

  return (
    <AvatarSelection size="tiny" list={avatarList} onSelect={onSelectHandler}>
      <div className="AvatarSelection-wrapper">
        <AvatarSelection.Input placeholder="Search user" onChange={onSearchHandler} />

        {searchList.length === 0 && (
          <AvatarSelection.EmptyState
            title="No users found"
            description="Try modifying your search to find what you are looking for."
          />
        )}

        <AvatarSelection.List>
          {searchList.map((avatarData, index) => {
            const isSelected = selectedItems.find((item) => item.firstName === avatarData.firstName);

            return <AvatarSelectionItem key={index} avatarData={avatarData} isSelected={isSelected} />;
          })}
        </AvatarSelection.List>
      </div>
    </AvatarSelection>
  );
}`;

export default {
  title: 'Components/Avatar/AvatarSelection/Custom',
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
