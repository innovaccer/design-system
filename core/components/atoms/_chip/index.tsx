import * as React from 'react';
import classNames from 'classnames';
import Icon from '@/components/atoms/icon';
import Text from '@/components/atoms/text';
import { Name } from '../chip/Chip';
export interface GenericChipProps {

  label: string;
  icon?: string;
  clearButton?: boolean;
  disabled?: boolean;
  selected?: boolean;
  className?: string;
  onClose?: (name: Name) => void;
  onClick?: (name: Name) => void;
  name: Name;
}
export const GenericChip = (props: GenericChipProps) => {
  const {
    label = '',
    icon,
    clearButton,
    disabled,
    className,
    selected,
    onClose,
    onClick,
    name,
  } = props;
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
    <div className={className} >
      <div className="Chip-wrapper"onClick={onClickHandler} >
        {icon && (
          <div className={iconClass('left')}>
            <Icon
              name={icon}
              appearance={(disabled ? 'disabled' : (selected ? 'info' : 'default'))}
            />
          </div>
        )}
        <Text
          appearance={(disabled ? 'disabled' : 'default')}
        >{label}
        </Text>
      </div>
      {(
        clearButton &&
        (
          <div className={iconClass('right')} onClick={onCloseHandler}>
            <Icon
              name="clear"
              appearance={disabled ? 'disabled' : (selected ? 'info' : 'subtle')}
            />
          </div>
        )

      )}
    </div>
  );
};
export default GenericChip;
