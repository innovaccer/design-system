import * as React from 'react';
import classNames from 'classnames';
import Icon from '@/components/atoms/icon';
export type Type = 'Action' | 'Selection' | 'Input';
export interface GenericChipProps {

  label: string;
  icon?: string;
  clearbutton?: boolean;
  disabled?: boolean;
  selected?: boolean;
  className?: string;
  name?: string;
  onClose?: (name: any) => void;
  onClick?: (name: any) => void;
}
export const GenericChip = (props: GenericChipProps) => {
  const {
    label = 'Selection',
    icon,
    clearbutton,
    disabled,
    className,
    selected,
    onClose,
    onClick,
    ...rest
  } = props;
  const classes = classNames({
    [`${className}`]: true,
  });
  const iconClass = (align: string) => classNames({
    ['Chip-icon']: true,
    [`Chip-icon--${align}`]: align,
  });

  const onCloseHandler = () => {
    if (onClose) onClose(name);
  };
  const onClickHandler = () => {
    if (onClick) onClick(name);
  };
  return (
    <div className={classes} onClick={onClickHandler} {...rest}>
      <div className="Chip-wrapper">
        {icon && (
          <div className={iconClass('left')}>
            <Icon
              name={icon}
              size={16}
              appearance={(disabled ? 'disabled' : (selected ? 'info' : 'default'))}
            />
          </div>
        )}
        <div className="Chiplabel">
          {label}
        </div>
      </div>
      {(
        clearbutton &&
        (
          <div onClick={onCloseHandler}>
            <div className={iconClass('right')}>
              <Icon
                name="clear"
                size={16}
                appearance={disabled ? 'disabled' : (selected ? 'info' : 'subtle')}
              />
            </div>
          </div>
        )

      )}
    </div>
  );
};
export default GenericChip;
