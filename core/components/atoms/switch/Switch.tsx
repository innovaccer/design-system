import * as React from 'react';
import classNames from 'classnames';

export type Size = 'regular' | 'tiny' | 'large';
export type Appearance = 'primary' | 'alert' | 'success' | 'warning';

export interface SwitchProps {
  /**
   * Size of `Switch`
   * @default "regular"
   */
  size?: Size;
  /**
   * Color of `Switch`
   * @default "primary"
   */
  appearance?: Appearance;
  /**
   * Denotes Selection
   */
  checked?: boolean;
  /**
   * Disables the `Switch`, making it unable to be pressed
   */
  disabled?: boolean;
  /**
   * Name of `Switch`
   */
  name?: string;
  /**
   * Value of `Switch`
   */
  value?: string;
  /**
   * Callback function called when `Switch` is toggled
   */
  onChange?: (selected: boolean) => void;
}

export const Switch = React.forwardRef<HTMLInputElement, SwitchProps>((props, ref) => {
  const {
    size = 'regular',
    appearance = 'primary',
    disabled,
    onChange,
    name,
    value,
  } = props;

  const [checked, setChecked] = React.useState(props.checked);

  React.useEffect(() => {
    const checkedValue = props.disabled ? checked : props.checked;
    setChecked(checkedValue);
  }, [props.checked, props.disabled]);

  const SwitchClass = classNames({
    ['Switch']: true,
    ['Switch--disabled']: disabled,
    [`Switch--${size}`]: size,
  });

  const SwitchWrapper = classNames({
    ['Switch-wrapper']: true,
    ['Switch-wrapper--disabled']: disabled,
    [`Switch-wrapper--${size}`]: size,
    [`Switch-wrapper--${appearance}`]: appearance,
    ['Switch-wrapper--checked']: checked,
    ['Switch-wrapper--checkedDisabled']: checked && disabled,
  });

  const onChangeHandler = () => {
    setChecked(!checked);
    if (onChange) onChange(!checked);
  };

  return (
    <div className={SwitchClass}>
      <input
        type="checkbox"
        disabled={disabled}
        checked={checked}
        ref={ref}
        name={name}
        value={value}
        className="Switch-input"
      />
      <span onClick={onChangeHandler} className={SwitchWrapper} />
    </div>
  );
});

Switch.displayName = 'Switch';

export default Switch;
