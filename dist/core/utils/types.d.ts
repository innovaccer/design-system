export declare type SingleOrArray<T> = T | T[];
export declare type MakeOptional<T extends {}, K extends keyof any> = Omit<T, K> & {
    [OK in keyof T & K]?: T[OK];
};
export declare type BaseProps = {
    className?: string;
    'data-test'?: string;
};
export declare const extractBaseProps: (props: Record<string, any>) => {};
