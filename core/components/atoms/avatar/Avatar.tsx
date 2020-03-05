import * as React from 'react';
import classNames from 'classnames';

type Appearance = 'primary' | 'alert' | 'warning' | 'success' | 'accent1' | 'accent2' | 'accent3' | 'accent4';

export interface IAvatarProps {
  appearance?: Appearance;
  children: string;
}

const initialsLength = 2;

const Avatar: React.FunctionComponent<IAvatarProps> = props => {
  const {
    appearance = 'primary',
    children
  } = props;

  const initials = children.slice(0, initialsLength);
  const classes = classNames({
    Avatar: true,
    [`Avatar--${appearance}`]: appearance,
  });

  return (
    <span className={classes}>{initials}</span>
  );
};

export default Avatar;
