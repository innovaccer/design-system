import * as React from 'react';
import classNames from 'classnames';

export type Appearance = 'primary' | 'secondary' | 'alert' | 'warning' | 'success' | 'accent1' | 'accent2' | 'accent3' | 'accent4';

export interface IBadgeProps {
  /**
   * @default "secondary"
   */
  appearance?: Appearance;
  subtle?: boolean;
  /**
   * Text to be rendered
   */
  children: string;
}

const Badge = (props: IBadgeProps) => {
  const {
    appearance = 'secondary',
    children,
    subtle,
    ...rest
  } = props;

  const classes = classNames({
    Badge: true,
    [`Badge--${appearance}`]: appearance && !subtle,
    [`Badge--subtle-${appearance}`]: subtle
  });

  return (
    <span className={classes} {...rest}>
      {children}
    </span>
  );
};

export default Badge;
