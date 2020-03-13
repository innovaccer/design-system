import * as React from 'react';
import classNames from 'classnames';
import { Size } from '@/components/atoms/button';
import Label from '@/components/atoms/label';
import Text from '@/components/atoms/text';
import Tooltip from '@/components/atoms/tooltip';

export type InputType = 'text' | 'password' | 'number';
export type AutoComplete = 'on' | 'off';

export interface IInputProps {
  name: string;
  size?: Size;
  label?: string;
  inlineLabel?: string;
  type?: InputType;
  value?: string;
  loading?: boolean;
  icon?: string;
  placeholder?: string;
  disabled?: boolean;
  required?: boolean;
  error?: boolean;
  caption?: string;
  clearButton?: boolean;
  info?: string;
  autocomplete?: AutoComplete;
  onClear?: (e: React.MouseEvent<HTMLElement>) => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClick?: (e: React.MouseEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
}

const Input = React.forwardRef<HTMLInputElement, IInputProps>((props, ref) => {
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
    ['material-icons']: true,
    ['Input-icon']: true,
    ['Input-icon--left']: true
  });

  const rightIconClass = classNames({
    ['material-icons']: true,
    ['Input-icon']: true,
    ['Input-icon--right']: true
  });

  const errorIconClass = classNames({
    ['material-icons']: true,
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
        {size !== 'tiny' && icon &&
          <i className={leftIconClass}>{icon}</i>
        }
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
            <i className={rightIconClass}>info</i>
          </Tooltip>
        )}
        {(clearButton && value && !disabled) &&
          <i className={rightIconClass} onClick={e => onClear && onClear(e)}>close</i>
        }
      </div>
      {size !== 'tiny' && caption && (
        <div className="Input-caption">
          {error &&
            <i className={errorIconClass}>error</i>
          }
          <Text appearance={error ? 'destructive' : 'subtle'} small={true} weight="medium">{`${caption}`}</Text>
        </div>
      )}
    </div>
  );
});

Input.displayName = 'Input';

export default Input;
