import { Menu, ActiveMenu } from "../../../utils/navigationHelper";
export declare type LayoutType = 'vertical' | 'horizontal';
export declare type Align = 'left' | 'center';
export interface VerticalNavigationProps {
    menus: Menu[];
    active?: ActiveMenu;
    onClick?: (menu: Menu) => void;
    rounded: boolean;
    expanded: boolean;
    footer?: boolean;
    onToggle?: (expanded: boolean) => void;
    autoCollapse: boolean;
}
export declare const VerticalNavigation: {
    (props: VerticalNavigationProps): JSX.Element;
    defaultProps: {
        expanded: boolean;
        autoCollapse: boolean;
        rounded: boolean;
    };
};
export default VerticalNavigation;
