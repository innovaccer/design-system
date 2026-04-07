import * as React from 'react';
import classNames from 'classnames';
import { BaseProps, extractBaseProps } from '@/utils/types';
import styles from '@css/components/spinner.module.css';

export type SpinnerAppearance = 'primary' | 'secondary' | 'white' | 'alert';
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
  /**
   * Accessible name for the spinner
   * @default "Loading"
   */
  'aria-label'?: string;
  /**
   * ID of the element that labels the spinner
   */
  'aria-labelledby'?: string;
}

export const Spinner = (props: SpinnerProps) => {
  const { appearance, size, className, 'aria-label': ariaLabel = 'Loading', 'aria-labelledby': ariaLabelledBy } = props;

  const baseProps = extractBaseProps(props);

  const wrapperClasses = classNames(
    {
      [styles.Spinner]: true,
      [styles[`Spinner--${size}`]]: size,
    },
    className
  );

  const circleClasses = classNames({
    [styles.Circle]: true,
    [styles[`Circle--${appearance}`]]: appearance,
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
    <svg
      {...baseProps}
      role="status"
      aria-live="polite"
      aria-label={ariaLabelledBy ? undefined : ariaLabel}
      aria-labelledby={ariaLabelledBy}
      className={wrapperClasses}
      {...svgProps}
    >
      <circle className={circleClasses} {...circleProps} />
    </svg>
  );
};

Spinner.displayName = 'Spinner';
Spinner.defaultProps = {
  appearance: 'primary',
  size: 'medium',
  'aria-label': 'Loading',
};

export default Spinner;
