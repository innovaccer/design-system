import * as React from 'react';
import { Input, Label } from '@/index';
import { InputProps } from '@/index.type';
import { BaseProps } from '@/utils/types';
import { RenderHelpText, RenderCounter } from './TextFieldCommon';

export interface TextFieldWithInputProps extends BaseProps {
  /**
   * Label of the `Input`
   */
  label?: string;
  /**
   * Add text below
   * `Help text to be shown under the Input to guide expected input
   * and show error message if error occurs`
   */
  helpText?: string;
}

export type TextFieldInputProps = TextFieldWithInputProps & InputProps;

export const TextFieldWithInput = (props: TextFieldInputProps) => {
  const { label, minWidth, required, error, onChange, value = '', max = 200, helpText = ' ' } = props;

  const [inputText, setInputText] = React.useState<string>(value);

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value);
    if (onChange) onChange(event);
  };

  const inputError = error || inputText.length > max;

  return (
    <div>
      {label && (
        <Label required={required} withInput={true}>
          {label}
        </Label>
      )}
      <Input {...props} error={inputError} onChange={onChangeHandler} />
      <div className="d-flex justify-content-between" style={{ minWidth }}>
        <RenderHelpText helpText={helpText} error={inputError} />
        <RenderCounter inputText={inputText} max={max} />
      </div>
    </div>
  );
};

TextFieldWithInput.defaultProps = {
  minWidth: 256,
};

export default TextFieldWithInput;
