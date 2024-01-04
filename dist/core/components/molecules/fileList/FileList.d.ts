import * as React from 'react';
import { BaseProps } from "../../../utils/types";
import { FileListItemProps } from "./FileListItem";
export interface FileListProps extends BaseProps {
    fileList: Omit<FileListItemProps[], 'onClick'>;
    onClick?: FileListItemProps['onClick'];
    actionRenderer?: React.FC<FileListItemProps>;
}
export declare const FileList: {
    (props: FileListProps): JSX.Element | null;
    defaultProps: {
        fileList: never[];
    };
    displayName: string;
};
export default FileList;
