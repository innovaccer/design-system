import * as React from 'react';
import classNames from 'classnames';
import { BaseProps, extractBaseProps } from '@/utils/types';
import { AccentAppearance } from '@/common.type';
import styles from '@css/components/badge.module.css';
import pageHeaderStyles from '@css/components/pageHeader.module.css';

export type BadgeProps = {
  /*
   * Color of the `Badge`
   */
  appearance?: AccentAppearance;
  /**
   * Makes `Badge` appearance subtle
   */
  subtle?: boolean;
  /**
   * Text to be added inside `Badge`
   */
  children: string | number;
} & BaseProps;

export const Badge = (props: BadgeProps) => {
  const { appearance = 'secondary', children, subtle, className } = props;

  const baseProps = extractBaseProps(props);

  const classes = classNames(
    {
      [styles.Badge]: true,
      [pageHeaderStyles.Badge]: true,
      [styles[`Badge--${appearance}`]]: appearance && !subtle,
      [styles[`Badge--subtle-${appearance}`]]: subtle,
    },
    className
  );

  return (
    <span data-test="DesignSystem-Badge" {...baseProps} className={classes}>
      {children}
    </span>
  );
};

Badge.displayName = 'Badge';

export default Badge;
