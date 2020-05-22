import * as React from 'react';
import classNames from 'classnames';
import Icon from '@/components/atoms/icon';
export type Type = 'Action' | 'Selection' | 'Input';
export type Appearance = 'default' | 'white' | 'destructive' | 'subtle' | 'disabled';
export interface GenericChipProps {

  label: string;
  icon?: string;
  clearbutton?: boolean;
  disabled?: boolean;
  type?: Type;
  selected?: boolean;
  appearance?: Appearance;
  // onClear?: (e: React.MouseEvent<HTMLElement>) => void;
  // onClick?: (e: React.MouseEvent<HTMLInputElement>) => void;
}
export const GenericChip = (props: GenericChipProps) => {
  const {
    label = 'Selection',
    icon,
    clearbutton,
    disabled,
    type,
    appearance,
    ...rest
  } = props;

  const classes = classNames({
    Chip: true,
    ['Chip-wrapper--disabled']: disabled,
  });

  const iconClass = (align: string) => classNames({
    ['Chip-icon']: true,
    [`Chip-icon--${align}`]: align,
    ['Chip-wrapper--disabled']: disabled,
  });
  const Chiplabel = classNames({
    [`Chip--${appearance}`]: appearance,
  });
  return (
    <div className={classes} {...rest}>
      <div className="Chip-wrapper">
        {icon && (
          <div className={iconClass('left')}>
            <Icon
              name={icon}
              size={16}
              appearance={disabled ? 'disabled' : 'default'}
            />
          </div>
        )}
        <div className={Chiplabel}>
          {label}
        </div>
      </div>
      {(
        clearbutton &&
        (
          <div className={iconClass('right')}>
            <Icon
              name="clear"
              size={16}
              appearance={disabled ? 'disabled' : 'default'}
            />
          </div>
        )

      )}
    </div>
  );
};

// GenericChip.displayName = 'Chip';

export default GenericChip;
