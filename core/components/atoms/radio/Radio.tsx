import * as React from 'react';
import classNames from 'classnames';
import Text from '@/components/atoms/text';
import { BaseProps, OmitNativeProps } from '@/utils/types';
import uidGenerator from '@/utils/uidGenerator';
import { ChangeEvent } from '@/common.type';

export type RadioSize = 'regular' | 'tiny';

export interface RadioProps extends BaseProps, OmitNativeProps<HTMLInputElement, 'onChange'> {
  /**
   * Size of `Radio`
   * @default "regular"
   */
  size?: RadioSize;
  /**
   * Disables the `Radio`, making it unable to be pressed
   */
  disabled?: boolean;
  /**
   * Describes Label of the `Radio`
   */
  label?: string;
  /**
   * Describes Help Text of the `Radio`
   */
  helpText?: string;
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
   * Shows error state in case of failed validation
   */
  error?: boolean;
  /**
   * Callback function called when user the selects an option
   */
  onChange?: (event: ChangeEvent) => void;
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
    helpText,
    error,
    ...rest
  } = props;

  const ref = React.useRef<HTMLInputElement>(null);

  React.useImperativeHandle(forwardedRef, (): HTMLInputElement => {
    return ref.current as HTMLInputElement;
  });

  const RadioClass = classNames(
    {
      ['Radio']: true,
      ['Radio--disabled']: disabled,
    },
    className
  );

  const RadioWrapper = classNames({
    ['Radio-wrapper']: true,
    [`Radio-defaultWrapper`]: !error,
    [`Radio-errorWrapper`]: error,
    [`Radio-wrapper--${size}`]: size,
  });

  const RadioOuterWrapper = classNames({
    ['Radio-outerWrapper']: true,
    [`Radio-outerWrapper--${size}`]: size,
  });

  const RadioLabelClass = classNames({
    ['Radio-Label']: true,
  });

  const id = `${name}-${label}-${uidGenerator()}`;
  return (
    <div className={RadioClass} data-test="DesignSystem-Radio">
      <div className={RadioOuterWrapper} data-test="DesignSystem-Radio-OuterWrapper">
        <input
          tabIndex={-1}
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
          data-test="DesignSystem-Radio-Input"
        />
        {
          // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
          <span tabIndex={0} data-test="DesignSystem-Radio-wrapper" className={RadioWrapper} />
        }
      </div>
      <div className="Radio-labelWrapper">
        {label && (
          <label className={RadioLabelClass} htmlFor={id} data-test="DesignSystem-Radio-Label">
            <Text size={size === 'tiny' ? 'small' : 'regular'} appearance={disabled ? 'disabled' : 'default'}>
              {label}
            </Text>
          </label>
        )}
        {helpText && (
          <Text data-test="DesignSystem-Radio-HelpText" size="small" appearance={disabled ? 'disabled' : 'subtle'}>
            {helpText.trim()}
          </Text>
        )}
      </div>
    </div>
  );
});

Radio.displayName = 'Radio';

export default Radio;
