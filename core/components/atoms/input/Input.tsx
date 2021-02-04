import * as React from 'react';
import classNames from 'classnames';
import { Tooltip, Icon, Text } from '@/index';
import { IconProps } from '@/index.type';
import { BaseHtmlProps, BaseProps, extractBaseProps } from '@/utils/types';

export type InputType = 'text' | 'password' | 'number' | 'email' | 'tel' | 'url';
export type AutoComplete = 'on' | 'off';
export type Size = 'tiny' | 'regular' | 'large';

export interface InputProps extends BaseProps, BaseHtmlProps<HTMLInputElement> {
  /**
   * Name of the `Input`
   */
  name?: string;
  /**
   * Type of text inside `Input`
   * @default "text"
   */
  type?: InputType;
  /**
   * Value of the `Input` (Used in case of controlled `Input`)
   */
  value?: string;
  /**
   * Adds default value to `Input` (Used in case of uncontrolled `Input`)
   */
  defaultValue?: string;
  /**
   * Text to display when input is empty
   */
  placeholder?: string;
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
   * Disables the `Input`, making it unable to type
   */
  disabled?: boolean;
  /**
   * Shows the user that this field id required
   */
  required?: boolean;
  /**
   * Adds autoFocus
   */
  autoFocus?: boolean;
  /**
   * Specifies whether `input field should have autocomplete enabled **(SOON TO BE DEPRECATED)**
   */
  autocomplete?: AutoComplete;
  /**
   * Specifies whether `input field should have autocomplete enabled
   */
  autoComplete?: AutoComplete;
  /**
   * Same behaviour as `disabled` prop
   */
  readOnly?: boolean;
  /**
   * Valid for number it defines the most negative value in the range of permitted values.
   */
  min?: number;
  /**
   * Valid for text, url, tel, email, and password, it defines the maximum number of characters
   * (as UTF-16 code units) the user can enter into the field.
   */
  max?: number;
  /**
   * Valid for text, url, tel, email, and password, it defines the minimum number of characters
   * (as UTF-16 code units) the user can enter into the entry field.
   */
  minLength?: number;
  /**
   * Valid for text, url, tel, email, and password, it defines the maximum number of characters
   * (as UTF-16 code units) the user can enter into the field.
   */
  maxLength?: number;
  /**
   * The pattern attribute, when specified, is a regular expression that the input's value
   * must match in order for the value to pass constraint validation.
   */
  pattern?: string;
  /**
   * Shows error state in case of failed validation
   */
  error?: boolean;
  /**
   * Text to be rendered in info `Popover`
   */
  info?: string;
  /**
   * minimum width of `Input` component
   *
   * **No default value for `type='number'`**
   * @default 256
   */
  minWidth?: string;
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

/**
 * ###### Input has two types:
 *  - [Controlled Input](https://reactjs.org/docs/forms.html#controlled-components)
 *  - [Uncontrolled Input](https://reactjs.org/docs/uncontrolled-components.html)
 */
export const Input = React.forwardRef<HTMLInputElement, InputProps>((props, forwardedRef) => {
  const {
    size = 'regular',
    type = 'text',
    minWidth = type !== 'number' ? 256 : undefined,
    readOnly,
    defaultValue,
    name,
    placeholder,
    value,
    icon,
    inlineLabel,
    required,
    error,
    info,
    onChange,
    onClick,
    onClear,
    onBlur,
    onFocus,
    actionIcon,
    className,
    autocomplete,
    autoFocus,
    ...rest
  } = props;

  const ref = React.useRef<HTMLInputElement>(null);

  React.useImperativeHandle(forwardedRef, (): HTMLInputElement => {
    return ref.current as HTMLInputElement;
  });

  React.useEffect(() => {
    if (autoFocus) ref.current?.focus({ preventScroll: true });
  }, []);

  const autoComplete = props.autoComplete || autocomplete;
  const disabled = props.disabled || readOnly;

  const baseProps = extractBaseProps(props);

  const classes = classNames({
    ['Input']: true,
    [`Input--${size}`]: size,
    ['Input--disabled']: disabled,
    ['Input--error']: error
  }, className);

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

  return (
    <div data-test="DesignSystem-InputWrapper" className={classes} style={{ minWidth }}>
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
        data-test="DesignSystem-Input"
        {...baseProps}
        {...rest}
        ref={ref}
        name={name}
        type={type}
        defaultValue={defaultValue}
        placeholder={placeholder}
        className={inputClass}
        value={value}
        required={required}
        autoComplete={autoComplete}
        disabled={disabled}
        onChange={onChange}
        onBlur={onBlur}
        onClick={onClick}
        onFocus={onFocus}
      />
      {(!value && !disabled) || (value && disabled) || (defaultValue && disabled)
        ? (
          info && (
            <Tooltip
              position="top"
              tooltip={info}
            >
              {trigger}
            </Tooltip>
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
