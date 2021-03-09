import { FileErrorTypes } from "./FileErrors";
import { fromEvent } from "./FileSelectorUtils";
import { BaseProps } from "../../../utils/types";
interface FileError {
    type: FileErrorTypes;
    message: string;
}
interface FileRejection {
    file: File;
    error: FileError;
}
export interface DropzoneBaseProps extends BaseProps {
    accept?: string | string[];
    multiple?: boolean;
    preventDropOnDocument?: boolean;
    minSize: number;
    maxSize: number;
    disabled: boolean;
    getFilesFromEvent: (event: DragEvent | Event) => any;
    onFileDialogCancel?: () => void;
    onDragEnter?: (event: DragEvent) => void;
    onDragLeave?: (event: DragEvent) => void;
    onDragOver?: (event: DragEvent) => void;
    onDrop?: (acceptedFiles: File[], rejectedFiles: FileRejection[], event: DragEvent | Event) => void;
    onDropAccepted?: (files: File[], event: DragEvent | Event) => void;
    onDropRejected?: (rejectedFiles: FileRejection[], event: DragEvent | Event) => any;
    validator?: (file: File) => FileError | FileError[];
}
export declare const DropzoneBase: {
    (props: DropzoneBaseProps): any;
    displayName: string;
    defaultProps: {
        disabled: boolean;
        getFilesFromEvent: typeof fromEvent;
        maxSize: number;
        minSize: number;
        multiple: boolean;
        preventDropOnDocument: boolean;
        validator: () => null;
    };
};
export default DropzoneBase;
