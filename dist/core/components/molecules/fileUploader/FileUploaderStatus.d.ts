import { FileStatus } from "../../../common.type";
export interface FileUploaderStatusProps {
    file: File;
    progress: number;
    id?: any;
    status: FileStatus;
    onRetry?: () => void;
}
export declare const FileUploaderStatus: {
    (props: FileUploaderStatusProps): JSX.Element | null;
    displayName: string;
    defaultProps: {
        status: string;
        progress: number;
    };
};
export default FileUploaderStatus;
