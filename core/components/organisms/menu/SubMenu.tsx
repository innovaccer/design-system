import React from 'react';
import MenuContext from './MenuContext';
import { handleKeyDown } from './utils';
import uidGenerator from '@/utils/uidGenerator';

export interface SubMenuProps {
  /**
   * Element to be rendered inside `SubMenu`
   * <br/>
   * First child will be consider as `trigger`,
   * <br />
   * whereas second children content will be displayed inside `SubMenu`
   */
  children: React.ReactElement;
}

export const SubMenu = (props: SubMenuProps) => {
  const { children } = props;
  const menuID = `DesignSystem-Menu--Popover-${uidGenerator()}`;

  const [submenuTrigger, submenuContent] = React.Children.toArray(children);
  const contextProp = React.useContext(MenuContext);
  const subListRef = React.useRef<HTMLDivElement>(null);
  const triggerRef = React.useRef();

  let subMenuElement = <></>;

  const {
    setOpenPopover,
    setHighlightFirstItem,
    setHighlightLastItem,
    focusedOption,
    setFocusedOption,
    menuTriggerRef,
    listRef,
  } = contextProp;

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
      subListRef,
      true,
      triggerRef,
      menuID
    );
  };

  const triggerElement = React.cloneElement(submenuTrigger as React.ReactElement, {
    ...(submenuTrigger as React.ReactElement)?.props,
    onKeyDown: onKeyDownHandler,
    ref: triggerRef,
  });

  if (React.isValidElement(submenuContent)) {
    const { on, children } = submenuContent?.props;
    subMenuElement = React.cloneElement(submenuContent as React.ReactElement, {
      ...submenuContent.props,
      on: on || 'hover',
      offset: 'small',
      children: <div ref={subListRef}>{children}</div>,
      trigger: triggerElement,
      triggerRef,
      menuID,
    });
  }

  return subMenuElement;
};

export default SubMenu;
