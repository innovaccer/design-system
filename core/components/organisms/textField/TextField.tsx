import * as React from 'react';
import TextFieldWithTextarea, { TextFieldTextareaProps } from './TextFieldWithTextarea';
import TextFieldWithInput, { TextFieldInputProps } from './TextFieldWithInput';

export type TextFieldProps = TextFieldTextareaProps & TextFieldInputProps;

export const TextField = (props: TextFieldProps) => {
  return props.withTextarea ? <TextFieldWithTextarea {...props} /> : <TextFieldWithInput {...props} />;
};

TextField.displayName = 'TextField';
export default TextField;
