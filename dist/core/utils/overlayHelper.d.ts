export declare const getWrapperElement: () => Element;
interface elementData {
    element: Element;
    containerClassName: string;
    elementRef: React.RefObject<HTMLDivElement>;
}
export declare const getUpdatedZIndex: (ele: elementData) => number | undefined;
export declare const closeOnEscapeKeypress: (event: KeyboardEvent, isTopOverlay: boolean | undefined, onClose: (event: Event) => void) => void;
export {};
