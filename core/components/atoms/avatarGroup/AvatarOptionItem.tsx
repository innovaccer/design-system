import * as React from 'react';
import { Text, Avatar, Tooltip, Listbox } from '@/index';
import { AvatarData } from './AvatarGroup';
import classNames from 'classnames';

interface AvatarOptionItemProps {
  avatarData: AvatarData;
}

const AvatarOptionItem = (props: AvatarOptionItemProps) => {
  const { avatarData } = props;
  const { firstName = '', lastName = '', tooltipSuffix = '', disabled, image, icon } = avatarData;
  const name = `${firstName} ${lastName} ${tooltipSuffix}`;
  const elementRef = React.useRef<HTMLElement>(null);

  const triggerClassName = classNames({
    ['cursor-not-allowed']: disabled,
    ['ellipsis--noWrap']: true,
  });

  const itemClassName = classNames({
    ['AvatarGroup-listItem--disabled']: disabled,
    ['cursor-default']: !disabled,
  });

  return (
    <Listbox.Item disabled={disabled} className={itemClassName} tagName="li" data-test="DesignSystem-AvatarGroup--Item">
      <Avatar {...avatarData} withTooltip={false}>
        {image || icon}
      </Avatar>
      <Tooltip showOnTruncation={true} tooltip={name} elementRef={elementRef} triggerClass={triggerClassName}>
        <Text ref={elementRef} data-test="DesignSystem-AvatarGroup--Text" className="ellipsis--noWrap ml-4">
          {name}
        </Text>
      </Tooltip>
    </Listbox.Item>
  );
};

export default AvatarOptionItem;
