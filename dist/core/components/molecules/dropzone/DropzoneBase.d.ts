import { FileErrorTypes } from "./FileErrors";
import { fromEvent } from "./FileSelectorUtils";
import { BaseProps } from "../../../utils/types";
interface FileError {
    type: FileErrorTypes;
    message: string;
}
export interface FileRejection {
    file: File;
    errors: FileError[];
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
    onDrop?: (event: DragEvent | Event, acceptedFiles: File[], rejectedFiles: FileRejection[]) => void;
    onDropAccepted?: (event: DragEvent | Event, files: File[]) => void;
    onDropRejected?: (event: DragEvent | Event, rejectedFiles: FileRejection[]) => any;
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
