import * as React from 'react';
import { Textarea, Label, HelpText, Text } from '@/index';

export interface TextFieldTextareaProps {
  /**
   * Label of the `Input`
   */
  label?: string;
  /**
   * Set as `true` to show TextField with Textarea
   */
  withTextarea?: boolean;
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
   * it defines the maximum number of characters
   * (as UTF-16 code units) the user should ideally enter into the Textarea.
   * @default 200
   */
  max?: number;
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
  /**
   * Add text below `input`
   */
  helpText?: string;
}

export const TextFieldWithTextarea = (props: TextFieldTextareaProps) => {
  const {
    label,
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
    max = 200,
    helpText = ' ',
  } = props;

  const textareaRef = React.useRef<HTMLTextAreaElement>(null);
  const divRef = React.useRef<HTMLDivElement>(null);
  const [inputText, setInputText] = React.useState<string>('');
  const [divWidth, setDivWidth] = React.useState<string>('100%');

  const updateDivWidth = () => {
    if (textareaRef.current && divRef.current) {
      const textareaComputedStyle = getComputedStyle(textareaRef.current);
      // divRef.current.style.width = textareaComputedStyle.width;
      setDivWidth(textareaComputedStyle.width);
    }
  };

  // React.useEffect(() => {
  //   updateDivWidth();
  //   window.addEventListener('resize', updateDivWidth);

  //   return () => {
  //     window.removeEventListener('resize', updateDivWidth);
  //   };
  // });

  const onChangeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputText(e.target.value);
    if (onChange) onChange(e);
  };

  const inputError = error || inputText.length > max;
  const denominator = `/${max}`;

  return (
    <div>
      {label && (
        <Label required={required} withInput={true}>
          {label}
        </Label>
      )}
      <Textarea
        resize={resize}
        name={name}
        rows={rows}
        placeholder={placeholder}
        value={value}
        defaultValue={defaultValue}
        required={required}
        disabled={disabled}
        onChange={onChangeHandler}
        onBlur={onBlur}
        onClick={onClick}
        onFocus={onFocus}
        error={inputError}
        ref={textareaRef}
        onResize={updateDivWidth}
      />
      <div className="d-flex justify-content-between" style={{ width: divWidth }}>
        <HelpText message={helpText} error={inputError} />
        <div className="mt-3 ml-6 ">
          <Text appearance="subtle" color={inputText.length > max ? 'alert' : undefined} size="small" weight="medium">
            {inputText.length}
          </Text>
          <Text appearance="subtle" size="small" weight="medium">
            {denominator}
          </Text>
        </div>
      </div>
    </div>
  );
};

export default TextFieldWithTextarea;
