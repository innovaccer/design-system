import React from 'react';
import { BaseProps } from '@/utils/types';
import { Popover } from '@/index';
import { MenuGroup } from './MenuGroup';
import { MenuItem } from './MenuItem';
import { MenuList } from './MenuList';
import { MenuTrigger } from './MenuTrigger';

export interface MenuProps extends BaseProps {
  children: React.ReactNode;
  open: boolean;
  popoverPosition: any;
  trigger?: React.ReactElement;
}

export const Menu = (props: MenuProps) => {
  const { open, trigger, children } = props;
  return (
    <Popover open={open} trigger={trigger}>
      {children}
    </Popover>
  );
};

Menu.Group = MenuGroup;
Menu.Item = MenuItem;
Menu.List = MenuList;
Menu.Trigger = MenuTrigger;

export default Menu;
