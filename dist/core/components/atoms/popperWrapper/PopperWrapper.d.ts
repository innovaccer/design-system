import * as React from 'react';
import { Placement } from '@floating-ui/react';
export interface PopperWrapperProps {
    initialOpen?: boolean;
    placement?: Placement;
    modal?: boolean;
    open?: boolean;
    onOpenChange?: (open: boolean, event?: Event, reason?: string) => void;
    closeOnEscape?: boolean;
    closeOnScroll?: boolean;
    closeOnBackdropClick?: boolean;
    triggerMethod?: 'click' | 'hover';
    openDelay?: number;
    offset?: number;
    hideOnReferenceEscape?: boolean;
    animationClass?: {
        open: string;
        close: string;
    };
    portalRoot?: HTMLElement | null | React.RefObject<HTMLElement | null>;
    appendToBody?: boolean;
    referenceElement?: React.RefObject<HTMLElement | HTMLInputElement | HTMLDivElement | null> | HTMLElement | HTMLInputElement | HTMLDivElement | null;
}
export declare function usePopover({ initialOpen, placement, modal, open: controlledOpen, onOpenChange: setControlledOpen, closeOnEscape, closeOnScroll, closeOnBackdropClick, triggerMethod, openDelay, offset: offsetNumber, hideOnReferenceEscape, animationClass, portalRoot, appendToBody, referenceElement, }?: PopperWrapperProps): {
    modal: boolean | undefined;
    isMounted: boolean;
    styles: React.CSSProperties;
    animationClass: {
        open: string;
        close: string;
    };
    portalRoot: HTMLElement | React.RefObject<HTMLElement | null> | null | undefined;
    appendToBody: boolean | undefined;
    referenceElement: HTMLElement | HTMLDivElement | HTMLInputElement | React.RefObject<HTMLElement | HTMLDivElement | HTMLInputElement | null> | null | undefined;
    placement: Placement;
    strategy: import("@floating-ui/utils").Strategy;
    middlewareData: import("@floating-ui/core").MiddlewareData;
    x: number;
    y: number;
    isPositioned: boolean;
    update: () => void;
    floatingStyles: React.CSSProperties;
    refs: {
        reference: React.MutableRefObject<import("@floating-ui/react-dom").ReferenceType | null>;
        floating: React.MutableRefObject<HTMLElement | null>;
        setReference: (node: import("@floating-ui/react-dom").ReferenceType | null) => void;
        setFloating: (node: HTMLElement | null) => void;
    } & import("@floating-ui/react").ExtendedRefs<import("@floating-ui/react").ReferenceType>;
    elements: {
        reference: import("@floating-ui/react-dom").ReferenceType | null;
        floating: HTMLElement | null;
    } & import("@floating-ui/react").ExtendedElements<import("@floating-ui/react").ReferenceType>;
    context: {
        x: number;
        y: number;
        placement: Placement;
        strategy: import("@floating-ui/utils").Strategy;
        middlewareData: import("@floating-ui/core").MiddlewareData;
        isPositioned: boolean;
        update: () => void;
        floatingStyles: React.CSSProperties;
        open: boolean;
        onOpenChange: (open: boolean, event?: Event, reason?: import("@floating-ui/react").OpenChangeReason) => void;
        events: import("@floating-ui/react").FloatingEvents;
        dataRef: React.MutableRefObject<import("@floating-ui/react").ContextData>;
        nodeId: string | undefined;
        floatingId: string;
        refs: import("@floating-ui/react").ExtendedRefs<import("@floating-ui/react").ReferenceType>;
        elements: import("@floating-ui/react").ExtendedElements<import("@floating-ui/react").ReferenceType>;
    };
    getReferenceProps: (userProps?: React.HTMLProps<Element>) => Record<string, unknown>;
    getFloatingProps: (userProps?: React.HTMLProps<HTMLElement>) => Record<string, unknown>;
    getItemProps: (userProps?: Omit<React.HTMLProps<HTMLElement>, "selected" | "active"> & {
        active?: boolean;
        selected?: boolean;
    }) => Record<string, unknown>;
    open: boolean;
    setOpen: (open: boolean, event?: Event, reason?: string) => void;
};
export declare const usePopoverContext: () => {
    modal: boolean | undefined;
    isMounted: boolean;
    styles: React.CSSProperties;
    animationClass: {
        open: string;
        close: string;
    };
    portalRoot: HTMLElement | React.RefObject<HTMLElement | null> | null | undefined;
    appendToBody: boolean | undefined;
    referenceElement: HTMLElement | HTMLDivElement | HTMLInputElement | React.RefObject<HTMLElement | HTMLDivElement | HTMLInputElement | null> | null | undefined;
    placement: Placement;
    strategy: import("@floating-ui/utils").Strategy;
    middlewareData: import("@floating-ui/core").MiddlewareData;
    x: number;
    y: number;
    isPositioned: boolean;
    update: () => void;
    floatingStyles: React.CSSProperties;
    refs: {
        reference: React.MutableRefObject<import("@floating-ui/react-dom").ReferenceType | null>;
        floating: React.MutableRefObject<HTMLElement | null>;
        setReference: (node: import("@floating-ui/react-dom").ReferenceType | null) => void;
        setFloating: (node: HTMLElement | null) => void;
    } & import("@floating-ui/react").ExtendedRefs<import("@floating-ui/react").ReferenceType>;
    elements: {
        reference: import("@floating-ui/react-dom").ReferenceType | null;
        floating: HTMLElement | null;
    } & import("@floating-ui/react").ExtendedElements<import("@floating-ui/react").ReferenceType>;
    context: {
        x: number;
        y: number;
        placement: Placement;
        strategy: import("@floating-ui/utils").Strategy;
        middlewareData: import("@floating-ui/core").MiddlewareData;
        isPositioned: boolean;
        update: () => void;
        floatingStyles: React.CSSProperties;
        open: boolean;
        onOpenChange: (open: boolean, event?: Event, reason?: import("@floating-ui/react").OpenChangeReason) => void;
        events: import("@floating-ui/react").FloatingEvents;
        dataRef: React.MutableRefObject<import("@floating-ui/react").ContextData>;
        nodeId: string | undefined;
        floatingId: string;
        refs: import("@floating-ui/react").ExtendedRefs<import("@floating-ui/react").ReferenceType>;
        elements: import("@floating-ui/react").ExtendedElements<import("@floating-ui/react").ReferenceType>;
    };
    getReferenceProps: (userProps?: React.HTMLProps<Element>) => Record<string, unknown>;
    getFloatingProps: (userProps?: React.HTMLProps<HTMLElement>) => Record<string, unknown>;
    getItemProps: (userProps?: Omit<React.HTMLProps<HTMLElement>, "selected" | "active"> & {
        active?: boolean;
        selected?: boolean;
    }) => Record<string, unknown>;
    open: boolean;
    setOpen: (open: boolean, event?: Event, reason?: string) => void;
};
export declare function PopperWrapper({ children, modal, ...restOptions }: {
    children: React.ReactNode;
} & PopperWrapperProps): React.JSX.Element;
interface PopoverTriggerProps {
    children: React.ReactNode;
    asChild?: boolean;
    triggerClass?: string;
}
export declare const PopoverTrigger: React.ForwardRefExoticComponent<Omit<React.HTMLProps<HTMLElement> & PopoverTriggerProps, "ref"> & React.RefAttributes<HTMLElement>>;
export declare const PopoverContent: React.ForwardRefExoticComponent<Omit<React.HTMLProps<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
export default PopperWrapper;
