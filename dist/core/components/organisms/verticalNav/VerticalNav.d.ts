import * as React from 'react';
import { MenuItemProps } from './MenuItem';
import { BaseProps } from '@/utils/types';
import { ActiveMenu, Menu } from '@/utils/navigationHelper';
export type VerticalNavProps = {
    menus: Menu[];
    active?: ActiveMenu;
    onClick?: (menu: Menu) => void;
    rounded?: boolean;
    expanded?: boolean;
    autoCollapse?: boolean;
    customItemRenderer?: (props: MenuItemProps) => React.JSX.Element;
    showTooltip?: boolean;
} & BaseProps;
export declare const VerticalNav: {
    (props: VerticalNavProps): React.JSX.Element;
    defaultProps: {
        showTooltip: boolean;
    };
};
export default VerticalNav;
