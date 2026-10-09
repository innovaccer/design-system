import React from 'react';
import { BaseProps } from "../../../utils/types";
import { TListboxSize } from "../../../common.type";
declare type TagType = 'ul' | 'ol' | 'div' | 'nav';
export interface MenuListProps extends BaseProps {
    size?: TListboxSize;
    tagName?: TagType;
    children: React.ReactNode;
}
export declare const MenuListContext: React.Context<{
    size?: "standard" | "tight" | "compressed" | undefined;
}>;
export declare const MenuList: {
    (props: MenuListProps): React.JSX.Element;
    defaultProps: {
        type: string;
        showDivider: boolean;
        tagName: string;
        size: string;
    };
};
export default MenuList;
