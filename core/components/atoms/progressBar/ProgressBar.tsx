import * as React from 'react';
import classNames from 'classnames';
import { BaseProps, extractBaseProps } from '@/utils/types';
import styles from '@css/components/progressBar.module.css';

export type ProgressBarSize = 'small' | 'regular';
export type ProgressBarState = 'default' | 'indeterminate';

export interface ProgressBarProps extends BaseProps {
  /**
   * Specifies how much of the task that has been completed. Value should lie between 0 to max,
   */
  value?: number;
  /**
   * Describes how much work the task indicated by the `Progress Bar` requires
   */
  max: number;
  /**
   * Size of `Progress Bar`
   */
  size: ProgressBarSize;
  /**
   * State of `Progress Bar`
   */
  state?: ProgressBarState;
}

export const ProgressBar = (props: ProgressBarProps) => {
  const { max, value, className, size, state } = props;

  const baseProps = extractBaseProps(props);

  const style =
    state !== 'indeterminate'
      ? {
          width: value && value > 0 ? `${(Math.min(value, max) * 100) / max}%` : '0',
        }
      : {};

  const ProgressBarClass = classNames(
    {
      [styles.ProgressBar]: true,
      [styles['ProgressBar-indicator--small']]: size === 'small',
      [styles['ProgressBar-indicator--regular']]: size === 'regular',
      ['position-relative overflow-hidden']: state === 'indeterminate',
    },
    className
  );

  const ProgressIndicatorClass = classNames({
    [styles['ProgressBar-indicator']]: true,
    [styles['ProgressBar-indicator--indeterminate']]: state === 'indeterminate',
  });

  return (
    <div data-test="DesignSystem-ProgressBar" {...baseProps} className={ProgressBarClass}>
      <div data-test="DesignSystem-ProgressBar-Indicator" className={ProgressIndicatorClass} style={style} />
    </div>
  );
};

ProgressBar.displayName = 'ProgressBar';
ProgressBar.defaultProps = {
  max: 100,
  size: 'regular',
  state: 'default',
};

export default ProgressBar;
