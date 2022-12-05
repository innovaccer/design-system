import * as React from 'react';
export interface TabProps {
    label: React.ReactNode | string;
    disabled?: boolean;
    icon?: string;
    count?: number;
    children?: React.ReactNode;
    className?: string;
    isDismissible?: boolean;
    onDismiss?: (tabInfo: object) => void;
}
export declare const Tab: {
    (props: TabProps): JSX.Element;
    displayName: string;
};
export default Tab;
