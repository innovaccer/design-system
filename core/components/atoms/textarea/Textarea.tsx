import * as React from 'react';
import classNames from 'classnames';

export interface TextareaProps {
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
    disabled,
    rows,
    name,
    placeholder,
    value,
    defaultValue,
    required,
    error,
    onChange,
    onClick,
    onBlur,
    onFocus
  } = props;

  const classes = classNames({
    ['Textarea']: true,
  });

  const TextareaClass = classNames({
    ['Textarea-textarea']: true,
    ['Textarea-textarea--error']: error
  });

  return (
    <div className={classes}>
      <textarea
        ref={ref}
        name={name}
        rows={rows}
        placeholder={placeholder}
        className={TextareaClass}
        value={value}
        defaultValue={defaultValue}
        required={required}
        disabled={disabled}
        onChange={onChange}
        onBlur={onBlur}
        onClick={onClick}
        onFocus={onFocus}
      />
    </div >
  );
});

Textarea.displayName = 'Textarea';

export default Textarea;
