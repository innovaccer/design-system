/// <reference types="react" />
export declare type SingleOrArray<T> = T | T[];
export declare type MakeOptional<T extends {}, K extends keyof any> = Omit<T, K> & {
    [OK in keyof T & K]?: T[OK];
};
declare type ValidatorFn<K extends any[] = any[]> = (...values: K) => boolean;
export declare type Validators = SingleOrArray<ValidatorFn>;
export declare type Mask = (string | RegExp)[];
export declare type BaseProps = {
    className?: string;
    'data-test'?: string;
};
export declare type BaseContainerProps = Omit<React.HTMLProps<HTMLDivElement>, 'ref'>;
export declare const extractBaseProps: (props: Record<string, any>) => {};
export {};
