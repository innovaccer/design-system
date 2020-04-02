import * as React from 'react';
import classNames from 'classnames';

export type Appearance = 'primary' | 'secondary' | 'white';
export type Size = 'small' | 'medium' | 'large';

export interface ISpinnerProps {
  /**
   * @default "primary"
   */
  appearance?:  Appearance;
  /**
   * @default "medium"
   */
  size?: Size;
}

const Spinner: React.FunctionComponent<ISpinnerProps> = props => {
  const {
    appearance = 'primary',
    size = 'medium'
  } = props;

  const wrapperClasses = classNames({
    Spinner: true,
    [`Spinner--${size}`]: size,
  });
  const circleClasses = classNames({
    Circle: true,
    [`Circle--${appearance}`]: appearance,
  });

  const svgProps = {
    viewBox: '0 0 50 50'
  };
  const circleProps = {
    cx: 25,
    cy: 25,
    r: 20,
    fill: 'none',
    strokeMiterlimit: '10',
    strokeWidth: '4'
  };

  return (
    <svg className={wrapperClasses} {...svgProps}>
      <circle className={circleClasses} {...circleProps} />
    </svg>
  );
};

export default Spinner;
