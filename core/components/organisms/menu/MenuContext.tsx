import * as React from 'react';

export type ContextProps = {
  openPopover?: boolean;
  focusedOption?: Element;
  menuTriggerRef?: any;
  listRef?: React.RefObject<HTMLDivElement>;
  setOpenPopover?: React.Dispatch<React.SetStateAction<boolean>>;
  setHighlightFirstItem?: React.Dispatch<React.SetStateAction<boolean>>;
  setHighlightLastItem?: React.Dispatch<React.SetStateAction<boolean>>;
  setFocusedOption?: React.Dispatch<React.SetStateAction<HTMLElement | undefined>>;
  triggerName?: string;
  targetMenu?: string;
  triggerRef?: React.ReactElement;
};

export const MenuContext = React.createContext<ContextProps>({});

export default MenuContext;
