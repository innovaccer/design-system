import * as React from 'react';
export interface TabProps {
    label: React.ReactNode;
    disabled?: boolean;
    children?: React.ReactNode;
}
export declare const Tab: {
    (props: TabProps): JSX.Element;
    displayName: string;
};
export default Tab;
