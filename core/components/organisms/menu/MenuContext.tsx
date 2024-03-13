import * as React from 'react';

export type ContextProps = {
  openPopover?: boolean;
};

export const MenuContext = React.createContext<ContextProps>({});

export default MenuContext;
