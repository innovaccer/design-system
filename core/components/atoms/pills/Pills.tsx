import * as React from 'react';
import classNames from 'classnames';
import { BaseProps, extractBaseProps } from '@/utils/types';

export type Appearance = 'primary' | 'secondary' | 'alert' | 'warning' | 'success' | 'accent1' | 'accent2' | 'accent3' | 'accent4';

export interface PillsProps extends BaseProps {
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
  children: React.ReactText;
}

export const Pills = (props: PillsProps) => {
  const {
    appearance = 'secondary',
    children,
    subtle,
    className
  } = props;

  const baseProps = extractBaseProps(props);

  const classes = classNames({
    Pills: true,
    [`Badge--${appearance}`]: appearance && !subtle,
    [`Badge--subtle-${appearance}`]: subtle
  }, className);

  return (
    <span {...baseProps} className={classes}>
      {children}
    </span>
  );
};

Pills.displayName = 'Pills';

export default Pills;
