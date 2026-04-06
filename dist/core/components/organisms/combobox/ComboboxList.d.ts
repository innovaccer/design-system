import * as React from 'react';
import { BaseProps } from '@/utils/types';
import { TListboxSize } from '@/common.type';
type TagType = 'ul' | 'ol' | 'div' | 'nav';
export interface ComboboxListProps extends BaseProps {
    children: React.ReactNode;
    size?: TListboxSize;
    tagName?: TagType;
    showDivider?: boolean;
}
export declare const ComboboxList: (props: ComboboxListProps) => React.JSX.Element;
export default ComboboxList;
