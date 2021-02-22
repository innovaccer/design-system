import { FileUploaderButtonProps } from "./FileUploaderButton";
import { BaseProps } from "../../../utils/types";
export interface FileUploaderProps extends FileUploaderButtonProps, BaseProps {
    title: string;
    formatLabel?: string;
    sizeLabel: string;
    sampleFileLink?: JSX.Element;
}
export declare const FileUploader: {
    (props: FileUploaderProps): JSX.Element;
    defaultProps: {
        uploadButtonLabel: string;
        disabled: boolean;
        multiple: boolean;
    } & {
        title: string;
        sizeLabel: string;
        fileNames: never[];
    };
    displayName: string;
};
export default FileUploader;
