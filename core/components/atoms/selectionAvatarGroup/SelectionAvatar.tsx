import * as React from 'react';
import classNames from 'classnames';
import { Avatar } from '@/index';

const SelectionAvatar = (props: any) => {
  console.log('ffffprops', props);
  // const { size, appearance, firstName, lastName, withTooltip, tooltipPosition, } = props;
  const { iconOptions, imgOptions, ...rest } = props;

  const avatarClassName = classNames({
    ['Selection-Avatar']: true,
  });

  if (imgOptions || iconOptions) {
    return (
      <Avatar className={avatarClassName} role="checkbox" {...rest}>
        {imgOptions && <Avatar.Image {...imgOptions} />}
        {iconOptions && <Avatar.Icon {...iconOptions} />}
      </Avatar>
    );
  }

  return <Avatar className={avatarClassName} role="checkbox" {...rest} />;
};

export default SelectionAvatar;
