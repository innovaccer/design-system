import * as React from 'react';
import classNames from 'classnames';
import { BaseProps, extractBaseProps } from '@/utils/types';

export type Size = 'regular' | 'tiny' | 'large';
export type Appearance = 'primary' | 'alert' | 'success' | 'warning';

type MouseEvent = React.ChangeEvent<HTMLInputElement>;

export interface SwitchProps extends BaseProps {
  /**
   * Size of `Switch`
   * @default "regular"
   */
  size?: Size;
  /**
   * Color of `Switch`
   *
   * **Soon to be deprecated**
   */
  appearance?: Appearance;
  /**
   * Default value of checked (Used in case of uncontrolled `Switch`)
   */
  defaultChecked?: boolean;
  /**
   * Denotes Selection (Used in case of controlled `Switch`)
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
  onChange?: (event: MouseEvent, selected: boolean) => void;
}

/**
 * ######Switch has two types:
 *  - [Controlled Switch](https://reactjs.org/docs/forms.html#controlled-components)
 *  - [Uncontrolled Switch](https://reactjs.org/docs/uncontrolled-components.html)
 */
export const Switch = React.forwardRef<HTMLInputElement, SwitchProps>((props, ref) => {
  const {
    size = 'regular',
    defaultChecked,
    disabled,
    onChange,
    name,
    value,
    className
  } = props;

  const baseProps = extractBaseProps(props);

  const [checked, setChecked] = React.useState(props.checked === undefined ? defaultChecked : props.checked);

  React.useEffect(() => {
    if (props.checked !== undefined) setChecked(props.checked);
  }, [props.checked]);

  const SwitchClass = classNames({
    ['Switch']: true,
    ['Switch--disabled']: disabled,
    [`Switch--${size}`]: size,
  }, className);

  const SwitchWrapper = classNames({
    ['Switch-wrapper']: true,
    ['Switch-wrapper--disabled']: disabled,
    [`Switch-wrapper--${size}`]: size,
    ['Switch-wrapper--checked']: checked,
    ['Switch-wrapper--checkedDisabled']: checked && disabled,
  });

  const onChangeHandler = (event: MouseEvent) => {
    if (props.checked === undefined) setChecked(!checked);
    if (onChange) onChange(event, !checked);
  };

  return (
    <div className={SwitchClass}>
      <input
        {...baseProps}
        type="checkbox"
        defaultChecked={defaultChecked}
        disabled={disabled}
        onChange={onChangeHandler}
        checked={checked}
        ref={ref}
        name={name}
        value={value}
        className="Switch-input"
      />
      <span className={SwitchWrapper} />
    </div>
  );
});

Switch.displayName = 'Switch';

export default Switch;
