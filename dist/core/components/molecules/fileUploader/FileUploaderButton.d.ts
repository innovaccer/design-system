import * as React from 'react';
import { BaseProps } from "../../../utils/types";
export interface FileUploaderButtonProps extends BaseProps {
    name?: string;
    id?: string;
    accept?: string[];
    multiple: boolean;
    uploadButtonLabel: string;
    disabled: boolean;
    onChange?: (fileList: File[], event: React.ChangeEvent<HTMLInputElement>) => void;
}
export declare const FileUploaderButton: {
    (props: FileUploaderButtonProps): JSX.Element;
    defaultProps: {
        uploadButtonLabel: string;
        disabled: boolean;
        multiple: boolean;
    };
    displayName: string;
};
export default FileUploaderButton;
