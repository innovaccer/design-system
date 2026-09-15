import React from 'react';
import { BaseProps } from '@/utils/types';
import { TListboxSize } from '@/common.type';
type TagType = 'ul' | 'ol' | 'div' | 'nav';
export interface MenuListProps extends BaseProps {
    size?: TListboxSize;
    tagName?: TagType;
    children: React.ReactNode;
}
export declare const MenuListContext: React.Context<{
    size?: TListboxSize;
}>;
export declare const MenuList: (props: MenuListProps) => React.JSX.Element;
export default MenuList;
