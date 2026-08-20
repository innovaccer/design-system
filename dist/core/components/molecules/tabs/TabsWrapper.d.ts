import * as React from 'react';
import { BaseProps, SingleOrArray } from '@/utils/types';
import { TTabSize } from '@/common.type';
export interface TabsWrapperProps extends BaseProps {
    active?: number;
    children: SingleOrArray<React.ReactElement>;
    onTabChange?: (tabIndex: number) => void;
    size?: TTabSize;
}
export declare const TabsWrapper: {
    (props: TabsWrapperProps): React.JSX.Element;
    displayName: string;
};
export default TabsWrapper;
