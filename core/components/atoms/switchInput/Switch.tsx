import * as React from 'react';
import classNames from 'classnames';
import { OmitNativeProps, BaseProps } from '@/utils/types';
import { isSpaceKey } from '@/accessibility/utils';
import { ChangeEvent } from '@/common.type';
import styles from '@css/components/switch.module.css';

export type SwitchSize = 'regular' | 'tiny' | 'large';
export type SwitchAppearance = 'primary' | 'alert' | 'success' | 'warning';

type KeyboardEvent = React.KeyboardEvent<HTMLInputElement>;

export interface SwitchProps extends BaseProps, OmitNativeProps<HTMLInputElement, 'onChange'> {
  /**
   * Size of `Switch`
   *
   * **'large' size has been deprecated and all large switch will now be changed to regular switch automatically**
   */
  size?: SwitchSize;
  /**
   * Color of `Switch`
   *
   * **Soon to be deprecated**
   */
  appearance?: SwitchAppearance;
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
  onChange?: (event: ChangeEvent | KeyboardEvent, selected: boolean) => void;
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
    className,
    appearance,
    checked: checkedProp,
    ...rest
  } = props;

  const [checked, setChecked] = React.useState(checkedProp === undefined ? defaultChecked : checkedProp);

  React.useEffect(() => {
    if (checkedProp !== undefined) setChecked(checkedProp);
  }, [checkedProp]);

  const SwitchClass = classNames(
    {
      [styles.Switch]: true,
      [styles['Switch--disabled']]: disabled,
      [styles[`Switch--${size}`]]: size,
    },
    className
  );

  const SwitchWrapper = classNames({
    [styles['Switch-wrapper']]: true,
    [styles['Switch-wrapper--disabled']]: disabled,
    [styles[`Switch-wrapper--${size}`]]: size,
    [styles['Switch-wrapper--checked']]: checked,
    [styles['Switch-wrapper--checkedDisabled']]: checked && disabled,
  });

  const onChangeHandler = (event: ChangeEvent | KeyboardEvent) => {
    if (event.type == 'change' || isSpaceKey(event as React.KeyboardEvent<HTMLElement>)) {
      if (checkedProp === undefined) setChecked(!checked);
      if (onChange) onChange(event, !checked);
    }
  };

  return (
    <div className={SwitchClass}>
      <input
        {...rest}
        type="checkbox"
        defaultChecked={defaultChecked}
        disabled={disabled}
        onChange={onChangeHandler}
        checked={checked}
        ref={ref}
        name={name}
        value={value}
        className={styles['Switch-input']}
        onKeyUp={onChangeHandler}
      />
      <span className={SwitchWrapper} />
    </div>
  );
});

Switch.displayName = 'Switch';

export default Switch;
