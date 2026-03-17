import * as React from 'react';
import { BaseProps } from '@/utils/types';
import { FileListItemProps } from './FileListItem';
export type FileListProps = {
    fileList?: Omit<FileListItemProps[], 'onClick'>;
    onClick?: FileListItemProps['onClick'];
    actionRenderer?: (fileItem: FileListItemProps) => React.ReactNode;
} & BaseProps;
export declare const FileList: {
    (props: FileListProps): React.JSX.Element | null;
    displayName: string;
};
export default FileList;
