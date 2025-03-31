import * as React from 'react';
import GenericChip from '../_chip';
import classNames from 'classnames';
import { BaseProps, extractBaseProps } from '@/utils/types';
import { IconType } from '@/common.type';
import styles from '@css/components/chip.module.css';

export type ChipType = 'action' | 'selection' | 'input';
export type Name = number | string | object;

export interface ChipProps extends BaseProps {
  /**
   * Label of chip
   */
  label: string | React.ReactElement;
  /**
   * Adds Prefix for label
   */
  labelPrefix?: string;
  /**
   * Type of material `Icon`
   */
  icon?: string;
  /**
   * Set type of Icon
   */
  iconType?: IconType;
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
  type: ChipType;
  /**
   * Handler to be called when Chip is closed
   */
  onClose?: (name: Name) => void;
  /**
   * Handler to be called when Chip is clicked
   */
  onClick?: (name: Name) => void;
  /**
   * Name of chip
   */
  name: Name;
  /**
   * Maximum width of the chip
   */
  maxWidth?: string | number;
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
    labelPrefix,
    iconType,
    maxWidth,
  } = props;

  const baseProps = extractBaseProps(props);

  const onCloseHandler = () => {
    if (!disabled && onClose) onClose(name);
  };
  const onClickHandler = () => {
    if (!disabled && onClick) onClick(name);
  };

  const clearbutton = type === 'action' ? false : clearButton;
  const select = type === 'selection' && selected ? true : false;

  const chipClass = classNames(
    {
      [styles.Chip]: true,
      [styles[`Chip-${type}--disabled`]]: disabled,
      [styles[`Chip--${type}`]]: type && !disabled,
      [styles[`Chip-${type}--selected`]]: selected && !disabled,
      [styles[`Chip-selection--selectedDisabled`]]: type === 'selection' && selected && disabled,
      [styles['Chip-icon--clear']]: clearbutton,
    },
    className
  );

  return (
    <GenericChip
      data-test="DesignSystem-Chip--GenericChip"
      {...baseProps}
      label={label}
      selected={select}
      icon={icon}
      iconType={iconType}
      clearButton={clearbutton}
      disabled={disabled}
      className={chipClass}
      onClose={onCloseHandler}
      onClick={onClickHandler}
      name={name}
      labelPrefix={labelPrefix}
      maxWidth={maxWidth}
    />
  );
};

Chip.displayName = 'Chip';
Chip.defaultProps = {
  type: 'input',
  maxWidth: 'var(--spacing-640)',
};

export default Chip;
