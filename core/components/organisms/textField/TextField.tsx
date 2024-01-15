import * as React from 'react';
import TextFieldWithTextarea, { TextFieldTextareaProps } from './TextFieldWithTextarea';
import TextFieldWithInput, { TextFieldInputProps } from './TextFieldWithInput';

export type TextFieldProps = TextFieldTextareaProps & TextFieldInputProps;

export const TextField = (props: TextFieldProps) => {
  const { withTextarea } = props;

  if (withTextarea) {
    return <TextFieldWithTextarea {...props} />;
  }

  return <TextFieldWithInput {...props} />;
};

TextField.displayName = 'TextField';

export default TextField;
