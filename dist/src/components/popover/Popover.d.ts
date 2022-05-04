import * as React from 'react';
import { PopperWrapperProps } from "../popperWrapper";
import { BaseProps } from "../../utils/types";
declare type Position = 'top' | 'top-start' | 'top-end' | 'bottom' | 'bottom-start' | 'bottom-end' | 'left' | 'right';
export interface CustomStyle {
    height?: number | string;
    minHeight?: number | string;
    maxHeight?: number | string;
    width?: number | string;
    minWidth?: number | string;
    maxWidth?: number | string;
}
declare const propsList: readonly ["appendToBody", "trigger", "hoverable", "on", "open", "closeOnBackdropClick", "offset", "closeOnScroll"];
declare type PopperProps = typeof propsList[number];
export interface PopoverProps extends Pick<PopperWrapperProps, PopperProps>, BaseProps {
    children: React.ReactNode;
    position: Position;
    onToggle?: (open: boolean, type?: string) => void;
    dark?: boolean;
    customStyle: CustomStyle;
    triggerClass?: string;
    hideOnReferenceEscape?: boolean;
    boundaryElement: React.RefObject<HTMLElement> | Element;
}
export declare const Popover: {
    (props: PopoverProps): JSX.Element;
    displayName: string;
    defaultProps: Record<string, any> & {
        offset: string;
        position: string;
        hideOnReferenceEscape: boolean;
        customStyle: {};
    };
};
export default Popover;
