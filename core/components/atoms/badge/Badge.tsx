import * as React from 'react';
import classNames from 'classnames';

export type Appearance = 'primary' | 'secondary' | 'alert' | 'warning' | 'success' | 'accent1' | 'accent2' | 'accent3' | 'accent4';

export interface BadgeProps {
  /**
   * Color of the `Badge`
   * @default "secondary"
   */
  appearance?: Appearance;
  /**
   * Makes `Badge` appearance subtle
   */
  subtle?: boolean;
  /**
   * Text to be added inside `Badge`
   */
  children: string;
}

export const Badge = (props: BadgeProps) => {
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
