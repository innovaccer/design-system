import * as React from 'react';
import { FileListItemProps } from './FileListItem';
export interface FileIconProps {
    file: FileListItemProps['file'];
    progress?: FileListItemProps['progress'];
    status?: FileListItemProps['status'];
}
export declare const FileIcon: {
    (props: FileIconProps): React.JSX.Element;
    displayName: string;
};
export default FileIcon;
