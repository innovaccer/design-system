import * as React from 'react';
import classNames from 'classnames';
import { Text } from '@/index';
import isSpaceKey from '@/accessibility/utils/isSpaceKey';
import styles from '@css/components/avatar.module.css';
import avatarGroupStyles from '@css/components/avatarGroup.module.css';

const AvatarCount = (props: any) => {
  const { hiddenAvatarCount, avatarStyle, size = 'regular', on, open, moreAvatarsLabel } = props;

  const ContentClass = classNames({
    [styles['Avatar-content']]: true,
    [styles['Avatar-content--tiny']]: size === 'tiny',
    [styles['Avatar-content--micro']]: size === 'micro',
  });

  const AvatarVariantsClass = classNames({
    [styles.Avatar]: true,
    [styles[`Avatar--${size}`]]: size,
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
      aria-haspopup="listbox"
      aria-expanded={open}
      aria-label={`+${hiddenAvatarCount} ${moreAvatarsLabel}`}
      onKeyDown={(event: React.KeyboardEvent<HTMLDivElement>) => {
        if (event.key === 'Enter' || isSpaceKey(event)) {
          event.preventDefault();
          event.currentTarget.click();
        }
      }}
    >
      <span data-test="DesignSystem-AvatarGroup--TriggerAvatarVariants" className={AvatarVariantsClass}>
        <Text className={ContentClass}>{`+${hiddenAvatarCount}`}</Text>
      </span>
    </div>
  );
};

export default AvatarCount;
