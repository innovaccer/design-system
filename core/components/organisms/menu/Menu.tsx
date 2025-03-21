import React from 'react';
import { BaseProps } from '@/utils/types';
import { Popover } from '@/index';
import { PopoverProps } from '@/index.type';
import { MenuGroup } from './MenuGroup';
import { MenuItem } from './MenuItem';
import { MenuList } from './MenuList';
import { MenuTrigger } from './trigger/MenuTrigger';
import SubMenu from './SubMenu';
import classNames from 'classnames';
import MenuContext from './MenuContext';
import { focusListItem } from './trigger/utils';
import SubMenuContext from './SubMenuContext';
import styles from '@css/components/menu.module.css';

export interface MenuProps extends BaseProps {
  /**
   * Element to be rendered inside `Menu`
   */
  children: React.ReactNode;
  /**
   * Controls open/close of `Menu`
   */
  open?: boolean;
  /**
   * Defines position of `Menu`
   */
  position: PopoverProps['position'];
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
  /**
   * Defines coordinates where you need to position a popover
   */
  triggerCoordinates?: {
    x: number;
    y: number;
  };
  /**
   * Callback after `Menu` is toggled
   */
  onToggle?: (open?: boolean) => void;
  /**
   * Disables the `Menu`
   */
  disabled?: boolean;
}

export const Menu = (props: MenuProps) => {
  const { children, width, minHeight, maxHeight, className, open, onToggle, ...rest } = props;
  const [openPopover, setOpenPopover] = React.useState(open);
  const [highlightFirstItem, setHighlightFirstItem] = React.useState<boolean>(false);
  const [highlightLastItem, setHighlightLastItem] = React.useState<boolean>(false);
  const [focusedOption, setFocusedOption] = React.useState<HTMLElement | undefined>();
  const listRef = React.createRef<HTMLDivElement>();
  const menuTriggerRef = React.useRef<HTMLButtonElement>(null);
  const subMenuContextProp = React.useContext(SubMenuContext);

  const { menuID } = subMenuContextProp;

  const popoverClassName = classNames(styles.Menu, className);

  React.useEffect(() => {
    setOpenPopover(open);
  }, [open]);

  React.useEffect(() => {
    if (highlightFirstItem && openPopover) {
      requestAnimationFrame(() => focusListItem('down', setFocusedOption, listRef));
    }
  }, [highlightFirstItem]);

  React.useEffect(() => {
    if (highlightLastItem && openPopover) {
      requestAnimationFrame(() => focusListItem('up', setFocusedOption, listRef));
    }
  }, [highlightLastItem]);

  React.useEffect(() => {
    if (!openPopover) {
      setHighlightFirstItem(false);
      setHighlightLastItem(false);
    }
    onToggle?.(openPopover);
  }, [openPopover]);

  const onToggleHandler = (open: boolean) => {
    setOpenPopover(open);
  };

  const contextProp = {
    openPopover,
    setOpenPopover,
    setHighlightFirstItem,
    setHighlightLastItem,
    focusedOption,
    setFocusedOption,
    menuTriggerRef,
    listRef,
  };

  return (
    <MenuContext.Provider value={contextProp}>
      <Popover
        data-test="DesignSystem-Menu"
        name={menuID}
        offset="medium"
        {...rest}
        open={openPopover}
        customStyle={{ width }}
        onToggle={onToggleHandler}
      >
        <div
          ref={listRef}
          role="menu"
          data-test={props['data-test'] || 'DesignSystem-Menu-Wrapper'}
          className={popoverClassName}
          style={{ maxHeight, minHeight }}
        >
          {children}
        </div>
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
  position: 'bottom-start',
};

export default Menu;
