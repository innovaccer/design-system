import * as React from 'react';
import classNames from 'classnames';
import { Text } from '@/index';

const AvatarCount = (props: any) => {
  const { hiddenAvatarCount, avatarStyle, size } = props;

  const ContentClass = classNames({
    [`Avatar-content--secondary`]: true,
    [`Avatar-content--tiny`]: size === 'tiny',
  });

  const AvatarVariantsClass = classNames({
    Avatar: true,
    [`Avatar--regular`]: size === 'regular',
    [`Avatar--tiny`]: size === 'tiny',
    [`Avatar--secondary`]: true,
    ['Avatar--disabled']: true,
  });

  return (
    <div data-test="DesignSystem-AvatarGroup--TriggerAvatar" style={avatarStyle}>
      <span className={AvatarVariantsClass}>
        <Text appearance={'white'} className={ContentClass}>
          {`+${hiddenAvatarCount}`}
        </Text>
      </span>
    </div>
  );
};

export default AvatarCount;
