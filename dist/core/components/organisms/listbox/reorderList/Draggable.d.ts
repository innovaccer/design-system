import * as React from 'react';
import type { IProps, TEvent } from "./types";
declare class Draggable<Value = string> extends React.Component<IProps<Value>> {
    listRef: React.RefObject<HTMLElement>;
    ghostRef: React.RefObject<HTMLElement>;
    topOffsets: number[];
    itemTranslateOffsets: number[];
    initialYOffset: number;
    lastScroll: number;
    lastYOffset: number;
    lastListYOffset: number;
    dropTimeout?: number;
    needle: number;
    afterIndex: number;
    state: {
        itemDragged: number;
        itemDraggedOutOfBounds: number;
        selectedItem: number;
        initialX: number;
        initialY: number;
        targetX: number;
        targetY: number;
        targetHeight: number;
        targetWidth: number;
        scrollingSpeed: number;
        scrollWindow: boolean;
    };
    schdOnMouseMove: {
        (e: MouseEvent): void;
        cancel(): void;
    };
    schdOnTouchMove: {
        (e: TouchEvent): void;
        cancel(): void;
    };
    schdOnEnd: {
        (e: Event): void;
        cancel(): void;
    };
    constructor(props: IProps<Value>);
    componentDidMount(): void;
    componentDidUpdate(_prevProps: any, prevState: {
        scrollingSpeed: number;
    }): void;
    componentWillUnmount(): void;
    doScrolling: () => void;
    getChildren: () => Element[];
    static defaultProps: {
        transitionDuration: number;
        lockVertically: boolean;
        removableByMove: boolean;
    };
    calculateOffsets: () => void;
    getTargetIndex: (e: TEvent) => number;
    onMouseOrTouchStart: (e: MouseEvent & TouchEvent) => void;
    getYOffset: () => number;
    onStart: (target: HTMLElement, clientX: number, clientY: number, index: number) => void;
    onMouseMove: (e: MouseEvent) => void;
    onTouchMove: (e: TouchEvent) => void;
    onWheel: (e: React.WheelEvent) => void;
    onMove: (clientX: number, clientY: number) => null | undefined;
    moveOtherItems: () => void;
    autoScrolling: (clientY: number) => void;
    animateItems: (needle: number, movedItem: number, offset: number, animateMovedItem?: boolean) => void;
    isDraggedItemOutOfBounds: () => boolean;
    onEnd: (e: TouchEvent & MouseEvent) => void;
    finishDrop: () => void;
    onKeyDown: (e: React.KeyboardEvent) => void;
    render(): JSX.Element;
}
export default Draggable;
