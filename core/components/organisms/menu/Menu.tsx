import React from 'react';
import { BaseProps } from '@/utils/types';
import { Popover } from '@/index';
import { PopoverProps } from '@/index.type';
import { MenuGroup } from './MenuGroup';
import { MenuItem } from './MenuItem';
import { MenuList } from './MenuList';
import { MenuTrigger } from './MenuTrigger';
import SubMenu from './SubMenu';
import classNames from 'classnames';
import MenuContext from './MenuContext';

export interface MenuProps extends BaseProps {
  /**
   * Element to be rendered inside `Menu`
   */
  children: React.ReactNode;
  /**
   * Controls open/close of `Menu`
   */
  open: boolean;
  /**
   * Defines position of `Menu`
   */
  popoverPosition: PopoverProps['position'];
  /**
   * Defines trigger for the `Menu`
   */
  trigger?: React.ReactElement;
  /**
   * Specifies max height of `Menu`
   */
  maxHeight?: number;
  /**
   * Specifies min height of `Menu`
   */
  minHeight?: number;
  /**
   * Specifies width of `Menu`
   */
  width?: number;
}

export const Menu = (props: MenuProps) => {
  const { children, width, minHeight, maxHeight, className, open } = props;
  const [openPopover, setOpenPopover] = React.useState(open);

  const popoverClassName = classNames(
    {
      'overflow-auto': true,
    },
    className
  );

  const onToggleHandler = (open: boolean) => {
    setOpenPopover(open);
  };

  const contextProp = {
    openPopover,
  };

  return (
    <MenuContext.Provider value={contextProp}>
      <Popover
        data-test="DesignSystem-Menu"
        {...props}
        open={openPopover}
        customStyle={{ width, minHeight, maxHeight }}
        className={popoverClassName}
        onToggle={onToggleHandler}
      >
        {children}
      </Popover>
    </MenuContext.Provider>
  );
};

Menu.Group = MenuGroup;
Menu.Item = MenuItem;
Menu.List = MenuList;
Menu.Trigger = MenuTrigger;
Menu.SubMenu = SubMenu;

Menu.defaultProps = {
  width: 176,
  maxHeight: 256,
};

export default Menu;
