import * as React from 'react';
import classNames from 'classnames';
import SelectionAvatar from './SelectionAvatar';
import { AvatarData } from './SelectionAvatarGroup';

const SelectionAvatars = (props: any) => {
  const { avatarList, avatarStyle, tooltipPosition, size, avatarRenderer, setSelectedItems, selectedItems } = props;

  const GroupClass = classNames({
    [`SelectionAvatarGroup-item`]: true,
    [`SelectionAvatarGroup-item--tiny`]: size === 'tiny',
    [`SelectionAvatarGroup-item--regular`]: size === 'regular',
  });

  const avatars = avatarList.map((avatarItem: AvatarData, index: any) => {
    const { appearance, firstName, lastName, iconOptions, imgOptions, onSelect } = avatarItem;

    if (avatarRenderer) {
      return avatarRenderer(avatarItem);
    }

    const onClickHandler = (item: AvatarData) => {
      let list = selectedItems;

      if (selectedItems.includes(item)) {
        list = selectedItems.filter((selectedItem: AvatarData) => selectedItem !== item);
      } else {
        list.push(item);
      }

      console.log('vvvvonclick item', item, 'list', list);

      setSelectedItems(list);
      onSelect && onSelect(list);
    };

    return (
      <div
        key={index}
        tabIndex={0}
        role="checkbox"
        style={avatarStyle}
        className={GroupClass}
        data-test="DesignSystem-AvatarGroup--Avatar"
        aria-checked={selectedItems.includes(avatarItem)}
        onClick={() => onClickHandler(avatarItem)}
        onKeyDown={() => onClickHandler(avatarItem)}
      >
        <SelectionAvatar
          size={size}
          appearance={appearance}
          firstName={firstName}
          lastName={lastName}
          withTooltip={true}
          tooltipPosition={tooltipPosition}
          iconOptions={iconOptions}
          imgOptions={imgOptions}
        />
      </div>
    );
  });

  return avatars;
};

export default SelectionAvatars;
