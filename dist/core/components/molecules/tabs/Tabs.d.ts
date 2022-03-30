import * as React from 'react';
import { BaseProps, SingleOrArray } from "../../../utils/types";
export interface TabConfig {
    label: string;
    count?: number;
    icon?: string;
    disabled?: boolean;
    className?: string;
}
export interface TabsProps extends BaseProps {
    activeIndex?: number;
    withSeparator?: boolean;
    tabs: TabConfig[];
    children?: SingleOrArray<React.ReactElement>;
    onTabChange?: (tabIndex: number) => void;
}
export declare const Tabs: {
    (props: TabsProps): JSX.Element;
    displayName: string;
    defaultProps: {
        withSeparator: boolean;
        tabs: never[];
    };
};
export default Tabs;
