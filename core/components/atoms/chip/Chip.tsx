import * as React from 'react';
import GenericChip from '../_chip';
import classNames from 'classnames';
import { BaseProps, extractBaseProps } from '@/utils/types';

export type Type = 'action' | 'selection' | 'input';
export type Name = number | string;

export interface ChipProps extends BaseProps {
  /**
   * Label of chip
   */
  label: string;
  /**
   * Type of material `Icon`
   */
  icon?: string;
  /**
   * Shows the 'clear' icon if value is not empty
   */
  clearButton?: boolean;
  /**
   * Disables the Chip, making it unable to be pressed
   */
  disabled?: boolean;
  /**
   * Select the chip
   */
  selected?: boolean;
  /**
   * Type of chip
   */
  type: Type;
  /**
   * Handler to be called when Chip is closed
   */
  onClose?: (name: Name) => void;
  /**
   * Handler to be called when Chip is clicked
   */
  onClick?: (name: Name) => void;
  name: Name;
}

export const Chip = (props: ChipProps) => {
  const {
    label,
    icon,
    clearButton,
    type,
    disabled,
    selected,
    onClose,
    onClick,
    name,
    className,
  } = props;

  const baseProps = extractBaseProps(props);

  const onCloseHandler = () => {
    if (!disabled && onClose) onClose(name);
  };
  const onClickHandler = () => {
    if (!disabled && onClick) onClick(name);
  };

  const chipClass = classNames({
    Chip: true,
    [`Chip-${type}--disabled`]: disabled,
    [`Chip--${type}`]: type && !disabled,
    [`Chip-${type}--selected`]: selected && !disabled,
  }, className);

  const clearbutton = ((type === 'action') ? false : clearButton);
  const select = (((type === 'selection') && selected) ? true : false);

  return (
    <GenericChip
      {...baseProps}
      label={label}
      selected={select}
      icon={icon}
      clearButton={clearbutton}
      disabled={disabled}
      className={chipClass}
      onClose={onCloseHandler}
      onClick={onClickHandler}
      name={name}
    />
  );
};

Chip.displayName = 'Chip';
Chip.defaultProps = {
  type: 'input'
};

export default Chip;
