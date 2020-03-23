import * as React from 'react';
import classNames from 'classnames';

type ReactMouseEvent = (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;

export type Appearance = 'default' | 'destructive' | 'white' | 'subtle' | 'disabled' | 'info' | 'alert' | 'warning' | 'success';

export type IconType = 'filled' | 'outline' | 'rounded' | 'sharp';

export interface IIconProps {
  name: string;
  size?: number;
  type?: IconType;
  appearance?: Appearance;
  onClick?: ReactMouseEvent;
  helpers?: string[];
}

const Icon: React.FunctionComponent<IIconProps> = props => {
  const {
    appearance = 'default',
    type = 'filled',
    helpers = [],
    name,
    size,
    onClick,
  } = props;

  const iconClass = classNames({
    ['material-icons']: true,
    ['Icon']: true,
    [`Icon--${appearance}`]: appearance,
    [`${helpers.join(' ')}`]: helpers,
  });

  const styles = {
    fontSize: (size) ? `${size}px` : 'var(--font-size)',
    width: (size) ? `${size}px` : 'var(--font-size)',
  };

  const onClickHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    if (onClick) onClick(e);
  };

  return (
    <i
      className={iconClass}
      style={styles}
      onClick={onClickHandler}
    >
      {`${name}_${type}`}
    </i>
  );
};

export default Icon;
