import React from 'react';
import { BaseProps } from '@/utils/types';
import { Listbox } from '@/index';
import classNames from 'classnames';
import MenuContext from './MenuContext';
import { handleKeyDown } from './utils';

type ItemTagType = 'li' | 'div' | 'a';

export interface MenuItemProps extends BaseProps {
  /**
   * Set a custom element for `Menu List Item`
   */
  tagType?: ItemTagType;
  /**
   * Handler to be called when `Menu List Item` is clicked
   */
  onClick?: () => void;
  /**
   * React Element to be added inside `Menu List Item`
   */
  children: React.ReactNode;
}

export const MenuItem = React.forwardRef<HTMLDivElement, MenuItemProps>((props, ref) => {
  const { children, className, ...rest } = props;
  const contextProp = React.useContext(MenuContext);
  const isSubMenuTrigger = false;

  const {
    setOpenPopover,
    setHighlightFirstItem,
    setHighlightLastItem,
    focusedOption,
    setFocusedOption,
    menuTriggerRef,
    listRef,
    triggerRef,
    // menuPlacement,
    menuID,
  } = contextProp;

  // console.log('mmnnn menuPlacement', menuPlacement);

  const MenuItemClassName = classNames(
    {
      'Menu-Item': true,
    },
    className
  );

  const onKeyDownHandler = (event: React.KeyboardEvent) => {
    handleKeyDown(
      event,
      focusedOption,
      setFocusedOption,
      setOpenPopover,
      menuTriggerRef,
      setHighlightFirstItem,
      setHighlightLastItem,
      listRef,
      null,
      isSubMenuTrigger,
      triggerRef,
      menuID
    );
  };

  return (
    <Listbox.Item
      data-test="DesignSystem-Menu-ListItem"
      className={MenuItemClassName}
      tabIndex={-1}
      onKeyDown={onKeyDownHandler}
      ref={ref}
      {...rest}
    >
      {children}
    </Listbox.Item>
  );
});

MenuItem.displayName = 'MenuItem';

export default MenuItem;
