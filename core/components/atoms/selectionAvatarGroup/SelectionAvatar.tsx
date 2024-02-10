import * as React from 'react';
import classNames from 'classnames';
import { Avatar } from '@/index';

const SelectionAvatar = (props: any) => {
  console.log('props', props);

  const avatarClassName = classNames({
    ['Selection-Avatar']: true,
  });

  return <Avatar className={avatarClassName} firstName="anu" lastName="aggarwal" />;
};

export default SelectionAvatar;
