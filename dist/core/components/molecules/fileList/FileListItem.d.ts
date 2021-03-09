import * as React from 'react';
import { Icon } from "../../../index";
import { BaseProps, MakeOptional } from "../../../utils/types";
import { IconProps } from "../../../index.type";
export declare type FileStatus = 'uploading' | 'completed' | 'error';
export declare type IconOptions = MakeOptional<IconProps, keyof typeof Icon['defaultProps']>;
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
    icon: IconOptions;
    actions?: React.ReactNode;
    fileItem?: any;
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
