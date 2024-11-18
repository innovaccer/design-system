import * as React from 'react';
import { PopoverProps } from "../../../index.type";
import { BaseProps } from "../../../utils/types";
declare type Position = 'top-start' | 'top' | 'top-end' | 'right' | 'bottom-end' | 'bottom' | 'bottom-start' | 'left';
declare const tooltipPropsList: readonly ["trigger", "on", "open", "offset", "onToggle", "dark", "customStyle", "closeOnBackdropClick", "hideOnReferenceEscape", "closeOnScroll"];
declare type TooltipPopperProps = typeof tooltipPropsList[number];
export interface TooltipProps extends Omit<PopoverProps, TooltipPopperProps>, BaseProps {
    tooltip: string;
    showTooltip?: boolean;
    children: PopoverProps['trigger'];
    position: Position;
    showOnTruncation?: boolean;
    elementRef?: React.RefObject<HTMLElement>;
    open?: boolean;
    openDelay?: number;
}
export declare const detectTruncation: (boundaryRef: React.RefObject<HTMLElement>) => boolean;
export declare const Tooltip: {
    (props: TooltipProps): JSX.Element;
    useAutoTooltip(): {
        detectTruncation: (boundaryRef: React.RefObject<HTMLElement>) => boolean;
    };
    defaultProps: Record<string, any> & {
        hoverable: boolean;
        showTooltip: boolean;
        showOnTruncation: boolean;
    };
};
export default Tooltip;
