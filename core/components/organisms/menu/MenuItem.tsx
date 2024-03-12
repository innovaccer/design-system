import React from 'react';
import { BaseProps } from '@/utils/types';
import { Listbox, Popover } from '@/index';
import { SubMenu } from './SubMenu';

type ItemTagType = 'li' | 'div';

export interface MenuItemProps extends BaseProps {
  tagType?: ItemTagType;
  onClick?: () => void;
  children: React.ReactNode;
}

export const MenuItem = (props: MenuItemProps) => {
  const { children, ...rest } = props;

  const specificComponent = React.Children.toArray(children).find((child: any) => {
    return child.type === SubMenu;
  });

  const filteredChildren = React.Children.toArray(children).filter((child: any) => {
    return child.type !== SubMenu;
  });

  if (specificComponent) {
    return (
      <Popover
        on="hover"
        position="right"
        className="p-4"
        trigger={<Listbox.Item {...rest}>{filteredChildren}</Listbox.Item>}
      >
        <>{specificComponent}</>
      </Popover>
    );
  }
  return <Listbox.Item {...rest}>{children}</Listbox.Item>;
};

export default MenuItem;
