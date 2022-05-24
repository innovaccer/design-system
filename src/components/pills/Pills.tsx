import * as React from 'react';
import classNames from 'classnames';
import { BaseProps, extractBaseProps } from '@/utils/types';
import { AccentAppearance } from '@/common.type';

export interface PillsProps extends BaseProps {
  /**
   * Color of the `Pills`
   */
  appearance: AccentAppearance;
  /**
   * Makes `Pills` appearance subtle
   */
  subtle?: boolean;
  /**
   * Number to be added inside `Pills`
   */
  children: React.ReactNode;
  /**
   * Used to provide descriptive explanation of the numeric value.
   */
  ariaLabel?: string;
}

export const Pills = (props: PillsProps) => {
  const { appearance, children, subtle, className, ariaLabel } = props;

  const baseProps = extractBaseProps(props);

  const classes = classNames(
    {
      [`Mds-Pills`]: true,
      [`Mds-Badge--${appearance}`]: appearance && !subtle,
      [`Mds-Badge--subtle-${appearance}`]: subtle,
    },
    className
  );

  return (
    <span role="status" aria-label={ariaLabel} data-test="DesignSystem-Pills" {...baseProps} className={classes}>
      {children}
    </span>
  );
};

Pills.displayName = 'Pills';
Pills.defaultProps = {
  appearance: 'secondary',
};

export default Pills;
