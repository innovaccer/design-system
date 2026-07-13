import * as React from 'react';

export type ContextProps = {
  setParentOpen?: React.Dispatch<React.SetStateAction<boolean | undefined>>;
  triggerRef?: React.RefObject<HTMLDivElement | null>;
  parentListRef?: React.RefObject<HTMLDivElement | null>;
  menuID?: string;
  triggerID?: string;
  parentMenuTriggerRef?: React.RefObject<HTMLButtonElement | null>;
};

export const SubMenuContext = React.createContext<ContextProps>({});

export default SubMenuContext;
