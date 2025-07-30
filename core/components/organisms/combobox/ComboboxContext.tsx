import * as React from 'react';
import { OptionType } from '@/common.type';

export type ContextProps = {
  inputValue?: OptionType;
  openPopover?: boolean;
  chipInputValue?: OptionType[];
  focusedOption?: Element;
  chipInputText?: string;
  onOptionClick?: (option: OptionType) => void;
  setInputValue?: React.Dispatch<React.SetStateAction<OptionType | undefined>>;
  setChipInputText?: React.Dispatch<React.SetStateAction<string | undefined>>;
  setOpenPopover?: React.Dispatch<React.SetStateAction<boolean>>;
  setChipInputValue?: React.Dispatch<React.SetStateAction<OptionType[] | undefined>>;
  setFocusedOption?: React.Dispatch<React.SetStateAction<HTMLElement | undefined>>;
  setHighlightFirstItem?: React.Dispatch<React.SetStateAction<boolean>>;
  setHighlightLastItem?: React.Dispatch<React.SetStateAction<boolean>>;
  inputTriggerRef?: any;
  listRef?: React.RefObject<HTMLDivElement | null>;
  multiSelect?: boolean;
  popoverId?: string;
};

export const ComboboxContext = React.createContext<ContextProps>({});

export default ComboboxContext;
