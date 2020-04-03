import * as React from 'react';
import classNames from 'classnames';
import Text from '@/components/atoms/text';

export type Size = 'regular' | 'tiny';

export interface IRadioProps {
  /**
   * Size of `radio`
   * @default "regular"
   */
  size?: Size;
  /**
   * Disables the `radio`, making it unable to be pressed
   */
  disabled?: boolean;
  /**
   * Describes Label of the `radio`
   */
  label?: string;
  /**
   * Name of the `radio`
   */
  name: string;
  /**
   * Name of the `radio`
   */
  value: string;
  /**
   * Denotes Selection
   */
  defaultChecked?: boolean;
  /**
   * Callback function called when user the selects an option
   */
  onChange?: (checked: boolean) => void;
}

export const Radio = React.forwardRef<HTMLInputElement, IRadioProps>((props, forwardedRef) => {
  const {
    size = 'regular',
    label,
    disabled,
    onChange,
    name,
    value,
    defaultChecked,
  } = props;

  const ref = React.useRef<HTMLInputElement>(null);

  React.useImperativeHandle(forwardedRef, (): HTMLInputElement => {
    return ref.current as HTMLInputElement;
  });

  const RadioClass = classNames({
    ['Radio']: true,
    ['Radio--disabled']: disabled,
    [`Radio--${size}`]: size,
  });

  const RadioWrapper = classNames({
    ['Radio-wrapper']: true,
    [`Radio-wrapper--${size}`]: size,
  });

  const RadioOuterWrapper = classNames({
    ['Radio-outerWrapper']: true,
    [`Radio-outerWrapper--${size}`]: size,
  });

  const onChangeHandler = () => {
    if (onChange) onChange(ref.current!.checked);
  };

  return (
    <div className={RadioClass}>
      <div className={RadioOuterWrapper}>
        <input
          type="radio"
          disabled={disabled}
          defaultChecked={defaultChecked}
          ref={ref}
          name={name}
          value={value}
          onChange={onChangeHandler}
          className="Radio-input"
        />
        <span className={RadioWrapper} />
      </div>
      {label && <Text small={size === 'tiny'}>{label}</Text>}
    </div>
  );
});

Radio.displayName = 'Radio';

export default Radio;
