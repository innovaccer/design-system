import * as React from 'react';
import { FileItem } from './FileUploaderItem';
import { BaseProps } from '@/utils/types';
export type FileUploaderListProps = {
    fileList?: FileItem[];
    onClick?: (file: File, id?: any) => void;
    onDelete?: (file: File, id?: any) => void;
    onRetry?: (file: File, id?: any) => void;
} & BaseProps;
export declare const FileUploaderList: {
    (props: FileUploaderListProps): React.JSX.Element | null;
    displayName: string;
};
export default FileUploaderList;
