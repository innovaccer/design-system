import React from 'react';
import { Menu } from "../../../utils/navigationHelper";
export declare const getVisibleMenuItems: (container: HTMLElement | null) => HTMLElement[];
export interface VerticalNavKeyDownOptions {
    containerRef: React.RefObject<HTMLElement | null>;
    setFocusedItemName: React.Dispatch<React.SetStateAction<string | null>>;
    menuState: Record<string, boolean>;
    subMenuExpandedState: Record<string, boolean>;
    setMenuState: React.Dispatch<React.SetStateAction<Record<string, boolean>>>;
    setSubMenuExpandedState: React.Dispatch<React.SetStateAction<Record<string, boolean>>>;
    menus: Menu[];
    expanded: boolean;
    autoCollapse: boolean;
}
export declare const handleVerticalNavKeyDown: (event: React.KeyboardEvent, options: VerticalNavKeyDownOptions) => void;
export declare const getFirstVisibleMenuItemName: (menus: Menu[], expanded: boolean) => string | null;
export declare const getInitialFocusedItemName: (menus: Menu[], active: {
    name?: string;
    link?: string;
} | undefined, menuState: Record<string, boolean>, subMenuExpandedState: Record<string, boolean>, expanded: boolean) => string | null;
