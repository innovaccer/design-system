import * as React from 'react';
import { FloatingContext } from '@floating-ui/react-dom-interactions';
export declare type PositionType = 'bottom' | 'top' | 'top-start' | 'top-end' | 'bottom-start' | 'bottom-end' | 'left' | 'right';
export declare type Offset = 'small' | 'medium' | 'large';
export interface PopoverProps {
    trigger?: React.ReactElement<any>;
    boundaryElement?: React.RefObject<any> | null;
    placement?: PositionType;
    children: React.ReactElement<any>;
    style?: React.CSSProperties;
    className?: string;
    hoverable?: boolean;
    offset?: Offset;
    open?: boolean;
    dark?: boolean;
    dismissOptions?: {
        enabled?: boolean;
        escapeKey?: boolean;
        referencePointerDown?: boolean;
        outsidePointerDown?: boolean;
        ancestorScroll?: boolean;
        bubbles?: boolean;
    };
    onToggle?: (context: FloatingContext) => void;
    animationClass?: {
        open: string;
        close: string;
    };
    role?: 'tooltip' | 'dialog' | 'menu' | 'listbox' | 'grid' | 'tree';
}
export declare const Popover: React.FC<PopoverProps>;
export default Popover;
