import * as React from 'react';
import classNames from 'classnames';
import { BaseProps, extractBaseProps } from '@/utils/types';
import styles from '@css/components/spinner.module.css';

export type SpinnerAppearance = 'primary' | 'secondary' | 'white';
export type SpinnerSize = 'xsmall' | 'small' | 'medium' | 'large';

export type SpinnerProps = {
  /**
   * Color of `Spinner`
   */
  appearance?: SpinnerAppearance;
  /**
   * Size of `Spinner`
   */
  size?: SpinnerSize;
} & BaseProps;

export const Spinner = (props: SpinnerProps) => {
  const { appearance = 'primary', size = 'medium', className } = props;

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
    <svg {...baseProps} className={wrapperClasses} {...svgProps}>
      <circle className={circleClasses} {...circleProps} />
    </svg>
  );
};

Spinner.displayName = 'Spinner';

export default Spinner;
