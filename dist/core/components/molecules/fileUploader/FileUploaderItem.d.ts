import { BaseProps } from "../../../utils/types";
export declare type FileStatus = 'uploading' | 'completed' | 'error';
export interface FileItem {
    file: File;
    id?: any;
    status?: FileStatus;
    progress?: number;
    errorMessage?: string;
}
export interface FileUploaderItemProps extends BaseProps, FileItem {
    onDelete?: (file: File, id?: any) => void;
    onRetry?: (file: File, id?: any) => void;
    onClick?: (file: File, id?: any) => void;
}
export declare const FileUploaderItem: {
    (props: FileUploaderItemProps): JSX.Element;
    defaultProps: {
        status: string;
        progress: number;
        errorMessage: string;
    };
    displayName: string;
};
export default FileUploaderItem;
