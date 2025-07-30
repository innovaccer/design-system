import * as React from 'react';
import { BaseProps } from '@/utils/types';
import { Menu } from '@/utils/navigationHelper';
export interface MenuItemProps extends BaseProps {
    menu: Menu;
    isActive: boolean;
    rounded?: boolean;
    expanded?: boolean;
    hasSubmenu?: boolean;
    isChildren?: boolean;
    isChildrenVisible?: boolean;
    onClick?: (menu: Menu) => void;
    customItemRenderer?: (props: MenuItemProps) => React.JSX.Element;
}
export declare const MenuItem: {
    (props: MenuItemProps): React.JSX.Element | null;
    displayName: string;
};
export default MenuItem;
