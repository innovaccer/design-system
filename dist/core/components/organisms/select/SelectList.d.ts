import * as React from 'react';
import { TListboxSize } from '@/common.type';
import { BaseProps } from '@/utils/types';
type TagType = 'ul' | 'ol' | 'div' | 'nav';
export interface SelectListProps extends BaseProps {
    children: React.ReactNode;
    size?: TListboxSize;
    tagName?: TagType;
    showDivider?: boolean;
}
export declare const SelectList: (props: SelectListProps) => React.JSX.Element;
export default SelectList;
