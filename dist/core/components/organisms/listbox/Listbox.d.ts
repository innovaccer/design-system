import * as React from 'react';
import { BaseProps, BaseHtmlProps } from '@/utils/types';
import { TListboxSize } from '@/common.type';
type ListboxType = 'option' | 'description' | 'resource';
export type TagType = 'ul' | 'ol' | 'div' | 'nav';
export type ListboxProps = {
    children: React.ReactNode;
    size?: TListboxSize;
    type?: ListboxType;
    draggable?: boolean;
    tagName?: TagType;
    showDivider?: boolean;
} & BaseProps & BaseHtmlProps<HTMLUListElement | HTMLDivElement>;
export interface ListboxInternalProps extends ListboxProps {
    customFocusManagement?: boolean;
}
export type ListboxContextValue = Omit<ListboxInternalProps, 'children' | 'tagName'> & {
    rovingIndex: number;
    setRovingIndex: React.Dispatch<React.SetStateAction<number>>;
};
export declare const ListboxContext: React.Context<ListboxContextValue>;
export declare const Listbox: {
    (props: ListboxInternalProps): React.JSX.Element;
    displayName: string;
    Item: {
        (props: import("./listboxItem").ListboxItemProps): React.JSX.Element;
        displayName: string;
    };
};
export default Listbox;
