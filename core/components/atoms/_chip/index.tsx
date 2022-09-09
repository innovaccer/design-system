import * as React from 'react';
import classNames from 'classnames';
import Icon from '@/components/atoms/icon';
import Text from '@/components/atoms/text';
import { Name } from '../chip/Chip';
import { BaseProps, extractBaseProps } from '@/utils/types';
import { IconProps, TextProps } from '@/index.type';

export interface GenericChipProps extends BaseProps {
  label: string;
  icon?: string;
  clearButton?: boolean;
  disabled?: boolean;
  selected?: boolean;
  onClose?: () => void;
  onClick?: () => void;
  name: Name;
}

export const GenericChip = (props: GenericChipProps) => {
  const { label, icon, clearButton, disabled, className, selected, onClose, onClick } = props;

  const baseProps = extractBaseProps(props);

  const iconClass = (align: string) =>
    classNames({
      ['Chip-icon']: true,
      [`Chip-icon--${align}`]: align,
      ['cursor-pointer']: align === 'right' && !disabled,
      ['Chip-icon--selected']: align === 'right' && selected,
    });

  const onCloseHandler = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onClose) onClose();
  };

  const onClickHandler = () => {
    if (onClick) onClick();
  };

  const iconAppearance = (align: string) =>
    classNames({
      ['disabled']: disabled && !selected,
      ['primary_dark']: !disabled && selected,
      ['primary_lighter']: disabled && selected,
      ['subtle']: !disabled && !selected && align === 'right',
      ['inverse']: !disabled && !selected && align === 'left',
    }) as IconProps['appearance'];

  const textColor = classNames({
    ['primary-lighter']: disabled && selected,
    ['inverse-lightest']: disabled && !selected,
    ['primary-dark']: selected,
    ['inverse']: !disabled && !selected,
  }) as TextProps['color'];

  return (
    // TODO(a11y)
    // eslint-disable-next-line
    <div
      // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
      tabIndex={0}
      data-test="DesignSystem-GenericChip--GenericChipWrapper"
      {...baseProps}
      className={`Chip-wrapper ${className}`}
      onClick={onClickHandler}
    >
      {icon && (
        <Icon
          data-test="DesignSystem-GenericChip--Icon"
          name={icon}
          appearance={iconAppearance('left')}
          className={iconClass('left')}
        />
      )}
      <Text data-test="DesignSystem-GenericChip--Text" color={textColor}>
        {label}
      </Text>
      {clearButton && (
        <Icon
          data-test="DesignSystem-GenericChip--clearButton"
          name="clear"
          appearance={iconAppearance('right')}
          className={iconClass('right')}
          onClick={onCloseHandler}
        />
      )}
    </div>
  );
};

GenericChip.displayName = 'GenericChip';

export default GenericChip;
