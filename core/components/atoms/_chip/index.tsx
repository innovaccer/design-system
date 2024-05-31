import * as React from 'react';
import classNames from 'classnames';
import Icon from '@/components/atoms/icon';
import Text from '@/components/atoms/text';
import { Name } from '../chip/Chip';
import { BaseProps, extractBaseProps } from '@/utils/types';
import { IconProps, TextProps } from '@/index.type';
import { IconType } from '@/common.type';
import styles from '../chip/chip.module.css';

export interface GenericChipProps extends BaseProps {
  label: string | React.ReactElement;
  labelPrefix?: string;
  icon?: string;
  clearButton?: boolean;
  disabled?: boolean;
  selected?: boolean;
  onClose?: () => void;
  onClick?: () => void;
  iconType?: IconType;
  name: Name;
}

export const GenericChip = (props: GenericChipProps) => {
  const { label, icon, clearButton, disabled, className, selected, onClose, onClick, labelPrefix, iconType } = props;

  const baseProps = extractBaseProps(props);

  const iconClass = (align: string) =>
    classNames({
      [styles['Chip-icon']]: true,
      [styles[`Chip-icon--${align}`]]: align,
      [styles[`Chip-icon-disabled--right`]]: align === 'right' && disabled,
      [styles['cursor-pointer']]: align === 'right' && !disabled,
      [styles['Chip-icon--selected']]: align === 'right' && selected,
    });

  const onCloseHandler = (e: React.MouseEvent | React.KeyboardEvent) => {
    e.stopPropagation();
    if (onClose) onClose();
  };

  const onClickHandler = () => {
    if (onClick) onClick();
  };

  const onKeyDownHandler = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      onCloseHandler(event);
    }
  };

  const iconAppearance = (align: string) =>
    classNames({
      [styles['disabled']]: disabled && !selected,
      [styles['primary_dark']]: !disabled && selected,
      [styles['primary_lighter']]: disabled && selected,
      [styles['subtle']]: !disabled && !selected && align === 'right',
      [styles['inverse']]: !disabled && !selected && align === 'left',
    }) as IconProps['appearance'];

  const textColor = classNames({
    [styles['primary-lighter']]: disabled && selected,
    [styles['inverse-lightest']]: disabled && !selected,
    [styles['primary-dark']]: selected,
    [styles['inverse']]: !disabled && !selected,
  }) as TextProps['color'];

  const renderLabel = () => {
    if (typeof label === 'string') {
      return (
        <>
          {labelPrefix && (
            <Text
              data-test="DesignSystem-GenericChip--LabelPrefix"
              weight="medium"
              color={textColor}
              className={styles['Chip-text'] + ' mr-3'}
            >
              {labelPrefix}
            </Text>
          )}
          <Text data-test="DesignSystem-GenericChip--Text" color={textColor} className={styles['Chip-text']}>
            {label}
          </Text>
        </>
      );
    }
    return label;
  };

  return (
    // TODO(a11y)
    // eslint-disable-next-line
    <div
      // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
      tabIndex={disabled ? -1 : 0}
      data-test="DesignSystem-GenericChip--GenericChipWrapper"
      {...baseProps}
      className={styles['Chip-wrapper'] + ` ${className}`}
      onClick={onClickHandler}
    >
      {icon && (
        <Icon
          data-test="DesignSystem-GenericChip--Icon"
          name={icon}
          type={iconType}
          appearance={iconAppearance('left')}
          className={iconClass('left')}
        />
      )}
      {renderLabel()}
      {clearButton && (
        <div
          role="button"
          onClick={onCloseHandler}
          tabIndex={disabled ? -1 : 0}
          onKeyDown={onKeyDownHandler}
          className={iconClass('right')}
          data-test="DesignSystem-GenericChip--clearButton"
        >
          <Icon name="clear" appearance={iconAppearance('right')} className="p-2" />
        </div>
      )}
    </div>
  );
};

GenericChip.displayName = 'GenericChip';

export default GenericChip;
