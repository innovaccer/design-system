import React from 'react';
// import { Icon } from '@/index';
import MenuContext from './MenuContext';
import { handleKeyDown } from './utils';

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

  const [submenuTrigger, submenuContent] = React.Children.toArray(children);
  const contextProp = React.useContext(MenuContext);
  const isSubMenuTrigger = true;
  const subListRef = React.useRef();
  const triggerRef = React.useRef();

  const {
    setOpenPopover,
    setHighlightFirstItem,
    setHighlightLastItem,
    focusedOption,
    setFocusedOption,
    menuTriggerRef,
    listRef,
  } = contextProp;

  let subMenuElement = <></>;
  // const menuTrigger = (
  //   <div className="d-flex align-items-center justify-content-between w-100">
  //     {submenuTrigger}
  //     <Icon name="chevron_right" />
  //   </div>
  // );

  const onKeyDownHandler = (event: React.KeyboardEvent) => {
    console.log('ddddclonedTriggerElement', clonedTriggerElement);
    handleKeyDown(
      event,
      focusedOption,
      setFocusedOption,
      setOpenPopover,
      menuTriggerRef,
      setHighlightFirstItem,
      setHighlightLastItem,
      listRef,
      isSubMenuTrigger,
      subListRef,
      null,
      clonedTriggerElement
    );
  };

  const clonedTriggerElement = React.cloneElement(submenuTrigger as React.ReactElement, {
    ...submenuTrigger.props,
    onKeyDown: onKeyDownHandler,
    // children: (
    //   <div ref={triggerRef} tabIndex={0}>
    //     {submenuTrigger.props.children}
    //   </div>
    // ),
    // 'data-subMenu': true,
  });

  // console.log('itemm prop aa', submenuTrigger.props);

  if (React.isValidElement(submenuContent)) {
    subMenuElement = React.cloneElement(submenuContent as React.ReactElement, {
      ...submenuContent.props,
      // trigger: (
      //   <div onKeyDown={onKeyDownHandler} role="tablist" id="my trigger" className="Menu-Item">
      //     {submenuTrigger}
      //   </div>
      // ),
      // trigger: clonedTriggerElement,
      // trigger: menuTrigger,
      trigger: submenuTrigger,
      on: submenuContent?.props?.on || 'hover',
      offset: 'small',
      triggerRef,
      children: <div ref={subListRef}>{submenuContent.props.children}</div>,
    });
  }

  return <>{subMenuElement}</>;
};

export default SubMenu;
