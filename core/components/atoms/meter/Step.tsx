import * as React from 'react';
import classNames from 'classnames';
import { BaseProps, extractBaseProps } from '@/utils/types';
import styles from '@css/components/meter.module.css';

export type StepSize = 'small' | 'regular' | 'large';
export type StepType = 'filled' | 'empty';
export type StepColor = 'info' | 'success' | 'warning' | 'alert';

export interface StepProps extends BaseProps {
  /**
   * Size of the `Step`
   */
  stepSize: StepSize;
  /**
   * Type of the `Step`
   */
  type: StepType;
  /**
   * Color of the empty `Step`
   */
  emptyColor?: string;
  /**
   * Color of the filled `Step`
   */
  fillColor?: StepColor;
}

export const Step = (props: StepProps) => {
  const { stepSize, type, fillColor, className, emptyColor } = props;

  const baseProps = extractBaseProps(props);

  const classes = classNames(
    {
      [styles['Meter-Step']]: true,
      [styles[`Meter-Step--${type}`]]: type,
      [styles[`Meter-Step--${stepSize}`]]: stepSize,
      [styles[`Meter-Step--${fillColor}`]]: type === 'filled' && fillColor,
    },
    className
  );

  const emptyStyle = type === 'empty' ? { background: emptyColor } : {};

  return (
    <span
      data-test="DesignSystem-Meter-Step"
      {...baseProps}
      style={emptyStyle}
      className={classes}
      role="presentation"
      aria-hidden="true"
    />
  );
};

Step.displayName = 'Step';
Step.defaultProps = {
  stepSize: 'regular',
  type: 'empty',
  emptyColor: 'var(--secondary-light)',
};

export default Step;
