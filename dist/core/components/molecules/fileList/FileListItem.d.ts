import * as React from 'react';
import { BaseProps } from '@/utils/types';
import { FileStatus } from '@/common.type';
export interface FileObject extends BaseProps, Record<string, any> {
    name: string;
    size: string;
    type: string;
}
export type FileListItemProps = {
    file: File | FileObject;
    status: FileStatus;
    progress?: number;
    errorMessage?: string;
    actions?: React.ReactNode;
    fileItem?: any;
    fileSize?: string;
    onClick?: (file: FileListItemProps) => void;
} & BaseProps & Record<string, any>;
export declare const FileListItem: {
    (props: FileListItemProps): React.JSX.Element;
    displayName: string;
};
export default FileListItem;
