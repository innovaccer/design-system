import * as React from 'react';
import GenericChip from '../_chip';
import classNames from 'classnames';
export type Type = 'action' | 'selection' | 'input';
export type Name = number | string;
export interface ChipProps {
  label: string;
  icon?: string;
  clearbutton?: boolean;
  disabled?: boolean;
  selected?: boolean;
  type?: Type;
  onClose?: (name: Name) => void;
  onClick?: (name: Name) => void;
  name: Name;
}
export const Chip = (props: ChipProps) => {
  const {
    label = '',
    icon,
    clearbutton,
    type,
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
  const clearButton = ((type === 'action') ? false : clearbutton);
  const select = (((type === 'selection') && selected) ? true : false);
  return (
    <div>
      <GenericChip
        label={label}
        selected={select}
        icon={icon}
        clearbutton={clearButton}
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
