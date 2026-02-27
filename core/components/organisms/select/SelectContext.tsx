import * as React from 'react';
import { OptionType, TListboxSize, SelectStyleType } from '@/common.type';

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
  listRef?: React.RefObject<HTMLDivElement>;
  triggerRef?: React.RefObject<HTMLButtonElement>;
  focusedOption?: HTMLElement;
  setFocusedOption?: React.Dispatch<React.SetStateAction<HTMLElement | undefined>>;
  setHighlightFirstItem?: React.Dispatch<React.SetStateAction<boolean>>;
  setHighlightLastItem?: React.Dispatch<React.SetStateAction<boolean>>;
  size?: TListboxSize;
  styleType?: SelectStyleType;
  error?: boolean;
  /** Index of the option that has tabindex=0 (roving tabstop). -1 when none (e.g. search focused or empty list). */
  rovingIndex?: number;
};

export const SelectContext = React.createContext<ContextProps>({});

export default SelectContext;
