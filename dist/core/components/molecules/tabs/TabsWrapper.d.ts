import * as React from 'react';
import { TabProps } from './Tab';
export interface TabsWrapperProps {
    activeTab?: number;
    children: React.FunctionComponentElement<TabProps>[];
    onTabChange?: (tabIndex: number) => void;
}
export declare const TabsWrapper: React.FunctionComponent<TabsWrapperProps>;
export default TabsWrapper;
