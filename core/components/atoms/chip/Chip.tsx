import * as React from 'react';
import GenericChip from '../_chip';
import classNames from 'classnames';
export type Type = 'action' | 'selection' | 'input';
export type Name = number | string;
export interface ChipProps {
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
   * @default "input"
   */
  type?: Type;
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
    label = '',
    icon,
    clearButton,
    type = 'input',
    disabled,
    selected,
    onClose,
    onClick,
    name,
  } = props;

  const onCloseHandler = () => {
    if (onClose) onClose(name);
  };
  const onClickHandler = () => {
    if (onClick) onClick(name);
  };

  const chipClass = classNames({
    [`Chip-${type}--disabled`]: disabled,
    [`Chip--${type}`]: type && !disabled,
    Chip: true,
    [`Chip-${type}--selected`]: selected && !disabled,

  });
  const clearbutton = ((type === 'action') ? false : clearButton);
  const select = (((type === 'selection') && selected) ? true : false);
  return (
    <div>
      <GenericChip
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
    </div>
  );
};
Chip.displayName = 'Chip';
export default Chip;
