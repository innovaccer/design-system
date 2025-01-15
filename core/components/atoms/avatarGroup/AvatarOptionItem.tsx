import * as React from 'react';
import { Text, Avatar, Tooltip, Listbox } from '@/index';
import { AvatarData } from './AvatarGroup';
import classNames from 'classnames';

interface AvatarOptionItemProps {
  avatarData: AvatarData;
}

const AvatarOptionItem = (props: AvatarOptionItemProps) => {
  const { firstName = '', lastName = '', tooltipSuffix = '', disabled, image, icon, ...rest } = props.avatarData;
  const name = `${firstName} ${lastName} ${tooltipSuffix}`;
  const elementRef = React.useRef(null);

  const triggerClassName = classNames({
    ['cursor-not-allowed']: disabled,
  });

  const itemClassName = classNames({
    ['AvatarGroup-listItem--disabled']: disabled,
    ['cursor-default']: !disabled,
  });

  return (
    <Tooltip showOnTruncation={true} tooltip={name} elementRef={elementRef} triggerClass={triggerClassName}>
      <Listbox.Item
        disabled={disabled}
        className={itemClassName}
        tagName="li"
        data-test="DesignSystem-AvatarGroup--Item"
      >
        <Avatar firstName={firstName} lastName={lastName} className="mr-4" withTooltip={false} {...rest}>
          {image || icon}
        </Avatar>
        <Text ref={elementRef} data-test="DesignSystem-AvatarGroup--Text" className="ellipsis--noWrap">
          {name}
        </Text>
      </Listbox.Item>
    </Tooltip>
  );
};

export default AvatarOptionItem;
