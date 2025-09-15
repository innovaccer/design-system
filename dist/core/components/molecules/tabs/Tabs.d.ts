import * as React from 'react';
import { BaseProps, SingleOrArray } from '@/utils/types';
import { IconType, TTabSize } from '@/common.type';
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
export type TabsProps = {
    activeIndex?: number;
    withSeparator?: boolean;
    tabs?: TabConfig[];
    children?: SingleOrArray<React.ReactElement>;
    onTabChange?: (tabIndex: number) => void;
    headerClassName?: string;
    size?: TTabSize;
    maxWidth?: string | number;
} & BaseProps;
export declare const Tabs: {
    (props: TabsProps): React.JSX.Element;
    displayName: string;
};
export default Tabs;
