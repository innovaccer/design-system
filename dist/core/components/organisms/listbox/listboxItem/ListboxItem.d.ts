import * as React from 'react';
import { BaseProps, BaseHtmlProps } from "../../../../utils/types";
export declare type ItemTagType = 'li' | 'div';
export interface ListboxItemProps extends BaseProps, BaseHtmlProps<HTMLLIElement | HTMLDivElement> {
    children: React.ReactNode;
    nestedBody?: React.ReactNode;
    expanded?: boolean;
    disabled?: boolean;
    selected?: boolean;
    activated?: boolean;
    id?: string;
    value?: string;
    tagName: ItemTagType;
    onClick?: (e: React.MouseEvent, id?: string, value?: string) => void;
}
export declare const ListboxItem: {
    (props: ListboxItemProps): JSX.Element;
    displayName: string;
    defaultProps: {
        tagName: string;
    };
};
export default ListboxItem;
