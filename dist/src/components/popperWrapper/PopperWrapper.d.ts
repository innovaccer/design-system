import * as React from 'react';
declare type PositionType = 'auto-start' | 'auto' | 'auto-end' | 'top-start' | 'top' | 'top-end' | 'right-start' | 'right' | 'right-end' | 'bottom-end' | 'bottom' | 'bottom-start' | 'left-end' | 'left' | 'left-start';
declare type ActionType = 'click' | 'hover';
declare type Offset = 'small' | 'medium' | 'large';
declare type PopperChildrenProps = {
    ref: React.Ref<any>;
    placement: PositionType;
    style: React.CSSProperties;
    outOfBoundaries: boolean | null;
};
export interface PopperWrapperProps {
    init?: boolean;
    trigger: React.ReactElement<any>;
    boundaryElement?: Element | null;
    triggerClass?: string;
    placement: PositionType;
    children: React.ReactElement<any>;
    style: React.CSSProperties;
    appendToBody: boolean;
    on: ActionType;
    hoverable: boolean;
    offset: Offset;
    closeOnBackdropClick: boolean;
    closeOnScroll?: boolean;
    open?: boolean;
    hide?: boolean;
    onToggle: (open: boolean, type?: string) => void;
    animationClass?: {
        open: string;
        close: string;
    };
}
interface PopperWrapperState {
    zIndex?: number;
    animationKeyframe: string;
    isOpen: boolean;
    uniqueKey: string;
}
export declare class PopperWrapper extends React.Component<PopperWrapperProps, PopperWrapperState> {
    triggerRef: React.RefObject<HTMLElement>;
    popupRef: React.RefObject<HTMLDivElement>;
    hoverableDelay?: number;
    _timer?: number;
    _throttleWait?: boolean;
    offsetMapping: Record<Offset, string>;
    positionOffset: Record<PositionType, string>;
    static defaultProps: {
        on: string;
        offset: string;
        closeOnBackdropClick: boolean;
        hoverable: boolean;
        appendToBody: boolean;
        style: {};
    };
    constructor(props: PopperWrapperProps);
    componentDidMount(): void;
    componentDidUpdate(prevProps: PopperWrapperProps): void;
    componentWillUnmount(): void;
    boundaryScrollHandler(): void;
    addBoundaryScrollHandler(): void;
    removeBoundaryScrollHandler(): void;
    mouseMoveHandler(): void;
    handleMouseEnter(): void;
    handleMouseLeave(): void;
    togglePopper: (type: string, newValue?: boolean | undefined) => void;
    doesEventContainsElement: (event: Event, ref: React.RefObject<any>) => any;
    getZIndexForLayer(node: Element | null): number | undefined;
    getUpdatedStyle: any;
    getTriggerElement(ref: React.Ref<any>): JSX.Element;
    getPopperChildren({ ref, style, placement, outOfBoundaries }: PopperChildrenProps): React.ReactElement<any, string | React.JSXElementConstructor<any>>;
    render(): JSX.Element;
}
export default PopperWrapper;
