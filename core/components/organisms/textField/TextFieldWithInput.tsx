import * as React from 'react';
import { Input, Label } from '@/index';
import { InputProps } from '@/index.type';
import { BaseProps } from '@/utils/types';
import uidGenerator from '@/utils/uidGenerator';
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
  const { label, minWidth, required, error, onChange, value = '', max = 200, helpText = ' ', size = 'regular' } = props;

  const [inputText, setInputText] = React.useState<string>(value);

  const fieldIdRef = React.useRef<string>(`TextField-input-${uidGenerator()}`);
  const fieldId = props.id || fieldIdRef.current;

  const helpTextIdRef = React.useRef<string | null>(null);
  if (helpTextIdRef.current === null) {
    helpTextIdRef.current = `TextField-helpText-${uidGenerator()}`;
  }
  const helpTextId = helpTextIdRef.current;

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value);
    if (onChange) onChange(event);
  };

  const inputError = error || inputText.length > max;

  const labelSize = size === 'tiny' ? 'small' : 'regular';

  const hasHelpText = inputError || helpText.trim().length > 0;
  const resolvedDescribedBy =
    [props['aria-describedby'], hasHelpText ? helpTextId : undefined].filter(Boolean).join(' ') || undefined;

  return (
    <div>
      {label && (
        <Label required={required} withInput={true} size={labelSize} htmlFor={fieldId}>
          {label}
        </Label>
      )}
      <Input
        {...props}
        id={fieldId}
        error={inputError}
        onChange={onChangeHandler}
        aria-describedby={resolvedDescribedBy}
      />
      <div className="d-flex justify-content-between" style={{ minWidth }}>
        <RenderHelpText helpText={helpText} error={inputError} id={helpTextId} />
        <RenderCounter inputText={inputText} max={max} />
      </div>
    </div>
  );
};

TextFieldWithInput.defaultProps = {
  minWidth: 256,
};

export default TextFieldWithInput;
