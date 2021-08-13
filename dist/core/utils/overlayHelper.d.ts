/// <reference types="react" />
export declare const getWrapperElement: () => Element;
interface elementData {
    element: Element;
    containerClassName: string;
    elementRef: React.RefObject<HTMLDivElement>;
}
export declare const getUpdatedZIndex: (ele: elementData) => number | undefined;
export {};
