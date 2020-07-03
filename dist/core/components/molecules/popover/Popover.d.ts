import * as React from 'react';
import { BaseProps } from '@/utils/types';
export declare type Position = 'top' | 'top-start' | 'top-end' | 'bottom' | 'bottom-start' | 'bottom-end';
declare type ActionType = 'click' | 'hover';
export interface PopoverProps extends BaseProps {
    position?: Position;
    appendToBody?: boolean;
    verticalOffset?: number;
    trigger: React.ReactElement<any>;
    hoverable?: boolean;
    dark?: boolean;
    closeOnBackdropClick?: boolean;
    on?: ActionType;
    open?: boolean;
    style?: React.CSSProperties;
    onToggle?: (open: boolean, type?: string) => void;
    children: React.ReactNode;
}
export declare const Popover: {
    (props: PopoverProps): JSX.Element;
    displayName: string;
};
export default Popover;
