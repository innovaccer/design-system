import { IconType } from '@/common.type';
export type Menu = {
    name: string;
    label: string;
    link?: string;
    icon?: string;
    group?: string;
    count?: number;
    disabled?: boolean;
    subMenu?: Menu[];
    iconType?: IconType;
    expanded?: boolean;
};
export type ActiveMenu = ({
    name: string;
} | {
    link: string;
}) & Partial<Menu>;
export declare const getTextAppearance: (isActive: boolean, disabled?: boolean) => "link" | "default" | "disabled";
export declare const getIconAppearance: (isActive: boolean, disabled?: boolean) => "default" | "disabled" | "primary_dark";
export declare const getPillsAppearance: (isActive: boolean) => "secondary" | "primary";
export declare const getMenu: (menus: Menu[], active: ActiveMenu) => Menu | null;
export declare const getExpandedMenus: (menus: Menu[], active?: ActiveMenu) => Record<string, boolean>;
export declare const isMenuActive: (menus: Menu[], menu: Menu, active?: ActiveMenu) => boolean;
export declare const getNavItemColor: (isActive: boolean, disabled?: boolean) => "inverse" | "primary-dark" | "inverse-lightest";
