import * as React from 'react';
import { Checkbox } from '@/index';
// import classNames from 'classnames';
import { AvatarData } from '../SelectionAvatarGroup';
// import { SelectionAvatarInput } from './SelectionAvatarInput';
import SelectionAvatarInput from './SelectionAvatarInput';
import classNames from 'classnames';
import SelectionAvatarList from './SelectionAvatarList';
import SelectionAvatarOption from './SelectionAvatarOption';
import SelectionAvatarEmptyState from './SelectionAvatarEmptyState';
// import { withOverflowText } from './OverflowText';

export const SelectionAvatarPopover = (props: any) => {
  const {
    hiddenAvatarList,
    popperRenderer,
    withSearch,
    onSelect,
    setSelectedItems,
    selectedItems,
    customStyle,
    searchPlaceholder,
    searchComparator,
  } = props;

  const [searchList, setSearchList] = React.useState(hiddenAvatarList);

  if (popperRenderer) {
    return popperRenderer(hiddenAvatarList);
  }

  const onSelectHandler = (avatarData: AvatarData) => {
    let list = [...selectedItems];

    if (selectedItems.includes(avatarData)) {
      list = selectedItems.filter((selectedItem: AvatarData) => selectedItem !== avatarData);
    } else {
      list.push(avatarData);
    }

    setSelectedItems([...list]);
    onSelect && onSelect(list);
  };

  const onSearchHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = event.target.value.toLowerCase();

    const list = hiddenAvatarList.filter((avatarData: AvatarData) => {
      const { firstName, lastName } = avatarData;

      if (searchComparator) {
        return searchComparator(searchValue, avatarData);
      }
      return firstName?.toLowerCase()?.startsWith(searchValue) || lastName?.toLowerCase()?.startsWith(searchValue);
    });

    setSearchList(list);
  };

  const popperClassName = classNames({
    ['py-3']: !withSearch,
    ['pb-3']: withSearch,
    ['SelectionAvatarGroup-popper']: true,
  });

  return (
    <div
      // className={popperClassName}
      style={{ width: customStyle.width }}
    >
      {withSearch && <SelectionAvatarInput placeholder={searchPlaceholder} onChange={onSearchHandler} />}

      <div style={customStyle} className={popperClassName}>
        {searchList.length === 0 && (
          <SelectionAvatarEmptyState
            height={customStyle.maxHeight}
            title="No users found"
            description="Try modifying your search to find what you are looking for."
          />
        )}

        <SelectionAvatarList>
          {searchList.map((avatarData: AvatarData, index: number) => {
            const { firstName = '', lastName = '' } = avatarData;
            const name = `${firstName} ${lastName}`;
            const isSelected = selectedItems.includes(avatarData);
            console.log('isSelected isSelected', isSelected, 'name', name);

            return (
              <SelectionAvatarOption
                key={index}
                onClick={() => onSelectHandler(avatarData)}
                selected={isSelected}
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
              </SelectionAvatarOption>
            );
          })}
        </SelectionAvatarList>
      </div>
    </div>
  );
};

export default SelectionAvatarPopover;
