import * as React from 'react';
import classNames from 'classnames';
// import { Size } from '@/components/atoms/button';
import Text from '@/components/atoms/text';
import Popover from '@/components/molecules/popover';
import Icon, { IconProps } from '@/components/atoms/icon';

export type InputType = 'text' | 'password' | 'number' | 'email' | 'tel' | 'url';
export type AutoComplete = 'on' | 'off';
export type Size = 'tiny' | 'regular' | 'large';

export interface InputProps {
  /**
   * Name of the `Input`
   */
  name?: string;
  /**
   * Type of text inside `Input`
   */
  type?: InputType;
  /**
   * Value of the `Input`
   */
  value?: string;
  /**
   * Adds default value to `Input`
   */
  defaultValue?: string;
  /**
   * Text to display when input is empty
   */
  placeholder?: string;
  /**
   * Specifies whether `input field should have autocomplete enabled
   */
  autocomplete?: AutoComplete;
  /**
   * Size of the `Input`
   * @default "regular"
   */
  size?: Size;
  /**
   * Material icon name
   */
  icon?: string;
  /**
   * Label to be displayed inside `Input`
   */
  inlineLabel?: string;
  /**
   * Adds loader inside input when waiting for an action to complete
   */
  loading?: boolean;
  /**
   * Disables the `Input`, making it unable to type
   *
   * **set to `true` if onChange is not provided**
   */
  disabled?: boolean;
  /**
   * Shows the user that this field id required
   */
  required?: boolean;
  /**
   * Shows error state in case of failed validation
   */
  error?: boolean;
  /**
   * Text to be rendered in info `Popover`
   * @default true
   */
  info?: string;
  /**
   * Adds autoFocus
   */
  autoFocus?: boolean;
  /**
   * Callback function when user clicks the clear button
   */
  onClear?: (e: React.MouseEvent<HTMLElement>) => void;
  /**
   * Callback function when `Input` text changes
   */
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  /**
   * Handler to be called when `Input` is clicked
   */
  onClick?: (e: React.MouseEvent<HTMLInputElement>) => void;
  /**
   * Handler to be called when `Input` loses focus
   */
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  /**
   * Handler to be called when `Input` gets focus
   */
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  /**
   * Custom Icon Component to be passed to Input to replace Clear Icon in the right
   */
  actionIcon?: React.ReactElement<IconProps>;
}

const sizeMapping = {
  tiny: 12,
  regular: 16,
  large: 20,
};

export const Input = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const {
    size = 'regular',
    type = 'text',
    disabled,
    defaultValue,
    name,
    placeholder,
    value,
    icon,
    inlineLabel,
    required,
    error,
    info,
    autocomplete,
    autoFocus,
    onChange,
    onClick,
    onClear,
    onBlur,
    onFocus,
    actionIcon
  } = props;

  const classes = classNames({
    ['Input']: true,
    [`Input--${size}`]: size,
    ['Input--disabled']: disabled,
    ['Input--error']: error
  });

  const inputClass = classNames({
    ['Input-input']: true,
    [`Input-input--${size}`]: size,
  });

  const leftIconClass = classNames({
    ['Input-icon']: true,
    ['Input-icon--left']: true,
    ['Input-icon--disabled']: !value
  });

  const rightIconClass = classNames({
    ['Input-icon']: true,
    ['Input-icon--right']: true
  });

  const trigger = <div className={rightIconClass}><Icon name={'info'} size={sizeMapping[size]} /></div>;

  const popoverStyle = {
    padding: 'var(--spacing) var(--spacing-2)',
    maxWidth: 'var(--spacing-9)',
    overflow: 'hidden'
  };

  return (
    <div className={classes}>
      {inlineLabel && (
        <div className="Input-inlineLabel">
          <Text appearance="subtle">{inlineLabel}</Text>
        </div>
      )}
      {size !== 'tiny' && icon && (
        <div className={leftIconClass}>
          <Icon
            name={icon}
            size={sizeMapping[size]}
          />
        </div>
      )}
      <input
        ref={ref}
        name={name}
        type={type}
        defaultValue={defaultValue}
        placeholder={placeholder}
        className={inputClass}
        value={value}
        autoComplete={autocomplete}
        required={required}
        disabled={disabled}
        onChange={onChange}
        onBlur={onBlur}
        onClick={onClick}
        onFocus={onFocus}
        autoFocus={autoFocus}
      />
      {(!value && !disabled) || (value && disabled) || (defaultValue && disabled)
        ? (
          info && (
            <Popover
              style={popoverStyle}
              position="top"
              on={'hover'}
              trigger={trigger}
              dark={true}
            >
              {info}
            </Popover>
          )
        ) : (
          actionIcon
            ? (
              actionIcon
            ) : (
              (onClear && value && !disabled) && (
                <div className={rightIconClass} onClick={e => onClear(e)}>
                  <Icon name={'close'} size={sizeMapping[size]} />
                </div>
              )
            )
        )
      }
    </div>
  );
});

Input.displayName = 'Input';

export default Input;
