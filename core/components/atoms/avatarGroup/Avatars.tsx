import * as React from 'react';
import classNames from 'classnames';
import { Avatar } from '@/index';
import styles from '@css/components/avatarGroup.module.css';

const Avatars = (props: any) => {
  const { avatarList, avatarStyle, tooltipPosition, size } = props;

  const GroupClass = classNames({
    [styles[`AvatarGroup-item`]]: true,
    [styles[`AvatarGroup-item--tiny`]]: size === 'tiny',
    [styles[`AvatarGroup-item--regular`]]: size === 'regular',
  });

  const avatars = avatarList.map((item: any, index: any) => {
    const { appearance, firstName, lastName, icon, image, disabled, tooltipSuffix } = item;

    const newAvatarStyle = { ...avatarStyle, zIndex: avatarList.length - index };

    return (
      <div data-test="DesignSystem-AvatarGroup--Avatar" className={GroupClass} style={newAvatarStyle} key={index}>
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
