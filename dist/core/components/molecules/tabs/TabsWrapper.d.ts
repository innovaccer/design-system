import * as React from 'react';
import { BaseProps, SingleOrArray } from "../../../utils/types";
export interface TabsWrapperProps extends BaseProps {
    active?: number;
    children: SingleOrArray<React.ReactElement>;
    onTabChange?: (tabIndex: number) => void;
}
export declare const TabsWrapper: {
    (props: TabsWrapperProps): JSX.Element;
    displayName: string;
};
export default TabsWrapper;
