import * as React from 'react';
import { TabProps } from './Tab';
import { BaseProps } from '@/utils/types';
export interface TabsWrapperProps extends BaseProps {
    active?: number;
    children: React.FunctionComponentElement<TabProps>[];
    onTabChange?: (tabIndex: number) => void;
}
export declare const TabsWrapper: {
    (props: TabsWrapperProps): JSX.Element;
    displayName: string;
};
export default TabsWrapper;
