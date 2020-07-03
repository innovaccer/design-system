import * as React from 'react';
import { TabProps } from './Tab';
export interface TabsWrapperProps {
    active?: number;
    children: React.FunctionComponentElement<TabProps>[];
    onTabChange?: (tabIndex: number) => void;
}
export declare const TabsWrapper: {
    (props: TabsWrapperProps): JSX.Element;
    displayName: string;
};
export default TabsWrapper;
