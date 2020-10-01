import * as React from 'react';
import classNames from 'classnames';
import { BaseProps, extractBaseProps } from '@/utils/types';

export interface ProgressBarProps extends BaseProps {
  /**
   * Specifies how much of the task that has been completed. Value should lie between 0 to max,
   */
  value: number;
  /**
   * Describes how much work the task indicated by the `Progress Bar` requires
   */
  max: number;
}

export const ProgressBar = (props: ProgressBarProps) => {
  const {
    max,
    value,
    className
  } = props;

  const baseProps = extractBaseProps(props);

  const style = {
    width: value > 0 ? `${Math.min(value, max) * 100 / max}%` : '0',
  };

  const ProgressBarClass = classNames({
    ProgressBar: true,
  }, className);

  return (
    <div data-test="DesignSystem-ProgressBar" {...baseProps} className={ProgressBarClass}>
      <div className={'ProgressBar-indicator'} style={style} />
    </div>
  );
};

ProgressBar.displayName = 'ProgressBar';
ProgressBar.defaultProps = {
  max: 100
};

export default ProgressBar;
