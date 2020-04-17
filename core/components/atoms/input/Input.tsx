import * as React from 'react';
import classNames from 'classnames';
// import { Size } from '@/components/atoms/button';
import Label from '@/components/atoms/label';
import Text from '@/components/atoms/text';
import Tooltip from '@/components/atoms/tooltip';
import Icon from '@/components/atoms/icon';

export type InputType = 'text' | 'password' | 'number';
export type AutoComplete = 'on' | 'off';
export type Size = 'tiny' | 'regular' | 'large';

export interface InputProps {
  /**
   * Name of the `input`
   */
  name: string;
  /**
   * Type of text inside `input`
   */
  type?: InputType;
  /**
   * Value of the `input`
   */
  value?: string;
  /**
   * Text to display when input is empty
   */
  placeholder?: string;
  /**
   * Specifies whether `input field should have autocomplete enabled
   */
  autocomplete?: AutoComplete;
  /**
   * Size of the `input`
   * @default "regular"
   */
  size?: Size;
  /**
   * Material icon name
   */
  icon?: string;
  /**
   * Text to be displayed above `input`
   */
  label?: string;
  /**
   * Label to be displayed inside `input`
   */
  inlineLabel?: string;
  /**
   * Text to be displayed below `input`
   */
  caption?: string;
  clearButton?: boolean;
  /**
   * Adds loader inside input when waiting for an action to complete
   */
  loading?: boolean;
  /**
   * Disables the `input`, making it unable to type
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
   * Text to be rendered in info `tooltip`
   * @default true
   */
  info?: string;
  /**
   * Callback function when user clicks the clear button
   */
  onClear?: (e: React.MouseEvent<HTMLElement>) => void;
  /**
   * Callback function when `input` text changes
   */
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  /**
   * Handler to be called when `input` is clicked
   */
  onClick?: (e: React.MouseEvent<HTMLInputElement>) => void;
  /**
   * Handler to be called when `input` loses focus
   */
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
}

const sizeMapping = {
  tiny: 12,
  regular: 16,
  large: 20,
};

export const Input = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const {
    size = 'regular',
    clearButton = true,
    disabled: propDisabled,
    name,
    type,
    placeholder,
    value,
    caption,
    icon,
    label,
    inlineLabel,
    required,
    error,
    info,
    autocomplete,
    onChange,
    onClick,
    onClear,
    onBlur
  } = props;

  const disabled = propDisabled || !onChange;

  const classes = classNames({
    ['Input']: true,
  });

  const inputWrapperClass = classNames({
    ['Input-wrapper']: true,
    [`Input-wrapper--${size}`]: size,
    ['Input-wrapper--disabled']: disabled,
    ['Input-wrapper--error']: error
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

  const errorIconClass = classNames({
    ['Input-icon']: true,
    ['Input-icon--error']: true
  });

  return (
    <div className={classes}>
      {size !== 'tiny' && label && (
        <div className="Input-label">
          <Label>{label}</Label>
          {required && <span />}
        </div>
      )}
      <div className={inputWrapperClass}>
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
          name={name}
          type={type}
          placeholder={placeholder}
          className={inputClass}
          ref={ref}
          value={value}
          autoComplete={autocomplete}
          onChange={e => onChange && onChange(e)}
          onBlur={e => onBlur && onBlur(e)}
          onClick={e => onClick && onClick(e)}
          required={required}
          disabled={disabled}
        />
        {((!value && !disabled) || (value && disabled)) && info && (
          <Tooltip position="top" tooltip={info}>
            <div className={rightIconClass}><Icon name={'info'} size={sizeMapping[size]} /></div>
          </Tooltip>
        )}
        {(clearButton && value && !disabled) && (
          <div className={rightIconClass} onClick={e => onClear && onClear(e)}>
            <Icon name={'close'} size={sizeMapping[size]} />
          </div>
        )}
      </div>
      {
        size !== 'tiny' && caption && (
          <div className="Input-caption">
            {error && (
              <div className={errorIconClass}>
                <Icon name={'error'} appearance={'alert'} />
              </div>
            )}
            <Text appearance={error ? 'destructive' : 'subtle'} small={true} weight="medium">{`${caption}`}</Text>
          </div>
        )
      }
    </div >
  );
});

Input.displayName = 'Input';

export default Input;
