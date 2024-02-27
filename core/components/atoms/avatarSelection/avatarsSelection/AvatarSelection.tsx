import * as React from 'react';
import { Avatar } from '@/index';
import { AvatarSize } from '@/common.type';
import { AvatarProps, PopoverProps, AvatarIconProps, AvatarImageProps } from '@/index.type';

interface SelectionAvatarProps {
  size?: AvatarSize;
  appearance?: AvatarProps['appearance'];
  firstName?: string;
  lastName?: string;
  withTooltip?: boolean;
  iconOptions?: AvatarIconProps;
  imgOptions?: AvatarImageProps;
  tooltipPosition?: PopoverProps['position'];
}

export const SelectionAvatar = (props: SelectionAvatarProps) => {
  const { iconOptions, imgOptions, ...rest } = props;

  if (imgOptions || iconOptions) {
    return (
      <Avatar role="checkbox" {...rest}>
        {imgOptions && <Avatar.Image {...imgOptions} />}
        {iconOptions && <Avatar.Icon {...iconOptions} />}
      </Avatar>
    );
  }

  return <Avatar role="checkbox" {...rest} />;
};

export default SelectionAvatar;
