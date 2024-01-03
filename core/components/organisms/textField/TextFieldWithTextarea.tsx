import * as React from 'react';
import { Textarea, Label } from '@/index';
import { BaseProps } from '@/utils/types';
import { TextareaProps } from '@/index.type';
import { RenderHelpText, RenderCounter } from './TextFieldCommon';

export interface TextFieldWithTextareaProps extends BaseProps {
  /**
   * Label of the `Textarea`
   */
  label?: string;
  /**
   * Set as `true` to show TextField with Textarea instead of Input component.
   * Not supported in IE 11 browser.
   */
  withTextarea?: boolean;
  /**
   * It defines the maximum number of characters
   * (as UTF-16 code units) the user should ideally enter into the Textarea.
   * @default 200
   */
  max?: number;
  /**
   * Add text below
   * `Help text to be shown under the Textarea to guide expected input
   * and show error message if error occurs`
   */
  helpText?: string;
}

export type TextFieldTextareaProps = TextFieldWithTextareaProps & TextareaProps;

export const TextFieldWithTextarea = (props: TextFieldTextareaProps) => {
  const { label, rows = 3, resize = true, required, error, onChange, value = '', max = 200, helpText = ' ' } = props;

  const textareaRef = React.useRef(null);
  const [inputText, setInputText] = React.useState<string>(value);
  const [helptextWidth, setHelptextWidth] = React.useState(0);

  const onChangeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputText(e.target.value);
    if (onChange) onChange(e);
  };

  const inputError = error || inputText.length > max;

  React.useEffect(() => {
    const textarea = textareaRef.current;
    if (window.ResizeObserver) {
      const resizeObserver = new (window as any).ResizeObserver((entries: any) => {
        const entry = entries[0];
        const { offsetWidth } = entry.target;
        setHelptextWidth(offsetWidth);
      });
      textarea && resizeObserver.observe(textarea);

      return () => {
        resizeObserver.disconnect();
      };
    }
    return () => {};
  }, []);

  return (
    <div>
      {label && (
        <Label required={required} withInput={true}>
          {label}
        </Label>
      )}
      <Textarea
        {...props}
        resize={resize}
        rows={rows}
        onChange={onChangeHandler}
        error={inputError}
        ref={textareaRef}
      />
      <div className="d-flex justify-content-between" style={{ width: helptextWidth }}>
        <RenderHelpText helpText={helpText} error={inputError} />
        <RenderCounter inputText={inputText} max={max} />
      </div>
    </div>
  );
};

export default TextFieldWithTextarea;
