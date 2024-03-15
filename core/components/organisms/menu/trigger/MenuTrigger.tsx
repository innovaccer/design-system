import React from 'react';
import { BaseProps } from '@/utils/types';
import { Button } from '@/index';
import MenuContext from '../MenuContext';
import classNames from 'classnames';
import { handleKeyDown } from './utils';

export interface MenuTriggerProps extends BaseProps {
  /**
   * Defines size of the `Trigger`
   */
  size?: 'tiny' | 'regular';
}

export const MenuTrigger = (props: MenuTriggerProps) => {
  const { className } = props;
  const contextProp = React.useContext(MenuContext);
  const { openPopover, setOpenPopover, setHighlightFirstItem, setHighlightLastItem } = contextProp;

  const triggerClassName = classNames(
    {
      'Menu-Trigger--active': openPopover,
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
      {...props}
      className={triggerClassName}
      onKeyDown={onKeyDownHandler}
    />
  );
};

export default MenuTrigger;
