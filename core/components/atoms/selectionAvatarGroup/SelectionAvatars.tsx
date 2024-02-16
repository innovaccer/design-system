import * as React from 'react';
import classNames from 'classnames';
import SelectionAvatar from './SelectionAvatar';
import { AvatarData } from './SelectionAvatarGroup';

const SelectionAvatars = (props: any) => {
  const { avatarList, avatarStyle, tooltipPosition, size, avatarRenderer, setSelectedItems, selectedItems, onSelect } =
    props;

  const onClickHandler = (item: AvatarData) => {
    let list = selectedItems;
    if (selectedItems.includes(item)) {
      list = selectedItems.filter((selectedItem: AvatarData) => selectedItem !== item);
    } else {
      list.push(item);
    }
    setSelectedItems([...list]);

    onSelect && onSelect(list);
  };

  const handleKeyDown = (event: React.KeyboardEvent, item: AvatarData) => {
    switch (event.key) {
      case 'Enter':
        onClickHandler(item);
        break;
      default:
        break;
    }
  };

  return (
    <>
      {avatarList.map((avatarItem: AvatarData, index: any) => {
        const { appearance, firstName, lastName, iconOptions, imgOptions } = avatarItem;
        const GroupClass = classNames({
          [`SelectionAvatarGroup-item`]: true,
          [`SelectionAvatarGroup-item--selected`]: selectedItems.includes(avatarItem),
        });

        if (avatarRenderer) {
          return avatarRenderer(avatarItem);
        }

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
            onKeyDown={(event: React.KeyboardEvent) => handleKeyDown(event, avatarItem)}
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
      })}
    </>
  );
};

export default SelectionAvatars;
