export declare type FileErrorTypes = 'FILE_INVALID_TYPE' | 'FILE_TOO_LARGE' | 'FILE_TOO_SMALL' | 'TOO_MANY_FILES';
export declare const fileErrorMessages: {
    [key: string]: string;
};
export declare const getInvalidTypeRejectionErr: (accept?: string | string[] | undefined) => {
    type: string;
    message: string;
};
export declare const getTooLargeRejectionErr: (maxSize: number) => {
    type: string;
    message: string;
};
export declare const getTooSmallRejectionErr: (minSize: number) => {
    type: string;
    message: string;
};
export declare const fileAccepted: (file: File, accept?: string | string[] | undefined) => (boolean | {
    type: string;
    message: string;
} | null)[];
export declare const fileMatchSize: (file: File, minSize: number, maxSize: number) => (boolean | {
    type: string;
    message: string;
})[] | (boolean | null)[];
export declare const getFileError: (options: any) => "" | "FILE_INVALID_TYPE" | "FILE_TOO_LARGE" | "TOO_MANY_FILES";
export declare const allFilesAccepted: (options: any) => any;
