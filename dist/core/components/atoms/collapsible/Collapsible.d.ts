import * as React from 'react';
import { BaseProps } from '@/utils/types';
export type CollapsibleProps = {
    expanded?: boolean;
    hoverable?: boolean;
    height?: string | number;
    expandedWidth?: number;
    onToggle?: (expanded: boolean) => void;
    children: React.ReactNode;
    withTrigger?: boolean;
} & BaseProps;
export declare const Collapsible: {
    (props: CollapsibleProps): React.JSX.Element;
    displayName: string;
};
export default Collapsible;
