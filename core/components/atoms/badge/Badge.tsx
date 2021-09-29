import * as React from 'react';
import classNames from 'classnames';
import { BaseProps, extractBaseProps } from '@/utils/types';
import { AccentAppearance } from '../../../commonTypes';

export interface BadgeProps extends BaseProps {
  /*
   * Color of the `Badge`
   */
  appearance: AccentAppearance;
  /**
   * Makes `Badge` appearance subtle
   */
  subtle?: boolean;
  /**
   * Text to be added inside `Badge`
   */
  children: React.ReactText;
}

export const Badge = (props: BadgeProps) => {
  const { appearance, children, subtle, className } = props;

  const baseProps = extractBaseProps(props);

  const classes = classNames(
    {
      Badge: true,
      [`Badge--${appearance}`]: appearance && !subtle,
      [`Badge--subtle-${appearance}`]: subtle,
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
Badge.defaultProps = {
  appearance: 'secondary',
};

export default Badge;
