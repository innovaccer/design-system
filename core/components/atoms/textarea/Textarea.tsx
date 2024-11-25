import * as React from 'react';
import classNames from 'classnames';
import { BaseHtmlProps, BaseProps } from '@/utils/types';
import styles from '@css/components/textarea.module.css';

export interface TextareaProps extends BaseProps, BaseHtmlProps<HTMLTextAreaElement> {
  /**
   * Name of the `Textarea`
   */
  name?: string;
  /**
   * Value of the `Textarea`
   */
  value?: string;
  /**
   * Adds default value to `Input`
   */
  defaultValue?: string;
  /**
   * Text to display when Textarea is empty
   */
  placeholder?: string;
  /**
   * Number of rows in `Textarea`
   * @default 3
   */
  rows?: number;
  /**
   * Disables the `Textarea`, making it unable to type
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
   * Disable the resizable property of a `Textarea`
   */
  resize?: boolean;
  /**
   * Disables the `Textarea`, making it unable to type
   */
  readOnly?: boolean;
  /**
   * Callback function when `Textarea` text changes
   */
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  /**
   * Handler to be called when `Textarea` is clicked
   */
  onClick?: (e: React.MouseEvent<HTMLTextAreaElement>) => void;
  /**
   * Handler to be called when `Textarea` loses focus
   */
  onBlur?: (e: React.FocusEvent<HTMLTextAreaElement>) => void;
  /**
   * Handler to be called when `Textarea` gets focus
   */
  onFocus?: (e: React.FocusEvent<HTMLTextAreaElement>) => void;
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>((props, ref) => {
  const {
    rows = 3,
    resize = true,
    disabled,
    name,
    placeholder,
    value,
    defaultValue,
    required,
    error,
    onChange,
    onClick,
    onBlur,
    onFocus,
    className,
    readOnly,
    ...rest
  } = props;

  const classes = classNames(
    {
      [styles.Textarea]: true,
      [styles['Textarea--resize']]: resize,
      [styles['Textarea--error']]: error,
      [styles['Textarea--readOnly']]: readOnly,
    },
    className
  );

  return (
    <textarea
      data-test="DesignSystem-Textarea"
      {...rest}
      ref={ref}
      name={name}
      rows={rows}
      placeholder={placeholder}
      className={classes}
      value={value}
      defaultValue={defaultValue}
      required={required}
      disabled={disabled}
      onChange={onChange}
      onBlur={onBlur}
      onClick={onClick}
      onFocus={onFocus}
    />
  );
});

Textarea.displayName = 'Textarea';

export default Textarea;
