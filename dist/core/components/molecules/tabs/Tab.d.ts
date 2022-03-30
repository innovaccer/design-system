import * as React from 'react';
export interface TabProps {
    label: React.ReactNode | string;
    disabled?: boolean;
    icon?: string;
    count?: number;
    children?: React.ReactNode;
    className?: string;
}
export declare const Tab: {
    (props: TabProps): JSX.Element;
    displayName: string;
};
export default Tab;
