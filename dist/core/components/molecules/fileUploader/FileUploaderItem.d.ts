import * as React from 'react';
import { BaseProps } from '@/utils/types';
import { FileStatus } from '@/common.type';
export interface FileItem {
    file: File;
    id?: any;
    status?: FileStatus;
    progress?: number;
    errorMessage?: string;
}
export type FileUploaderItemProps = {
    onDelete?: (file: File, id?: any) => void;
    onRetry?: (file: File, id?: any) => void;
    onClick?: (file: File, id?: any) => void;
} & BaseProps & FileItem;
export declare const FileUploaderItem: {
    (props: FileUploaderItemProps): React.JSX.Element;
    displayName: string;
};
export default FileUploaderItem;
