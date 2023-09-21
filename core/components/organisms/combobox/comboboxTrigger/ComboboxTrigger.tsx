import * as React from 'react';
import { InputProps, ChipInputProps } from '@/index.type';
import { InputBox } from './InputBox';
import { ChipInputBox } from './ChipInputBox';

interface ComboboxTriggerProps {
  inputOptions?: InputProps;
  chipInputOptions?: ChipInputProps;
  multiSelect?: boolean;
}

export const ComboboxTrigger = (props: ComboboxTriggerProps) => {
  const { multiSelect, inputOptions, chipInputOptions } = props;
  if (multiSelect) {
    return <ChipInputBox defaultValue={[]} chipOptions={{}} {...chipInputOptions} />;
  }

  return <InputBox {...inputOptions} />;
};

export default ComboboxTrigger;
