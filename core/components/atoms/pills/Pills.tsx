import * as React from 'react';
import classNames from 'classnames';

export type Appearance = 'primary' | 'secondary' | 'alert' | 'warning' | 'success' | 'accent1' | 'accent2' | 'accent3' | 'accent4';

export interface PillsProps {
  /**
   * Color of the `Pills`
   * @default "secondary"
   */
  appearance?: Appearance;
  /**
   * Makes `Pills` appearance subtle
   */
  subtle?: boolean;
  /**
   * Text to be added inside `Pills`
   */
  children: string;
}

export const Pills = (props: PillsProps) => {
  const {
    appearance = 'secondary',
    children,
    subtle,
    ...rest
  } = props;

  const classes = classNames({
    Pills: true,
    [`Badge--${appearance}`]: appearance && !subtle,
    [`Badge--subtle-${appearance}`]: subtle
  });

  return (
    <span className={classes} {...rest}>
      {children}
    </span>
  );
};

Pills.displayName = 'Pills';

export default Pills;
