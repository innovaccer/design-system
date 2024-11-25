import * as React from 'react';
import classNames from 'classnames';
import { Text } from '@/index';
import styles from '@css/components/avatar.module.css';
import avatarGroupStyles from '@css/components/avatarGroup.module.css';

const AvatarCount = (props: any) => {
  const { hiddenAvatarCount, avatarStyle, size, on } = props;

  const ContentClass = classNames({
    [styles['Avatar-content']]: true,
    [styles['Avatar-content--tiny']]: size === 'tiny',
  });

  const AvatarVariantsClass = classNames({
    [styles.Avatar]: true,
    [styles[`Avatar--regular`]]: size === 'regular',
    [styles[`Avatar--tiny`]]: size === 'tiny',
    [styles[`Avatar--secondary`]]: true,
    ['cursor-default']: true,
    ['cursor-pointer']: on === 'click',
  });

  return (
    <div
      data-test="DesignSystem-AvatarGroup--TriggerAvatar"
      className={avatarGroupStyles['AvatarCount-wrapper']}
      style={avatarStyle}
      tabIndex={0}
      role="button"
    >
      <span data-test="DesignSystem-AvatarGroup--TriggerAvatarVariants" className={AvatarVariantsClass}>
        <Text className={ContentClass}>{`+${hiddenAvatarCount}`}</Text>
      </span>
    </div>
  );
};

export default AvatarCount;
