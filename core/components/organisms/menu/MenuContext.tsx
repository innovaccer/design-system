import * as React from 'react';

export type ContextProps = {
  openPopover?: boolean;
  setOpenPopover?: React.Dispatch<React.SetStateAction<boolean>>;
  setHighlightFirstItem?: React.Dispatch<React.SetStateAction<boolean>>;
  setHighlightLastItem?: React.Dispatch<React.SetStateAction<boolean>>;
};

export const MenuContext = React.createContext<ContextProps>({});

export default MenuContext;
