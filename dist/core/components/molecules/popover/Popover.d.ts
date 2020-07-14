import * as React from 'react';
import { BaseProps } from '@/utils/types';
export declare type Position = 'top' | 'top-start' | 'top-end' | 'bottom' | 'bottom-start' | 'bottom-end';
declare type ActionType = 'click' | 'hover';
export interface CustomStyle {
    height?: number | string;
    minHeight?: number | string;
    maxHeight?: number | string;
    width?: number | string;
    minWidth?: number | string;
    maxWidth?: number | string;
}
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
    customStyle?: CustomStyle;
    onToggle?: (open: boolean, type?: string) => void;
    children: React.ReactNode;
    triggerClass?: string;
}
export declare const Popover: {
    (props: PopoverProps): JSX.Element;
    displayName: string;
};
export default Popover;
