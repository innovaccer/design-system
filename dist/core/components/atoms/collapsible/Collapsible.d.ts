import * as React from 'react';
import { BaseProps } from "../../../utils/types";
export interface CollapsibleProps extends BaseProps {
    expanded: boolean;
    hoverable: boolean;
    height: React.ReactText;
    expandedWidth: number;
    onToggle?: (expanded: boolean) => void;
    children: React.ReactChild;
}
export declare const Collapsible: {
    (props: CollapsibleProps): JSX.Element;
    displayName: string;
    defaultProps: {
        expanded: boolean;
        hoverable: boolean;
        height: string;
        expandedWidth: string;
    };
};
export default Collapsible;
