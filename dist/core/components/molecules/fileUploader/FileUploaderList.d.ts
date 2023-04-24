import { FileItem } from "./FileUploaderItem";
import { BaseProps } from "../../../utils/types";
export interface FileUploaderListProps extends BaseProps {
    fileList: FileItem[];
    onClick?: (file: File, id?: any) => void;
    onDelete?: (file: File, id?: any) => void;
    onRetry?: (file: File, id?: any) => void;
}
export declare const FileUploaderList: {
    (props: FileUploaderListProps): JSX.Element | null;
    defaultProps: {
        fileList: never[];
    };
    displayName: string;
};
export default FileUploaderList;
