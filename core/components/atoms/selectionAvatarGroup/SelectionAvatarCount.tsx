import * as React from 'react';
import { Text, Avatar } from '@/index';
import classNames from 'classnames';

const SelectionAvatarCount = (props: any) => {
  const { hiddenAvatarCount, avatarStyle, size, selectedItems } = props;

  const wrapperClassName = classNames({
    ['SelectionAvatarCount-wrapper']: true,
    ['SelectionAvatarCount--selected']: selectedItems.length > 0,
  });

  return (
    <div
      data-test="DesignSystem-AvatarGroup--TriggerAvatar"
      className={wrapperClassName}
      style={avatarStyle}
      tabIndex={0}
      role="button"
    >
      <Avatar size={size} appearance="secondary" className="SelectionAvatarCount">
        <Text>{`+${hiddenAvatarCount}`}</Text>
      </Avatar>
    </div>
  );
};

export default SelectionAvatarCount;
