import * as React from 'react';
import { FileUploaderFormatProps } from './FileUploaderFormat';
import { FileUploaderButtonProps } from './FileUploaderButton';
import { BaseProps } from '@/utils/types';
export type FileUploaderProps = {
    title?: string;
    sizeLabel?: string;
    sampleFileLink?: React.JSX.Element;
} & FileUploaderButtonProps & FileUploaderFormatProps & BaseProps;
export declare const FileUploader: {
    (props: FileUploaderProps): React.JSX.Element;
    displayName: string;
};
export default FileUploader;
