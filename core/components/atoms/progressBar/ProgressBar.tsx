import * as React from 'react';
import classNames from 'classnames';
import { BaseProps, extractBaseProps } from '@/utils/types';

export type ProgressBarSize = 'small' | 'regular';

export interface ProgressBarProps extends BaseProps {
  /**
   * Specifies how much of the task that has been completed. Value should lie between 0 to max,
   */
  value: number;
  /**
   * Describes how much work the task indicated by the `Progress Bar` requires
   */
  max: number;
  /**
   * Size of `Progress Bar`
   */
  size: ProgressBarSize;
}

export const ProgressBar = (props: ProgressBarProps) => {
  const { max, value, className, size } = props;

  const baseProps = extractBaseProps(props);

  const style = {
    width: value > 0 ? `${(Math.min(value, max) * 100) / max}%` : '0',
  };

  const ProgressBarClass = classNames(
    {
      ProgressBar: true,
    },
    className
  );

  const ProgressIndicatorClass = classNames({
    ['ProgressBar-indicator']: true,
    ['ProgressBar-indicator--small']: size === 'small',
    ['ProgressBar-indicator--regular']: size === 'regular',
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
};

export default ProgressBar;
