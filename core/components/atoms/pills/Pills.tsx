import * as React from 'react';
import classNames from 'classnames';
import { BaseProps, extractBaseProps } from '@/utils/types';
import { AccentAppearance } from '@/common.type';
import styles from '@css/components/pills.module.css';
import badgeStyles from '@css/components/badge.module.css';

export type PillsProps = {
  /**
   * Color of the `Pills`
   */
  appearance?: AccentAppearance;
  /**
   * Makes `Pills` appearance subtle
   */
  subtle?: boolean;
  /**
   * Text to be added inside `Pills`
   */
  children?: string | number;
  /**
 * Aria label for the `Pills`
 */
  'aria-label'?: string;
} & BaseProps;

export const Pills = (props: PillsProps) => {
  const { appearance = 'secondary', children, subtle, className, 'aria-label': ariaLabel } = props;

  const baseProps = extractBaseProps(props);

  const classes = classNames(
    {
      [styles.Pills]: true,
      [badgeStyles[`Badge--${appearance}`]]: appearance && !subtle,
      [badgeStyles[`Badge--subtle-${appearance}`]]: subtle,
    },
    className
  );

  return (
    <span
      data-test="DesignSystem-Pills"
      role={ariaLabel ? 'status' : undefined}
      aria-label={ariaLabel}
      {...baseProps}
      className={classes}
    >
      {children}
    </span>
  );
};

Pills.displayName = 'Pills';

export default Pills;
