import * as React from 'react';
import classNames from 'classnames';
import { SelectionAvatar } from './SelectionAvatar';

export const SelectionAvatars = (props: any) => {
  const { avatarList, avatarStyle, tooltipPosition, size } = props;

  const GroupClass = classNames({
    [`SelectionAvatarGroup-item`]: true,
    [`SelectionAvatarGroup-item--tiny`]: size === 'tiny',
    [`SelectionAvatarGroup-item--regular`]: size === 'regular',
  });

  const avatars = avatarList.map((item: any, index: any) => {
    const { appearance, firstName, lastName } = item;
    return (
      <div
        data-test="DesignSystem-AvatarGroup--Avatar"
        // tabIndex={0}
        // role="button"
        className={GroupClass}
        style={avatarStyle}
        key={index}
      >
        <SelectionAvatar
          size={size}
          appearance={appearance}
          firstName={firstName}
          lastName={lastName}
          withTooltip={true}
          tooltipPosition={tooltipPosition}
        />
      </div>
    );
  });
  return avatars;
};

export default SelectionAvatars;
