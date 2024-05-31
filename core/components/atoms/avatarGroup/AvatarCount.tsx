import * as React from 'react';
import classNames from 'classnames';
import { Text } from '@/index';
import styles from './avatarGroup.module.css';

const AvatarCount = (props: any) => {
  const { hiddenAvatarCount, avatarStyle, size, on } = props;

  const ContentClass = classNames({
    [styles['Avatar-content--secondary']]: true,
    [styles['Avatar-content--tiny']]: size === 'tiny',
  });

  const AvatarVariantsClass = classNames({
    [styles.Avatar]: true,
    [styles['Avatar--regular']]: size === 'regular',
    [styles['Avatar--tiny']]: size === 'tiny',
    [styles['Avatar--secondary']]: true,
    [styles['Avatar--disabled']]: true,
    [styles['cursor-pointer']]: on === 'click',
  });

  return (
    <div
      data-test="DesignSystem-AvatarGroup--TriggerAvatar"
      className={styles['AvatarCount-wrapper']}
      style={avatarStyle}
    >
      <span data-test="DesignSystem-AvatarGroup--TriggerAvatarVariants" className={AvatarVariantsClass}>
        <Text appearance={'white'} className={ContentClass}>
          {`+${hiddenAvatarCount}`}
        </Text>
      </span>
    </div>
  );
};

export default AvatarCount;
