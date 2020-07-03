/// <reference types="react" />
import { BaseProps } from '@/utils/types';
export declare type LayoutType = 'vertical' | 'horizontal';
export declare type Menu = {
    name: string;
    label: string;
    link?: string;
    icon?: string;
    disabled?: boolean;
    subMenu?: Menu[];
};
declare type ActiveMenu = ({
    name: string;
} | {
    link: string;
}) & Partial<Menu>;
export interface NavigationProps extends BaseProps {
    type?: LayoutType;
    data: Menu[];
    active?: ActiveMenu;
    onClick?: (menu: Menu) => void;
    expanded?: boolean;
    footer?: boolean;
    onToggle?: (expanded: boolean) => void;
    autoCollapse: boolean;
}
export declare const Navigation: {
    (props: NavigationProps): JSX.Element;
    defaultProps: {
        type: string;
        data: never[];
        expanded: boolean;
        footer: boolean;
        autoCollapse: boolean;
    };
};
export default Navigation;
