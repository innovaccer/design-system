import * as React from 'react';
import { Input, Label, HelpText, Text } from '@/index';
import { IconProps } from '@/index.type';
import { AutoComplete } from '@/common.type';
import { BaseProps } from '@/utils/types';

export type InputSize = 'tiny' | 'regular' | 'large';

export interface TextFieldInputProps extends BaseProps {
  /**
   * Label of the `Input`
   */
  label?: string;
  /**
   * Name of the `Input`
   */
  name?: string;
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
   * it defines the maximum number of characters
   * (as UTF-16 code units) the user should ideally enter into the field.
   * @default 200
   */
  max?: number;
  /**
   * it defines the minimum number of characters
   * (as UTF-16 code units) the user can enter into the entry field.
   */
  minLength?: number;
  /**
   * it defines the maximum number of characters
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
  /**
   * Add text below `input`
   */
  helpText?: string;
}

export const TextFieldWithInput = (props: TextFieldInputProps) => {
  const {
    label,
    size,
    minWidth,
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
    autoFocus,
    disabled,
    readOnly,
    autoComplete,
    minLength,
    maxLength,
    max = 200,
    pattern,
    helpText = ' ',
  } = props;

  const [inputText, setInputText] = React.useState<string>('');

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
    if (onChange) onChange(e);
  };

  const inputError = error || inputText.length > max;
  const denominator = `/${max}`;

  return (
    <>
      {label && (
        <Label required={required} withInput={true}>
          {label}
        </Label>
      )}
      <Input
        size={size}
        minWidth={minWidth}
        defaultValue={defaultValue}
        name={name}
        placeholder={placeholder}
        value={value}
        icon={icon}
        inlineLabel={inlineLabel}
        error={inputError}
        info={info}
        onChange={onChangeHandler}
        onClick={onClick}
        onClear={onClear}
        onBlur={onBlur}
        onFocus={onFocus}
        onPaste={onPaste}
        actionIcon={actionIcon}
        autoFocus={autoFocus}
        disabled={disabled}
        readOnly={readOnly}
        autoComplete={autoComplete}
        minLength={minLength}
        maxLength={maxLength}
        pattern={pattern}
      />
      <div className="d-flex justify-content-between" style={{ minWidth }}>
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
    </>
  );
};

TextFieldWithInput.defaultProps = {
  minWidth: 256,
};

export default TextFieldWithInput;
