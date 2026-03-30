import * as React from 'react';
import { BaseProps } from '@/utils/types';
export type FileUploaderButtonProps = {
    name?: string;
    id?: string;
    accept?: string[];
    multiple?: boolean;
    uploadButtonLabel?: string;
    disabled?: boolean;
    onChange?: (fileList: File[], event: React.ChangeEvent<HTMLInputElement>) => void;
} & BaseProps;
export declare const FileUploaderButton: {
    (props: FileUploaderButtonProps): React.JSX.Element;
    displayName: string;
};
export default FileUploaderButton;
