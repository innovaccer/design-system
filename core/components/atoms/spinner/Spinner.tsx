import * as React from 'react';
import classNames from 'classnames';
import { BaseProps, extractBaseProps } from '@/utils/types';

export type SpinnerAppearance = 'primary' | 'secondary' | 'white';
export type SpinnerSize = 'xsmall' | 'small' | 'medium' | 'large';

export interface SpinnerProps extends BaseProps {
  /**
   * Color of `Spinner`
   */
  appearance: SpinnerAppearance;
  /**
   * Size of `Spinner`
   */
  size: SpinnerSize;
}

export const Spinner = (props: SpinnerProps) => {
  const { appearance, size, className } = props;

  const baseProps = extractBaseProps(props);

  const wrapperClasses = classNames(
    {
      Spinner: true,
      [`Spinner--${size}`]: size,
    },
    className
  );

  const circleClasses = classNames({
    Circle: true,
    [`Circle--${appearance}`]: appearance,
  });

  const svgProps = {
    viewBox: '0 0 50 50',
  };

  const strokeWidthMapping = {
    xsmall: 8,
    small: 6,
    medium: 4,
    large: 4,
  };

  const circleProps = {
    cx: 25,
    cy: 25,
    r: 20,
    fill: 'none',
    strokeMiterlimit: '10',
    strokeWidth: strokeWidthMapping[size],
  };

  return (
    <svg {...baseProps} className={wrapperClasses} {...svgProps}>
      <circle className={circleClasses} {...circleProps} />
    </svg>
  );
};

Spinner.displayName = 'Spinner';
Spinner.defaultProps = {
  appearance: 'primary',
  size: 'medium',
};

export default Spinner;
