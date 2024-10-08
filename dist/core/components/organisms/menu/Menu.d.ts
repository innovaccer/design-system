import React from 'react';
import { BaseProps } from "../../../utils/types";
import { PopoverProps } from "../../../index.type";
export interface MenuProps extends BaseProps {
    children: React.ReactNode;
    open?: boolean;
    position: PopoverProps['position'];
    trigger?: React.ReactElement;
    maxHeight?: number;
    minHeight?: number;
    width?: number;
    triggerCoordinates?: {
        x: number;
        y: number;
    };
    onToggle?: (open?: boolean) => void;
}
export declare const Menu: {
    (props: MenuProps): JSX.Element;
    Group: {
        (props: import("./MenuGroup").MenuGroupProps): JSX.Element;
        defaultProps: {
            showDivider: boolean;
        };
    };
    Item: {
        (props: import("./MenuItem").MenuItemProps): JSX.Element;
        displayName: string;
        defaultProps: {
            tagName: string;
        };
    };
    List: {
        (props: import("./MenuList").MenuListProps): JSX.Element;
        defaultProps: {
            type: string;
            showDivider: boolean;
            tagName: string;
            size: string;
        };
    };
    Trigger: (props: import("./trigger/MenuTrigger").MenuTriggerProps) => JSX.Element;
    SubMenu: (props: import("./SubMenu").SubMenuProps) => JSX.Element;
    defaultProps: {
        width: number;
        maxHeight: number;
        position: string;
    };
};
export default Menu;
