import * as React from 'react';
import classNames from 'classnames';
import { Avatar } from '@/index';
import styles from './avatarGroup.module.css';

const Avatars = (props: any) => {
  const { avatarList, avatarStyle, tooltipPosition, size } = props;

  const GroupClass = classNames({
    [styles['AvatarGroup-item']]: true,
    [styles['AvatarGroup-item--tiny']]: size === 'tiny',
    [styles['AvatarGroup-item--regular']]: size === 'regular',
  });

  const avatars = avatarList.map((item: any, index: any) => {
    const { appearance, firstName, lastName, icon, image } = item;
    return (
      <div data-test="DesignSystem-AvatarGroup--Avatar" className={GroupClass} style={avatarStyle} key={index}>
        <Avatar
          size={size}
          appearance={appearance}
          firstName={firstName}
          lastName={lastName}
          withTooltip={true}
          tooltipPosition={tooltipPosition}
        >
          {image || icon}
        </Avatar>
      </div>
    );
  });
  return avatars;
};

export default Avatars;
