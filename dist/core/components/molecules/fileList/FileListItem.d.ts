import * as React from 'react';
import { BaseProps } from "../../../utils/types";
import { FileStatus } from "../../../common.type";
export interface FileObject extends BaseProps, Record<string, any> {
    name: string;
    size: string;
    type: string;
}
export interface FileListItemProps extends BaseProps, Record<string, any> {
    file: File | FileObject;
    status: FileStatus;
    progress?: number;
    errorMessage?: string;
    actions?: React.ReactNode;
    fileItem?: any;
    fileSize?: string;
    onClick?: (file: FileListItemProps) => void;
}
export declare const FileListItem: {
    (props: FileListItemProps): JSX.Element;
    defaultProps: {
        progress: number;
        errorMessage: string;
    };
    displayName: string;
};
export default FileListItem;
