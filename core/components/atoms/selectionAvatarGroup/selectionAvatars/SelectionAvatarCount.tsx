import * as React from 'react';
import { Text, Avatar } from '@/index';
import classNames from 'classnames';
import { AvatarData } from '../SelectionAvatarGroup';

const SelectionAvatarCount = (props: any) => {
  const { hiddenAvatarCount, avatarStyle, size, selectedItems, hiddenAvatarList, setOpenPopover } = props;

  const [selectedItemCount, setSelectedItemCount] = React.useState(0);

  const wrapperClassName = classNames({
    ['SelectionAvatarCount-wrapper']: true,
    ['SelectionAvatarCount--selected']: selectedItemCount > 0,
  });

  React.useEffect(() => {
    const results = hiddenAvatarList.filter((data1: AvatarData) =>
      selectedItems.some((data2: AvatarData) => data2 === data1)
    );
    setSelectedItemCount(results.length);
  }, [selectedItems]);

  const handleKeyDown = (event: React.KeyboardEvent) => {
    switch (event.key) {
      case 'Enter':
        setOpenPopover(true);
        break;
      case 'ArrowDown':
        setOpenPopover(true);
        break;
      case 'ArrowUp':
        setOpenPopover(true);
        break;
      default:
        break;
    }
  };

  return (
    <div
      data-test="DesignSystem-AvatarGroup--TriggerAvatar"
      className={wrapperClassName}
      onKeyDown={handleKeyDown}
      style={avatarStyle}
      tabIndex={0}
      role="button"
    >
      <Avatar size={size} appearance="secondary" className="SelectionAvatarCount">
        <Text className="overflow-hidden">{`+${hiddenAvatarCount}`}</Text>
      </Avatar>
    </div>
  );
};

export default SelectionAvatarCount;
