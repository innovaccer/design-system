export declare function arrayMove<T>(array: T[], from: number, to: number): T[];
export declare function getTranslateOffset(element: Element): number;
export declare function isTouchEvent(event: TouchEvent & MouseEvent): number;
export declare function transformItem(element: Element, offsetY?: number | null, offsetX?: number | null): void;
export declare function setItemTransition(element: Element, duration: number, timing?: string): void;
export declare function binarySearch(array: number[], targetValue: number): number;
export declare const schd: (fn: any) => {
    (...args: any[]): void;
    cancel(): void;
};
