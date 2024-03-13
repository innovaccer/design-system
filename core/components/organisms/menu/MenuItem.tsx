import React from 'react';
import { BaseProps } from '@/utils/types';
import { Listbox, Popover } from '@/index';
import { SubMenu } from './SubMenu';
import classNames from 'classnames';

type ItemTagType = 'li' | 'div';

export interface MenuItemProps extends BaseProps {
  tagType?: ItemTagType;
  onClick?: () => void;
  children: React.ReactNode;
}

export const MenuItem = (props: MenuItemProps) => {
  const { children, className, ...rest } = props;

  const listboxClassName = classNames(
    {
      'Menu-Item': true,
    },
    className
  );

  // const specificComponent = React.Children.toArray(children).find((child: any) => {
  //   return child.type === SubMenu;
  // });

  // const filteredChildren = React.Children.toArray(children).filter((child: any) => {
  //   return child.type !== SubMenu;
  // });

  const [submenuContent, submenuTrigger] = React.Children.toArray(children);

  if ((submenuContent as React.ReactElement)?.type === SubMenu) {
    return (
      <Popover
        on="hover"
        position="right"
        className="p-4"
        trigger={
          <Listbox.Item className={listboxClassName} {...rest}>
            {submenuTrigger}
          </Listbox.Item>
        }
      >
        <>{submenuContent}</>
      </Popover>
    );
  }

  return (
    <Listbox.Item className={listboxClassName} {...rest}>
      {children}
    </Listbox.Item>
  );
};

export default MenuItem;
