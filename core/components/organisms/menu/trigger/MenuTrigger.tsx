import React from 'react';
import { BaseProps } from '@/utils/types';
import { Button } from '@/index';
import MenuContext from '../MenuContext';
import classNames from 'classnames';
import { handleKeyDown } from './utils';
import styles from '@css/components/menu.module.css';

export interface MenuTriggerProps extends BaseProps {
  /**
   * Defines size of the `Trigger`
   */
  size?: 'tiny' | 'regular';
  /**
   * Defines appearance of the `Trigger`
   */
  appearance?: 'transparent' | 'basic';
}

export const MenuTrigger = (props: MenuTriggerProps) => {
  const { className } = props;
  const contextProp = React.useContext(MenuContext);
  const { openPopover, setOpenPopover, setHighlightFirstItem, setHighlightLastItem, menuTriggerRef } = contextProp;

  const triggerClassName = classNames(
    {
      [styles['Menu-Trigger--active']]: openPopover,
    },
    className
  );

  const onKeyDownHandler = (event: React.KeyboardEvent) => {
    handleKeyDown(event, setOpenPopover, setHighlightFirstItem, setHighlightLastItem);
  };

  return (
    <Button
      data-test="DesignSystem-Menu-Trigger"
      icon="more_horiz"
      ref={menuTriggerRef}
      aria-label="Open menu"
      aria-haspopup={true}
      aria-expanded={openPopover}
      {...props}
      className={triggerClassName}
      onKeyDown={onKeyDownHandler}
    />
  );
};

export default MenuTrigger;
