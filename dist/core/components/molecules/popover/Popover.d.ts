import * as React from 'react';
import { BaseProps } from '@/utils/types';
import { PositionType as Position } from '@/common.type';
export interface CustomStyle {
    height?: number | string;
    minHeight?: number | string;
    maxHeight?: number | string;
    width?: number | string;
    minWidth?: number | string;
    maxWidth?: number | string;
}
type ActionType = 'click' | 'hover';
type Offset = 'small' | 'medium' | 'large';
export type PopoverProps = {
    children: React.ReactNode;
    position?: Position;
    dark?: boolean;
    open?: boolean;
    trigger?: React.ReactNode;
    name?: string;
    onToggle?: (open: boolean, type?: string, event?: Event) => void;
    customStyle?: CustomStyle;
    triggerClass?: string;
    closeOnEscape?: boolean;
    closeOnScroll?: boolean;
    closeOnBackdropClick?: boolean;
    on?: ActionType;
    openDelay?: number;
    animationClass?: {
        open: string;
        close: string;
    };
    offset?: Offset;
    hideOnReferenceEscape?: boolean;
    boundaryElement?: HTMLElement | null | React.RefObject<HTMLElement | null>;
    appendToBody?: boolean;
    disabled?: boolean;
    triggerCoordinates?: {
        x: number;
        y: number;
    };
} & BaseProps;
export declare const Popover: {
    (props: PopoverProps): React.JSX.Element;
    displayName: string;
};
export default Popover;
