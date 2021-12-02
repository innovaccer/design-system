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
    });

  const onCloseHandler = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onClose) onClose();
  };

  const onClickHandler = () => {
    if (onClick) onClick();
  };

  const iconAppearance = classNames({
    ['disabled']: disabled && !selected,
    ['info']: selected,
    ['subtle']: !disabled && !selected && !clearButton && !icon,
    ['default']: !disabled && !selected && !clearButton && icon,
  }) as IconProps['appearance'];

  const textAppearance = classNames({
    ['disabled']: disabled && !selected,
    ['link']: selected,
    ['default']: !disabled && !selected,
  }) as TextProps['appearance'];

  return (
    // TODO(a11y)
    // eslint-disable-next-line
    <div
      data-test="DesignSystem-GenericChip--GenericChipWrapper"
      {...baseProps}
      className={`Chip-wrapper ${className}`}
      onClick={onClickHandler}
    >
      {icon && (
        <Icon
          data-test="DesignSystem-GenericChip--Icon"
          name={icon}
          appearance={iconAppearance}
          className={iconClass('left')}
        />
      )}
      <Text data-test="DesignSystem-GenericChip--Text" appearance={textAppearance}>
        {label}
      </Text>
      {clearButton && (
        <Icon
          data-test="DesignSystem-GenericChip--clearButton"
          name="clear"
          appearance={iconAppearance}
          className={iconClass('right')}
          onClick={onCloseHandler}
        />
      )}
    </div>
  );
};

GenericChip.displayName = 'GenericChip';

export default GenericChip;
