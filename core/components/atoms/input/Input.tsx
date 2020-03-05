import * as React from 'react';
import classNames from 'classnames';
import { Size } from '@/components/atoms/button';
import Label from '@/components/atoms/label';
import Text from  '@/components/atoms/text';
import Tooltip from '@/components/atoms/tooltip';

export type InputType = 'text' | 'password' | 'number';

export interface IInputProps {
  name: string;
  size?: Size;
  label?: string;
  inlineLabel?: string;
  type?: InputType;
  value?: string | number;
  loading?: boolean;
  icon?: string;
  placeholder?: string;
  disabled?: boolean;
  required?: boolean;
  error?: boolean;
  caption?: string;
  clearButton?: boolean;
  info?: string;
  onClearHandler?: (e: React.MouseEvent<HTMLElement>) => void;
  onChangeHandler?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClickHandler?: (e: React.MouseEvent<HTMLInputElement>) => void;
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
    onChangeHandler,
    onClickHandler,
    onClearHandler,
  } = props;

  const disabled = propDisabled || !onChangeHandler;

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
          onChange={e => onChangeHandler && onChangeHandler(e)}
          onClick={e => onClickHandler && onClickHandler(e)}
          required={required}
          disabled={disabled}
        />
        {((!value && !disabled) || (value && disabled)) && info && (
          <Tooltip position="top" tooltip={info}>
            <i className={rightIconClass}>info</i>
          </Tooltip>
        )}
        {(clearButton && value && !disabled) &&
          <i className={rightIconClass} onClick={e => onClearHandler && onClearHandler(e)}>close</i>
        }
      </div>
      { size !== 'tiny' && caption && (
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
