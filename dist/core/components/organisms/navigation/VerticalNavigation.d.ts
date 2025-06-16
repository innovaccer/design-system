import * as React from 'react';
import { Menu, ActiveMenu } from '@/utils/navigationHelper';
export type LayoutType = 'vertical' | 'horizontal';
export type Align = 'left' | 'center';
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
    (props: VerticalNavigationProps): React.JSX.Element;
    defaultProps: {
        expanded: boolean;
        autoCollapse: boolean;
        rounded: boolean;
    };
};
export default VerticalNavigation;
