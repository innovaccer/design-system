import * as React from 'react';
import GenericChip from '../_chip';
import classNames from 'classnames';
export type Type = 'Action' | 'Selection' | 'Input';
export interface ChipProps {
  label: string;
  icon?: string;
  clearbutton?: boolean;
  disabled?: boolean;
  selected?: boolean;
  type?: Type;
  onClose?: (name: any) => void;
  onClick?: (name: any) => void;

  name?: string;
}
export const Chip = (props: ChipProps) => {
  const {
    label = 'Selection',
    icon,
    clearbutton,
    type,
    disabled,
    selected,
    onClose,
    onClick,

  } = props;
  const onCloseHandler = () => {
    if (onClose) onClose(name);
  };
  const onClickHandler = () => {
    if (onClick) onClick(name);
  };

  const chipClass = classNames({
    [`Chip--disabled--${type}`]: disabled,
    [`Chip--${type}`]: type && !disabled,
    Chip: true,
    [`Chip--${type}--selected`]: selected && !disabled,

  });
  const clearButton = ((type === 'Action') ? false : clearbutton);
  const select = (((type === 'Selection') && selected) ? true : false);
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
      />
    </div>
  );
};
Chip.displayName = 'Chip';
export default Chip;
