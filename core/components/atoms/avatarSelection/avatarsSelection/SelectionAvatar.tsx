import * as React from 'react';
import { Avatar } from '@/index';
import { AvatarSize } from '@/common.type';
import { AvatarProps, TooltipProps } from '@/index.type';
import classNames from 'classnames';

interface SelectionAvatarProps {
  size?: AvatarSize;
  appearance?: AvatarProps['appearance'];
  firstName?: string;
  lastName?: string;
  withTooltip?: boolean;
  icon?: React.ReactNode;
  image?: React.ReactNode;
  tooltipPosition?: TooltipProps['position'];
  disabled?: boolean;
  tooltipSuffix?: string;
}

export const SelectionAvatar = (props: SelectionAvatarProps) => {
  const { icon, image, disabled, ...rest } = props;

  const avatarClassName = classNames({
    ['cursor-pointer']: !disabled,
  });

  return (
    <Avatar role="checkbox" {...rest} disabled={disabled} withTooltip={true} className={avatarClassName}>
      {image || icon}
    </Avatar>
  );
};

export default SelectionAvatar;
