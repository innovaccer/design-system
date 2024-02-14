import * as React from 'react';
import { Listbox, Checkbox } from '@/index';
// import classNames from 'classnames';
import { AvatarData } from './SelectionAvatarGroup';
import SelectionAvatarInput from './SelectionAvatarInput';
import classNames from 'classnames';

const SelectionAvatarPopover = (props: any) => {
  const {
    hiddenAvatarList,
    popperRenderer,
    withSearch,
    onSelect,
    setSelectedItems,
    selectedItems,
    customStyle,
    searchPlaceholder,
  } = props;

  const [searchList, setSearchList] = React.useState(hiddenAvatarList);

  if (popperRenderer) {
    return popperRenderer(hiddenAvatarList);
  }

  const onSelectHandler = (avatarData: AvatarData) => {
    console.log('avatarData', avatarData);
    let list = selectedItems;

    if (selectedItems.includes(avatarData)) {
      list = selectedItems.filter((selectedItem: AvatarData) => selectedItem !== avatarData);
    } else {
      list.push(avatarData);
    }

    setSelectedItems(list);
    onSelect && onSelect(list);
  };

  const onSearchHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = event.target.value.toLowerCase();

    const list = hiddenAvatarList.filter((avatarData: AvatarData) => {
      const { firstName, lastName } = avatarData;
      return firstName?.toLowerCase()?.startsWith(searchValue) || lastName?.toLowerCase()?.startsWith(searchValue);
    });

    setSearchList(list);
  };

  const popperClassName = classNames({
    ['py-3']: !withSearch,
    ['pb-3']: withSearch,
  });

  return (
    <div className={popperClassName} style={{ width: customStyle.width }}>
      {withSearch && <SelectionAvatarInput placeholder={searchPlaceholder} onChange={onSearchHandler} />}
      <div style={customStyle} className="SelectionAvatarGroup-Popper">
        <Listbox showDivider={false} type="option" size="compressed">
          {searchList.map((avatarData: AvatarData, index: any) => {
            const { firstName = '', lastName = '' } = avatarData;
            const name = `${firstName} ${lastName}`;
            return (
              <Listbox.Item key={index}>
                <Checkbox
                  defaultChecked={selectedItems.includes(avatarData)}
                  label={name}
                  onChange={() => onSelectHandler(avatarData)}
                  size="regular"
                />
              </Listbox.Item>
            );
          })}
        </Listbox>
      </div>
    </div>
  );
};

export default SelectionAvatarPopover;
