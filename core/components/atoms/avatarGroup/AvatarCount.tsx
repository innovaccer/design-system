import * as React from 'react';
import classNames from 'classnames';
import { Text } from '@/index';

const AvatarCount = (props: any) => {
  const { hiddenAvatarCount, avatarStyle, size, on } = props;

  const ContentClass = classNames({
    [`Avatar-content--secondary`]: true,
    [`Avatar-content--tiny`]: size === 'tiny',
  });

  const AvatarVariantsClass = classNames({
    Avatar: true,
    [`Avatar--regular`]: size === 'regular',
    [`Avatar--tiny`]: size === 'tiny',
    [`Avatar--secondary`]: true,
    ['cursor-default']: true,
    ['cursor-pointer']: on === 'click',
  });

  return (
    <div
      data-test="DesignSystem-AvatarGroup--TriggerAvatar"
      className="AvatarCount-wrapper"
      style={avatarStyle}
      tabIndex={0}
      role="button"
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
