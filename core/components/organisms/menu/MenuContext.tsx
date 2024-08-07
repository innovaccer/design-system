import * as React from 'react';

export type ContextProps = {
  openPopover?: boolean;
  focusedOption?: Element;
  menuTriggerRef?: React.RefObject<HTMLButtonElement>;
  listRef?: React.RefObject<HTMLDivElement>;
  setOpenPopover?: React.Dispatch<React.SetStateAction<boolean | undefined>>;
  setHighlightFirstItem?: React.Dispatch<React.SetStateAction<boolean>>;
  setHighlightLastItem?: React.Dispatch<React.SetStateAction<boolean>>;
  setFocusedOption?: React.Dispatch<React.SetStateAction<HTMLElement | undefined>>;
};

export const MenuContext = React.createContext<ContextProps>({});

export default MenuContext;
