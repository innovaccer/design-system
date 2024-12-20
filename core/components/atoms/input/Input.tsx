import * as React from 'react';
import classNames from 'classnames';
import { Tooltip, Icon, Text } from '@/index';
import { IconProps } from '@/index.type';
import { BaseHtmlProps, BaseProps, extractBaseProps } from '@/utils/types';
import { AutoComplete, IconType } from '@/common.type';
import ActionButton from './actionButton';
import styles from '@css/components/input.module.css';
import verificationCodeStyles from '@css/components/verificationCodeInput.module.css';

export type InputType = 'text' | 'password' | 'number' | 'email' | 'tel' | 'url';
export type InputSize = 'tiny' | 'regular' | 'large';

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
   * Text to display when input is empty.
   * Incase a label is missing, a placeholder should be provided to make it accessible for all user.
   */
  placeholder?: string;
  /**
   * Size of the `Input`
   * @default "regular"
   */
  size?: InputSize;
  /**
   * Material icon name
   */
  icon?: string;
  /**
   * Set type of Icon
   */
  iconType?: IconType;
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
   * Specifies whether `input field should have autocomplete enabled
   */
  autoComplete?: AutoComplete;
  /**
   * Disables the `Input`, making it unable to type
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
  onClear?: (e: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>) => void;
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
   * Handler to be called when paste event occur inside `Input`
   */
  onPaste?: React.ClipboardEventHandler<HTMLInputElement>;
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
    onPaste,
    actionIcon,
    className,
    autoFocus,
    disabled,
    readOnly,
    iconType,
    ...rest
  } = props;

  const ref = React.useRef<HTMLInputElement>(null);
  const [isInputBlank, setIsInputBlank] = React.useState<boolean>(!value);

  React.useImperativeHandle(forwardedRef, (): HTMLInputElement => {
    return ref.current as HTMLInputElement;
  });

  React.useEffect(() => {
    if (autoFocus) ref.current?.focus({ preventScroll: true });
  }, []);

  React.useEffect(() => {
    if (ref.current && value !== undefined) {
      const element = ref.current as HTMLInputElement;
      try {
        const cursorPosition = element.value.length;
        element.setSelectionRange(cursorPosition, cursorPosition);
      } catch (error) {
        console.error('Error setting selection range:', error);
      }
    }
  }, [type]);

  const baseProps = extractBaseProps(props);

  const classes = classNames(
    {
      [styles['Input']]: true,
      [styles[`Input--${size}`]]: size,
      [styles['Input--disabled']]: disabled,
      [styles['Input--error']]: error,
      [styles['Input--readOnly']]: readOnly,
    },
    className
  );

  const inputClass = classNames({
    [styles['Input-input']]: true,
    [verificationCodeStyles['Input-input']]: true,
    [styles[`Input-input--${size}`]]: size,
  });

  const leftIconClass = classNames({
    [styles['Input-icon']]: true,
    [styles['Input-icon--left']]: true,
    [styles['Input-icon--inputBlank']]: isInputBlank,
    [styles['Input-icon--error']]: error,
  });

  const rightIconClass = classNames({
    [styles['Input-icon']]: true,
    [styles['Input-iconWrapper--right']]: true,
  });

  const trigger = (
    <div
      className={rightIconClass} // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
      tabIndex={0}
    >
      <Icon name={'info'} size={sizeMapping[size]} className={styles['Input-icon--right']} />
    </div>
  );

  return (
    <div
      data-test="DesignSystem-InputWrapper"
      className={classes}
      style={{ minWidth }}
      onClick={() => ref.current?.focus()}
      role="presentation"
      onBlur={() => setIsInputBlank(!ref.current?.value)}
    >
      {inlineLabel && (
        <div className={styles['Input-inlineLabel']}>
          <Text appearance="subtle">{inlineLabel}</Text>
        </div>
      )}
      {size !== 'tiny' && icon && (
        <div className={leftIconClass}>
          <Icon name={icon} size={sizeMapping[size]} type={iconType} />
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
        disabled={disabled}
        readOnly={readOnly}
        onChange={onChange}
        onBlur={onBlur}
        onClick={onClick}
        onFocus={onFocus}
        onPaste={onPaste}
        /**
         *for readOnly: true, tab focus from input element is removed. Hence, its tabIndex is set to -1.
         *For rest, "undefined" lets user agent(browser) use the default tabIndex.
         */
        tabIndex={readOnly ? -1 : undefined}
      />
      {disabled ? (
        ''
      ) : info ? (
        <Tooltip position="bottom" tooltip={info}>
          {trigger}
        </Tooltip>
      ) : actionIcon && (value || defaultValue) ? (
        actionIcon
      ) : (
        onClear &&
        (value || defaultValue) && (
          <div className={rightIconClass}>
            <Icon
              data-test="DesignSystem-Input--closeIcon"
              onClick={(e) => {
                ref.current?.focus({ preventScroll: true });
                onClear(e);
              }}
              name={'close'}
              size={sizeMapping[size]}
              className={styles['Input-icon--right']}
            />
          </div>
        )
      )}
    </div>
  );
});

Input.displayName = 'Input';
const ActionInput = Object.assign(Input, { ActionButton: ActionButton });

export default ActionInput;
