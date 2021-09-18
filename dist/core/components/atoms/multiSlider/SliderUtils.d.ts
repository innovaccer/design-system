/// <reference types="react" />
export declare const formatPercentage: (ratio: number) => string;
export declare const countDecimalPlaces: (value: number) => number;
export declare const approxEqual: (a: number, b: number) => boolean;
export declare const clamp: (value: number, min: number, max: number) => number;
export declare const arraysEqual: (oldValues: number[], newValues: number[]) => boolean | undefined;
export declare function argMin<T>(values: T[], argFn: (value: T) => any): T | undefined;
export declare function fillValues<T>(values: T[], startIndex: number, endIndex: number, fillValue: T): void;
export declare function isElementOfType<P = {}>(element: any, _ComponentType: React.ComponentType<P>): element is React.ReactElement<P>;
