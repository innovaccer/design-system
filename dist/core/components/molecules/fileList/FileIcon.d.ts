import { FileListItemProps } from "./FileListItem";
export interface FileIconProps {
    file: FileListItemProps['file'];
    progress: FileListItemProps['progress'];
    status: FileListItemProps['status'];
}
export declare const FileIcon: {
    (props: FileIconProps): JSX.Element;
    displayName: string;
    defaultProps: {
        progress: number;
        status: string;
    };
};
export default FileIcon;
