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
  // ref?: any;
  /**
   * Set as `true` if Item is used as subMenu trigger
   */
  isSubMenuTrigger?: boolean;
  /**
   * Specify `name` of the `SubMenu`
   */
  targetMenu?: string;
  /**
   * Specify `name` of the `Menu Item`
   */
  name?: string;
}

// export const MenuItem = (props: MenuItemProps) => {
export const MenuItem = React.forwardRef<any, any>((props, ref) => {
  const { children, className, name, isSubMenuTrigger, ...rest } = props;
  const contextProp = React.useContext(MenuContext);
  // const isSubMenuTrigger = false;
  // const subListRef = null;

  // console.log('itemm prop', props);

  const {
    setOpenPopover,
    setHighlightFirstItem,
    setHighlightLastItem,
    focusedOption,
    setFocusedOption,
    menuTriggerRef,
    listRef,
    triggerRef,
  } = contextProp;

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
      triggerRef
      // subListRef,
      // triggerRef
    );
  };

  return (
    <Listbox.Item
      data-test="DesignSystem-Menu-ListItem"
      className={MenuItemClassName}
      tabIndex={-1}
      // tabIndex={0}
      onKeyDown={onKeyDownHandler}
      data-name={name}
      ref={ref}
      {...rest}
    >
      {children}
    </Listbox.Item>
  );
});

MenuItem.displayName = 'MenuItem';

export default MenuItem;
