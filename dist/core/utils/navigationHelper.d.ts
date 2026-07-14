import { IconType } from "../common.type";
export declare type Menu = {
    name: string;
    label: string;
    link?: string;
    icon?: string;
    group?: string;
    count?: number | string;
    disabled?: boolean;
    subMenu?: Menu[];
    iconType?: IconType;
    expanded?: boolean;
};
export declare type ActiveMenu = ({
    name: string;
} | {
    link: string;
}) & Partial<Menu>;
export declare const getTextAppearance: (isActive: boolean, disabled?: boolean | undefined) => "link" | "default" | "disabled";
export declare const getIconAppearance: (isActive: boolean, disabled?: boolean | undefined) => "default" | "disabled" | "primary_dark";
export declare const getPillsAppearance: (isActive: boolean) => "secondary" | "primary";
export declare const getMenu: (menus: Menu[], active: ActiveMenu) => Menu | null;
export declare const getExpandedMenus: (menus: Menu[], active?: ({
    name: string;
} & Partial<Menu>) | ({
    link: string;
} & Partial<Menu>) | undefined) => Record<string, boolean>;
export declare const isMenuActive: (menus: Menu[], menu: Menu, active?: ({
    name: string;
} & Partial<Menu>) | ({
    link: string;
} & Partial<Menu>) | undefined) => boolean;
export declare const getNavItemColor: (isActive: boolean, disabled?: boolean | undefined) => "inverse" | "primary-dark" | "inverse-lightest";
export declare const formatCount: (count: number | string) => string;
