import * as React from 'react';
import classNames from 'classnames';

export interface TextAreaProps {
  /**
   * Name of the `TextArea`
   */
  name: string;
  /**
   * Value of the `TextArea`
   */
  value?: string;
  /**
   * Text to display when TextArea is empty
   */
  placeholder?: string;
  /**
   * Number of rows in `TextArea`
   */
  rows?: number;
  /**
   * Disables the `TextArea`, making it unable to type
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
   * Callback function when `TextArea` text changes
   */
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  /**
   * Handler to be called when `TextArea` is clicked
   */
  onClick?: (e: React.MouseEvent<HTMLTextAreaElement>) => void;
  /**
   * Handler to be called when `TextArea` loses focus
   */
  onBlur?: (e: React.FocusEvent<HTMLTextAreaElement>) => void;
  /**
   * Handler to be called when `TextArea` gets focus
   */
  onFocus?: (e: React.FocusEvent<HTMLTextAreaElement>) => void;
}

export const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>((props, ref) => {
  const {
    disabled: propDisabled,
    rows,
    name,
    placeholder,
    value,
    required,
    error,
    onChange,
    onClick,
    onBlur,
    onFocus
  } = props;

  const disabled = propDisabled || !onChange;

  const classes = classNames({
    ['TextArea']: true,
  });

  const TextAreaClass = classNames({
    ['TextArea-textArea']: true,
    ['TextArea-textArea--error']: error
  });

  return (
    <div className={classes}>
      <textarea
        ref={ref}
        name={name}
        rows={rows}
        placeholder={placeholder}
        className={TextAreaClass}
        value={value}
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

TextArea.displayName = 'TextArea';

export default TextArea;
