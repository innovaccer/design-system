import * as React from 'react';
import classNames from 'classnames';

export type Size = 'small' | 'regular';

export interface ProgressRingProps {
  /**
   * Size of `Progress Ring`
   */
  size?: Size;
  /**
   * Sets the value (0 - 100) on the `ProgressRing`.
   */
  value: number;
  /**
   * Event emitted when the `ProgressRing` value changes
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

export const ProgressRing = (props: ProgressRingProps) => {
  const {
    size = 'regular',
    value,
    onChange,
  } = props;

  const isMount = useIsMount();

  React.useEffect(() => {
    if (onChange && !isMount) onChange(value);
  }, [value]);

  const radius = 20;
  const circumference = 2 * Math.PI * radius;

  const ProgressRingClass = classNames({
    Ring: true,
    [`Ring--${size}`]: size,
  });

  const svgProps = {
    viewBox: '0 0 50 50'
  };

  const circleProps = {
    cx: 25,
    cy: 25,
    r: radius,
    fill: 'none',
    strokeWidth: '8',
    strokeDasharray: `${circumference} ${circumference}`
  };

  return (
    <svg className={ProgressRingClass} {...svgProps}>
      <circle className="Ring-background" {...circleProps} />
      <circle
        className="Ring-indicator"
        strokeDashoffset={circumference - value / 100 * circumference}
        {...circleProps}
      />
    </svg>
  );
};

ProgressRing.displayName = 'ProgressRing';

export default ProgressRing;
