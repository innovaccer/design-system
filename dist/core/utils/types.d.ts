/// <reference types="react" />
export declare type SingleOrArray<T> = T | T[];
export declare type MakeRequired<T> = Exclude<T, null | undefined>;
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
export declare type BaseHtmlProps<T> = Omit<React.HTMLProps<T>, 'ref' | 'size' | 'className'>;
export declare type OmitNativeProps<T, K extends keyof any> = Omit<BaseHtmlProps<T>, K>;
export declare const extractBaseProps: (props: Record<string, any>) => {};
export declare const filterProps: (props: Record<string, any>, propsList: ReadonlyArray<string>, include?: boolean | undefined) => Record<string, any>;
export {};
