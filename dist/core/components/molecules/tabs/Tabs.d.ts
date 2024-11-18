import * as React from 'react';
import { BaseProps, SingleOrArray } from "../../../utils/types";
import { IconType, TTabSize } from "../../../common.type";
interface TabInfo {
    label: string;
    activeIndex: number;
    currentTabIndex: number;
}
export interface TabConfig {
    label: string;
    count?: number;
    icon?: string;
    disabled?: boolean;
    className?: string;
    isDismissible?: boolean;
    onDismiss?: (tabInfo: TabInfo) => void;
    iconType?: IconType;
}
export interface TabsProps extends BaseProps {
    activeIndex?: number;
    withSeparator?: boolean;
    tabs: TabConfig[];
    children?: SingleOrArray<React.ReactElement>;
    onTabChange?: (tabIndex: number) => void;
    headerClassName?: string;
    size?: TTabSize;
    maxWidth?: string | number;
}
export declare const Tabs: {
    (props: TabsProps): JSX.Element;
    displayName: string;
    defaultProps: {
        withSeparator: boolean;
        tabs: never[];
        size: string;
        maxWidth: string;
    };
};
export default Tabs;
