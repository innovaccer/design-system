import * as React from 'react';
import { DropzoneBaseProps } from "./DropzoneBase";
import { BaseProps } from "../../../utils/types";
export declare type DropZoneType = 'standard' | 'compressed' | 'tight';
export interface DropzoneProps extends BaseProps, DropzoneBaseProps {
    formatLabel?: string;
    type: DropZoneType;
    sizeLabel?: string;
    sampleFileLink?: React.ReactNode;
}
export declare const Dropzone: {
    (props: DropzoneProps): JSX.Element;
    displayName: string;
    defaultProps: {
        type: string;
        disabled: boolean;
        getFilesFromEvent: typeof import("./FileSelectorUtils").fromEvent;
        maxSize: number;
        minSize: number;
        multiple: boolean;
        preventDropOnDocument: boolean;
        validator: () => null;
    };
};
export default Dropzone;
