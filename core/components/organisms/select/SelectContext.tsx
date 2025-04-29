import * as React from 'react';
import { OptionType } from '@/common.type';

export type ContextProps = {
  openPopover?: boolean;
  setOpenPopover?: React.Dispatch<React.SetStateAction<boolean>>;
  selectValue?: OptionType | OptionType[];
  setSelectValue?: React.Dispatch<React.SetStateAction<OptionType | OptionType[]>>;
  isOptionSelected?: boolean;
  setIsOptionSelected?: React.Dispatch<React.SetStateAction<boolean>>;
  onOptionClick?: (option: OptionType | OptionType[]) => void;
  maxHeight?: number;
  minHeight?: number;
  width?: number | string;
  withSearch?: boolean;
  setWithSearch?: React.Dispatch<React.SetStateAction<boolean>>;
  multiSelect?: boolean;
  listRef?: React.RefObject<HTMLDivElement | null>;
  triggerRef?: React.RefObject<HTMLButtonElement | null>;
  focusedOption?: HTMLElement;
  setFocusedOption?: React.Dispatch<React.SetStateAction<HTMLElement | undefined>>;
  setHighlightFirstItem?: React.Dispatch<React.SetStateAction<boolean>>;
  setHighlightLastItem?: React.Dispatch<React.SetStateAction<boolean>>;
};

export const SelectContext = React.createContext<ContextProps>({});

export default SelectContext;
