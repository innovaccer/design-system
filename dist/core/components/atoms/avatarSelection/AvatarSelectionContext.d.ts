import * as React from 'react';
import { AvatarData } from "./AvatarSelection";
export declare type ContextProps = {
    listRef?: React.RefObject<HTMLDivElement>;
    onSelect?: (data?: AvatarData) => void;
    withSearch?: boolean;
    triggerRef?: React.LegacyRef<HTMLDivElement>;
    selectedItems: AvatarData[];
    focusedOption?: HTMLElement;
    setSelectedItems?: React.Dispatch<React.SetStateAction<AvatarData[]>>;
    setFocusedOption?: React.Dispatch<React.SetStateAction<HTMLElement | undefined>>;
    setHighlightFirstItem?: React.Dispatch<React.SetStateAction<boolean>>;
    setHighlightLastItem?: React.Dispatch<React.SetStateAction<boolean>>;
    setOpenPopover?: React.Dispatch<React.SetStateAction<boolean>>;
    openPopover?: boolean;
    popoverId?: string;
};
export declare const AvatarSelectionContext: React.Context<Partial<ContextProps>>;
export default AvatarSelectionContext;
