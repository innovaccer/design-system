import * as React from 'react';
import { Avatar } from '@/index';
import { AvatarSize } from '@/common.type';
import { AvatarProps, TooltipProps } from '@/index.type';

interface SelectionAvatarProps {
  size?: AvatarSize;
  appearance?: AvatarProps['appearance'];
  firstName?: string;
  lastName?: string;
  withTooltip?: boolean;
  icon?: React.ReactNode;
  image?: React.ReactNode;
  tooltipPosition?: TooltipProps['position'];
}

export const SelectionAvatar = (props: SelectionAvatarProps) => {
  const { icon, image, ...rest } = props;

  return (
    <Avatar role="checkbox" {...rest} withTooltip={true} className="cursor-pointer">
      {image || icon}
    </Avatar>
  );
};

export default SelectionAvatar;
