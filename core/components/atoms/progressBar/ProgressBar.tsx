import * as React from 'react';
import classNames from 'classnames';

export interface ProgressBarProps {
  /**
   * Sets the value on the `ProgressBar`.
   */
  value: number;
  /**
   * Event emitted when the `ProgressBar` value changes
   */
  onChange?: (value: number) => void;
}

export const useIsMount = () => {
  const isMountRef = React.useRef(true);
  React.useEffect(() => {
    isMountRef.current = false;
  }, []);
  return isMountRef.current;
};

export const ProgressBar = (props: ProgressBarProps) => {
  const {
    value,
    onChange,
  } = props;

  const isMount = useIsMount();

  React.useEffect(() => {
    if (onChange && !isMount) onChange(value);
  }, [value]);

  const style = {
    width: `${value}%`,
  };

  const ProgressBarClass = classNames({
    ProgressBar: true,
  });

  return (
    <div className={ProgressBarClass}>
      <div className={'ProgressBar-indicator'} style={style} />
    </div>
  );
};

ProgressBar.displayName = 'ProgressBar';

export default ProgressBar;
