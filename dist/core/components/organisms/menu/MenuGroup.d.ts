import React from 'react';
import { BaseProps } from '@/utils/types';
export interface MenuGroupProps extends BaseProps {
    label?: string;
    children: React.ReactElement;
    showDivider?: boolean;
}
export declare const MenuGroup: {
    (props: MenuGroupProps): React.JSX.Element;
    defaultProps: {
        showDivider: boolean;
    };
};
export default MenuGroup;
