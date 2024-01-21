import * as React from 'react';
import { OptionType } from '@/common.type';

export type ContextProps = {
  inputValue?: string;
  openPopover?: boolean;
  chipInputValue?: (string | OptionType)[];
  focusedOption?: Element;
  inputText?: string;
  onOptionClick?: (option: OptionType) => void;
  setInputValue?: React.Dispatch<React.SetStateAction<string>>;
  setInputText?: React.Dispatch<React.SetStateAction<string>>;
  setOpenPopover?: React.Dispatch<React.SetStateAction<boolean>>;
  setChipInputValue?: React.Dispatch<React.SetStateAction<(string | OptionType)[]>>;
  setFocusedOption?: React.Dispatch<React.SetStateAction<Element | undefined>>;
  setHighlightFirstItem?: any;
  setHighlightLastItem?: any;
  inputTriggerRef?: React.MutableRefObject<React.Ref<HTMLInputElement>>;
  multiSelect?: boolean;
  // inputTriggerRef?: React.RefObject<HTMLInputElement | null>;
  // inputTriggerRef?: React.Ref<HTMLInputElement>;
};

export const ComboboxContext = React.createContext<ContextProps>({});

export default ComboboxContext.Provider;
