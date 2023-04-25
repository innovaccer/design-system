import * as React from 'react';
import classNames from 'classnames';
import { Avatar } from '@/index';

const Avatars = (props: any) => {
  const { avatarList, avatarStyle, tooltipPosition, size } = props;

  const GroupClass = classNames({
    [`AvatarGroup-item--tiny`]: size === 'tiny',
    [`AvatarGroup-item`]: size === 'regular',
  });

  const avatars = avatarList.map((item: any, index: any) => {
    const { appearance, firstName, lastName } = item;
    return (
      <div data-test="DesignSystem-AvatarGroup--Avatar" className={GroupClass} style={avatarStyle} key={index}>
        <Avatar
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

export default Avatars;
