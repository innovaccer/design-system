import * as React from 'react';
import { PopoverProps } from '@/index.type';
import { BaseProps } from '@/utils/types';
type Position = 'top-start' | 'top' | 'top-end' | 'right' | 'bottom-end' | 'bottom' | 'bottom-start' | 'left';
declare const tooltipPropsList: readonly ["trigger", "on", "open", "offset", "onToggle", "dark", "customStyle", "closeOnBackdropClick", "hideOnReferenceEscape", "closeOnScroll"];
type TooltipPopperProps = (typeof tooltipPropsList)[number];
type TooltipSize = 'small' | 'regular';
export interface TooltipProps extends Omit<PopoverProps, TooltipPopperProps>, BaseProps {
    tooltip?: string;
    size?: TooltipSize;
    showTooltip?: boolean;
    children: PopoverProps['trigger'];
    position?: Position;
    showOnTruncation?: boolean;
    elementRef?: React.RefObject<HTMLElement | null>;
    open?: boolean;
    openDelay?: number;
}
export declare const detectTruncation: (boundaryRef: React.RefObject<HTMLElement | null>) => boolean;
export declare const Tooltip: {
    (props: TooltipProps): React.ReactElement;
    useAutoTooltip(): {
        detectTruncation: (boundaryRef: React.RefObject<HTMLElement | null>) => boolean;
    };
    defaultProps: {
        hoverable: boolean;
    };
};
export default Tooltip;
