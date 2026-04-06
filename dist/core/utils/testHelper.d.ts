interface IValueHelper {
    required?: boolean;
    iterate?: boolean;
    maxLen?: number;
}
export declare const testHelper: (Mapper: Record<string, any>, testFunc: (props: Record<string, any>) => void) => void;
export declare const filterUndefined: (props: Record<string, any>) => Record<string, any>;
export declare const valueHelper: (props: any, options?: IValueHelper) => Record<string, any>;
export declare const arrayHelper: (props: any[], options?: IValueHelper) => Record<string, any>;
export declare const testMessageHelper: (attr: Record<string, any>) => string;
export declare const JSONStringifyHelper: (_key: string, value: any) => any;
export {};
