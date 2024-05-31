import * as React from 'react';
import classNames from 'classnames';
import { BaseProps, extractBaseProps } from '@/utils/types';
import styles from './Spinner.module.css';

export type SpinnerAppearance = 'primary' | 'secondary' | 'white';
export type SpinnerSize = 'small' | 'medium' | 'large';

export interface SpinnerProps extends BaseProps {
  /**
   * Color of `Spinner`
   *
   * **`secondary` & `white` appearances has been deprecated and all `secondary` & `white` appearances will now be changed to `primary` appearance automatically**
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
  const circleProps = {
    cx: 25,
    cy: 25,
    r: 20,
    fill: 'none',
    strokeMiterlimit: '10',
    strokeWidth: '4',
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
