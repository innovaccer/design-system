import React from 'react';
import { BaseProps } from '@/utils/types';
import { Listbox } from '@/index';
import classNames from 'classnames';
import MenuContext from './MenuContext';
import { handleKeyDown } from './utils';

type ItemTagType = 'li' | 'div' | 'a';

export interface MenuItemProps extends BaseProps {
  tagType?: ItemTagType;
  onClick?: () => void;
  children: React.ReactNode;
}

export const MenuItem = (props: MenuItemProps) => {
  const { children, className, ...rest } = props;
  const contextProp = React.useContext(MenuContext);
  const {
    setOpenPopover,
    setHighlightFirstItem,
    setHighlightLastItem,
    focusedOption,
    setFocusedOption,
    menuTriggerRef,
    listRef,
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
      listRef
    );
  };

  return (
    <Listbox.Item
      data-test="DesignSystem-Menu-ListItem"
      className={MenuItemClassName}
      tabIndex={-1}
      onKeyDown={onKeyDownHandler}
      {...rest}
    >
      {children}
    </Listbox.Item>
  );
};

export default MenuItem;
