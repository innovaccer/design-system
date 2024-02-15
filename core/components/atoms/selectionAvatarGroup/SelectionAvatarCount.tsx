import * as React from 'react';
import { Text, Avatar } from '@/index';

const SelectionAvatarCount = (props: any) => {
  const { hiddenAvatarCount, avatarStyle, size } = props;

  return (
    <div
      data-test="DesignSystem-AvatarGroup--TriggerAvatar"
      className="SelectionAvatarCount-wrapper"
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
