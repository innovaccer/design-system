import * as React from 'react';
export type ContextProps = {
    setParentOpen?: React.Dispatch<React.SetStateAction<boolean | undefined>>;
    triggerRef?: React.RefObject<HTMLDivElement | null>;
    parentListRef?: React.RefObject<HTMLDivElement | null>;
    menuID?: string;
    triggerID?: string;
};
export declare const SubMenuContext: React.Context<ContextProps>;
export default SubMenuContext;
