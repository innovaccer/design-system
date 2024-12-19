import * as React from 'react';
import classNames from 'classnames';
import { BaseProps, extractBaseProps } from '@/utils/types';
import styles from '@css/components/progressRing.module.css';

export type ProgressRingSize = 'small' | 'regular' | 'large';

export interface ProgressRingProps extends BaseProps {
  /**
   * Size of `Progress Ring`
   */
  size: ProgressRingSize;
  /**
   * Specifies how much of the task that has been completed. Value should lie between 0 to max.
   */
  value: number;
  /**
   * Describes how much work the task indicated by the `Progress Ring` requires.
   */
  max: number;
}

export const ProgressRing = (props: ProgressRingProps) => {
  const { size, max, value, className } = props;

  const baseProps = extractBaseProps(props);

  const radius = 20;
  const circumference = 2 * Math.PI * radius;

  const ProgressRingClass = classNames(
    {
      [styles.Ring]: true,
      [styles[`Ring--${size}`]]: size,
    },
    className
  );

  const svgProps = {
    viewBox: '0 0 50 50',
  };

  const updatedValue = value > 0 ? (Math.min(value, max) * 100) / max : 0;

  const circleProps = {
    cx: 25,
    cy: 25,
    r: radius,
    fill: 'none',
    strokeWidth: '8',
    strokeDasharray: `${circumference} ${circumference}`,
  };

  return (
    <svg data-test="DesignSystem-ProgressRing" {...baseProps} className={ProgressRingClass} {...svgProps}>
      <circle className={styles['Ring-background']} {...circleProps} />
      <circle
        className={styles['Ring-indicator']}
        strokeDashoffset={circumference - (updatedValue / 100) * circumference}
        {...circleProps}
        data-test="DesignSystem-ProgressRing--Circle"
      />
    </svg>
  );
};

ProgressRing.displayName = 'ProgressRing';
ProgressRing.defaultProps = {
  size: 'regular',
  max: 100,
};

export default ProgressRing;
