import * as React from 'react';
import { BaseProps, BaseHtmlProps } from "../../../utils/types";
import { TListboxSize } from "../../../common.type";
declare type ListboxType = 'option' | 'description' | 'resource';
export declare type TagType = 'ul' | 'ol' | 'div' | 'nav';
export interface ListboxProps extends BaseProps, BaseHtmlProps<HTMLUListElement | HTMLDivElement> {
    children: React.ReactNode;
    size: TListboxSize;
    type: ListboxType;
    draggable?: boolean;
    tagName: TagType;
    showDivider: boolean;
}
export interface ListboxInternalProps extends ListboxProps {
    customFocusManagement?: boolean;
}
export declare type ListboxContextValue = Omit<ListboxInternalProps, 'children' | 'tagName'> & {
    rovingIndex: number;
    setRovingIndex: React.Dispatch<React.SetStateAction<number>>;
};
export declare const ListboxContext: React.Context<ListboxContextValue>;
export declare const Listbox: {
    (props: ListboxProps): React.JSX.Element;
    displayName: string;
    defaultProps: {
        tagName: string;
        size: string;
        type: string;
        draggable: boolean;
        showDivider: boolean;
        customFocusManagement: boolean;
    };
    Item: {
        (props: import("./listboxItem").ListboxItemProps): React.JSX.Element;
        displayName: string;
        defaultProps: {
            tagName: string;
        };
    };
};
export default Listbox;
