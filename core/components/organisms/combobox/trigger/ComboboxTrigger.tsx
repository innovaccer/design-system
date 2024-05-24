import * as React from 'react';
import { InputBox } from './InputBox';
import { ChipInputBox } from './ChipInputBox';
import { ComboboxInputSize } from '../Combobox';
import { OptionType, IconType } from '@/common.type';

interface ComboboxTriggerProps {
  multiSelect?: boolean;
  value?: OptionType;
  placeholder?: string;
  disabled?: boolean;
  error?: boolean;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onClear?: (event: React.MouseEvent<HTMLElement, MouseEvent> | React.KeyboardEvent<HTMLElement>) => void;
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  onKeyUp?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  icon?: string;
  iconType?: IconType;
  size?: ComboboxInputSize;
  chipValue?: OptionType[];
  clearButton?: boolean;
}

export const ComboboxTrigger = (props: ComboboxTriggerProps) => {
  const { multiSelect, chipValue, value, ...rest } = props;
  if (multiSelect) {
    const { icon, clearButton, iconType } = props;

    const chipInputOptions = {
      icon,
      clearButton,
      iconType,
    };

    return <ChipInputBox defaultValue={[]} chipOptions={{ ...chipInputOptions }} {...rest} value={chipValue} />;
  }

  return <InputBox {...props} value={value?.label} />;
};

export default ComboboxTrigger;
