import * as React from 'react';
import classNames from 'classnames';
import { Avatar } from '@/index';

const Avatars = (props: any) => {
  const { avatarList, avatarStyle, tooltipPosition, size } = props;

  const GroupClass = classNames({
    [`AvatarGroup-item`]: true,
    [`AvatarGroup-item--tiny`]: size === 'tiny',
    [`AvatarGroup-item--regular`]: size === 'regular',
  });

  const avatars = avatarList.map((item: any, index: any) => {
    const { appearance, firstName, lastName, icon, image, disabled, tooltipSuffix } = item;
    return (
      <div data-test="DesignSystem-AvatarGroup--Avatar" className={GroupClass} style={avatarStyle} key={index}>
        <Avatar
          size={size}
          appearance={appearance}
          firstName={firstName}
          lastName={lastName}
          withTooltip={true}
          disabled={disabled}
          tooltipPosition={tooltipPosition}
          tooltipSuffix={tooltipSuffix}
        >
          {image || icon}
        </Avatar>
      </div>
    );
  });
  return avatars;
};

export default Avatars;
