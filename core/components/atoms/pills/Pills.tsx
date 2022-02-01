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
   * Text to be added inside `Pills`
   */
  children: React.ReactText;
}

export const Pills = (props: PillsProps) => {
  const { appearance, children, subtle, className } = props;

  const baseProps = extractBaseProps(props);

  const classes = classNames(
    {
      Pills: true,
      [`Badge--${appearance}`]: appearance && !subtle,
      [`Badge--subtle-${appearance}`]: subtle,
    },
    className
  );

  
  return (
    <span data-test="DesignSystem-Pills" {...baseProps} className={classes}>
      {children}
    </span>
  );
};

Pills.displayName = 'Pills';
Pills.defaultProps = {
  appearance: 'secondary',
};

export default Pills;
