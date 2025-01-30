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
    const { icon, image } = item;

    const newAvatarStyle = { ...avatarStyle, zIndex: avatarList.length - index };

    return (
      <div data-test="DesignSystem-AvatarGroup--Avatar" className={GroupClass} style={newAvatarStyle} key={index}>
        <Avatar size={size} withTooltip={true} tooltipPosition={tooltipPosition} {...item}>
          {image || icon}
        </Avatar>
      </div>
    );
  });
  return avatars;
};

export default Avatars;
