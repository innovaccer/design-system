import * as React from 'react';
import classNames from 'classnames';
import Text from '@/components/atoms/text';
import { BaseProps, OmitNativeProps } from '@/utils/types';
import uidGenerator from '@/utils/uidGenerator';

export type Size = 'regular' | 'tiny';

type MouseEvent = React.ChangeEvent<HTMLInputElement>;

export interface RadioProps extends BaseProps, OmitNativeProps<HTMLInputElement, 'onChange'> {
  /**
   * Size of `Radio`
   * @default "regular"
   */
  size?: Size;
  /**
   * Disables the `Radio`, making it unable to be pressed
   */
  disabled?: boolean;
  /**
   * Describes Label of the `Radio`
   */
  label?: string;
  /**
   * Name of the `Radio`
   */
  name: string;
  /**
   * Name of the `Radio`
   */
  value: string;
  /**
   * Denotes initial selection in case of Uncontrolled `Radio`
   */
  defaultChecked?: boolean;
  /**
   * Denotes selection in case of Controlled `Radio`
   */
  checked?: boolean;
  /**
   * Callback function called when user the selects an option
   */
  onChange?: (event: MouseEvent) => void;
}

export const Radio = React.forwardRef<HTMLInputElement, RadioProps>((props, forwardedRef) => {
  const {
    size = 'regular',
    label,
    disabled,
    onChange,
    name,
    value,
    checked,
    defaultChecked,
    className,
    ...rest
  } = props;

  const ref = React.useRef<HTMLInputElement>(null);

  React.useImperativeHandle(forwardedRef, (): HTMLInputElement => {
    return ref.current as HTMLInputElement;
  });

  const RadioClass = classNames({
    ['Radio']: true,
    ['Radio--disabled']: disabled,
  }, className);

  const RadioWrapper = classNames({
    ['Radio-wrapper']: true,
    [`Radio-wrapper--${size}`]: size,
  });

  const RadioOuterWrapper = classNames({
    ['Radio-outerWrapper']: true,
    [`Radio-outerWrapper--${size}`]: size,
  });

  const id = `${name}-${label}-${uidGenerator()}`;
  return (
    <div className={RadioClass}>
      <div className={RadioOuterWrapper}>
        <input
          {...rest}
          type="radio"
          disabled={disabled}
          checked={checked}
          defaultChecked={defaultChecked}
          ref={ref}
          name={name}
          value={value}
          onChange={onChange}
          className="Radio-input"
          id={id}
        />
        <span className={RadioWrapper} />
      </div>
      {label && (
        <label className="Radio-label" htmlFor={id}>
          <Text
            size={size === 'tiny' ? 'small' : 'regular'}
            appearance={disabled ? 'disabled' : 'default'}
          >
            {label}
          </Text>
        </label>
      )}
    </div>
  );
});

Radio.displayName = 'Radio';

export default Radio;
