import * as React from 'react';
import { BaseProps, BaseHtmlProps } from '@/utils/types';
export type ItemTagType = 'li' | 'div' | 'a';
export interface ListboxItemProps extends BaseProps, BaseHtmlProps<HTMLLIElement | HTMLDivElement | HTMLAnchorElement> {
    children: React.ReactNode;
    nestedBody?: React.ReactNode;
    expanded?: boolean;
    disabled?: boolean;
    selected?: boolean;
    activated?: boolean;
    id?: string;
    value?: any;
    tagName?: ItemTagType;
    onClick?: (e: React.MouseEvent, id?: string, value?: string) => void;
    tabIndex?: number;
}
export declare const ListboxItem: {
    (props: ListboxItemProps): React.JSX.Element;
    displayName: string;
    defaultProps: {
        tagName: string;
    };
};
export default ListboxItem;
