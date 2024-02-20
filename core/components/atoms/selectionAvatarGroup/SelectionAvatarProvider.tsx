import * as React from 'react';
import { AvatarData } from './SelectionAvatarGroup';

export type ContextProps = {
  listRef?: any;
  onSelect?: (data?: AvatarData) => void;
  withSearch?: boolean;
  triggerRef?: any;
  selectedItems: AvatarData[];
  focusedOption?: Element;
  setSelectedItems?: React.Dispatch<React.SetStateAction<AvatarData[]>>;
  setFocusedOption?: React.Dispatch<React.SetStateAction<Element | undefined>>;
  setHighlightFirstItem?: React.Dispatch<React.SetStateAction<boolean>>;
  setHighlightLastItem?: React.Dispatch<React.SetStateAction<boolean>>;
  setOpenPopover?: React.Dispatch<React.SetStateAction<boolean>>;
};

export const SelectionAvatarContext = React.createContext<ContextProps>({
  selectedItems: [],
});

export default SelectionAvatarContext.Provider;
