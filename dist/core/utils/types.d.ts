export type SingleOrArray<T> = T | T[];
export type MakeRequired<T> = Exclude<T, null | undefined>;
export type MakeOptional<T extends object, K extends keyof any> = Omit<T, K> & {
    [OK in keyof T & K]?: T[OK];
};
type ValidatorFn<K extends any[] = any[]> = (...values: K) => boolean;
export type Validators = SingleOrArray<ValidatorFn>;
export type Mask = (string | RegExp)[];
export type BaseProps = {
    className?: string;
    'data-test'?: string;
};
export type BaseHtmlProps<T> = Omit<React.HTMLProps<T>, 'ref' | 'size' | 'className'>;
export type OmitNativeProps<T, K extends keyof any> = Omit<BaseHtmlProps<T>, K>;
export declare const extractBaseProps: (props: Record<string, any>) => {};
export declare const filterProps: (props: Record<string, any>, propsList: ReadonlyArray<string>, include?: boolean) => Record<string, any>;
export {};
