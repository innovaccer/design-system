import * as React from 'react';
export interface HandleProps {
    value: number;
    fillAfter?: boolean;
    fillBefore?: boolean;
    onChange?: (newValue: number) => void;
    onRelease?: (newValue: number) => void;
}
export interface InternalHandleProps extends HandleProps {
    disabled?: boolean;
    isCurrentLabelHovered?: boolean;
    label: string;
    max: number;
    min: number;
    stepSize: number;
    tickSize: number;
    tickSizeRatio: number;
    zIndex?: number;
}
export interface HandleState {
    isHandleMoving?: boolean;
    isHandleHovered?: boolean;
}
export declare class Handle extends React.Component<InternalHandleProps, HandleState> {
    state: {
        isHandleMoving: boolean;
        isHandleHovered: boolean;
    };
    handleElement: HTMLElement | null;
    refHandlers: {
        handle: (el: HTMLDivElement | null) => void;
    };
    componentWillUnmount(): void;
    componentDidUpdate(_prevProps: InternalHandleProps, prevState: HandleState): void;
    mouseEventClientOffset: (event: MouseEvent | React.MouseEvent<HTMLElement>) => number;
    clientToValue: (clientPixel: number) => number;
    changeValue: (newValue: number, callback?: ((newValue: number) => void) | undefined) => number;
    endHandleMovement: (event: MouseEvent) => void;
    continueHandleMovement: (event: MouseEvent) => void;
    beginHandleMovement: (event: MouseEvent | React.MouseEvent<HTMLElement>) => void;
    handleKeyDown: (event: React.KeyboardEvent<HTMLSpanElement>) => void;
    handleKeyUp: (event: React.KeyboardEvent<HTMLSpanElement>) => void;
    getHandleMidpointAndOffset: (handleElement: HTMLElement | null, useOppositeDimension?: boolean) => {
        handleMidpoint: number;
        handleOffset: number;
    };
    handleMouseOver: () => void;
    handleMouseLeave: () => void;
    render(): React.JSX.Element;
    removeDocumentEventListeners: () => void;
}
export default Handle;
