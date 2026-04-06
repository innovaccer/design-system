import * as React from 'react';
import classNames from 'classnames';
import { Text } from '@/index';
import styles from '@css/components/avatar.module.css';
import avatarGroupStyles from '@css/components/avatarGroup.module.css';

const AvatarCount = React.forwardRef<HTMLDivElement, any>((props, ref) => {
  const { hiddenAvatarCount, avatarStyle, size = 'regular', on, isOpen, tabIndex = 0, onKeyboardOpen, ...rest } = props;

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

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter' || e.key === ' ' || e.key === 'ArrowDown' || e.key === 'ArrowRight') {
      e.preventDefault();
      e.stopPropagation();
      if (!isOpen) {
        e.currentTarget.click();
      }

      if (onKeyboardOpen) {
        onKeyboardOpen();
      }
    }
  };

  const wrapperClass = classNames(avatarGroupStyles['AvatarCount-wrapper'], {
    [avatarGroupStyles['AvatarCount-wrapper--click']]: on === 'click',
    [avatarGroupStyles['AvatarCount-wrapper--open']]: on === 'click' && isOpen,
  });

  return (
    <div
      {...rest}
      ref={ref}
      data-test="DesignSystem-AvatarGroup--TriggerAvatar"
      className={wrapperClass}
      style={avatarStyle}
      tabIndex={tabIndex}
      role="button"
      aria-haspopup="dialog"
      aria-expanded={isOpen}
      onKeyDown={handleKeyDown}
    >
      <span data-test="DesignSystem-AvatarGroup--TriggerAvatarVariants" className={AvatarVariantsClass}>
        <Text className={ContentClass}>{`+${hiddenAvatarCount}`}</Text>
      </span>
    </div>
  );
});

AvatarCount.displayName = 'AvatarCount';

export default AvatarCount;
