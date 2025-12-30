import React from 'react';
import { BaseProps, BaseHtmlProps } from '@/utils/types';
type ItemTagType = 'li' | 'div' | 'a';
export interface MenuItemProps extends BaseProps, BaseHtmlProps<HTMLLIElement | HTMLDivElement> {
    tagName?: ItemTagType;
    onClick?: (event: React.MouseEvent | React.KeyboardEvent) => void;
    children: React.ReactNode;
    disabled?: boolean;
    onFocus?: (event: React.FocusEvent) => void;
    onBlur?: (event: React.FocusEvent) => void;
}
export declare const MenuItem: {
    (props: MenuItemProps): React.JSX.Element;
    displayName: string;
};
export default MenuItem;
