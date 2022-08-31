export declare type Menu = {
    name: string;
    label: string;
    link?: string;
    icon?: string;
    group?: string;
    count?: number;
    disabled?: boolean;
    subMenu?: Menu[];
};
export declare type ActiveMenu = ({
    name: string;
} | {
    link: string;
}) & Partial<Menu>;
export declare const getTextAppearance: (isActive: boolean, disabled?: boolean | undefined) => "default" | "disabled" | "link";
export declare const getIconAppearance: (isActive: boolean, disabled?: boolean | undefined) => "default" | "disabled" | "info";
export declare const getPillsAppearance: (isActive: boolean) => "primary" | "secondary";
export declare const getMenu: (menus: Menu[], active: ActiveMenu) => Menu | null;
export declare const isMenuActive: (menus: Menu[], menu: Menu, active?: ({
    name: string;
} & Partial<Menu>) | ({
    link: string;
} & Partial<Menu>) | undefined) => boolean;
