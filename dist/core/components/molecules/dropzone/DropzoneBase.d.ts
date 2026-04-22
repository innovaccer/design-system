import { FileErrorTypes } from './FileErrors';
import { BaseProps } from '@/utils/types';
interface FileError {
    type: FileErrorTypes;
    message: string;
}
export interface FileRejection {
    file: File;
    errors: FileError[];
}
export type DropzoneBaseProps = {
    accept?: string | string[];
    multiple?: boolean;
    preventDropOnDocument?: boolean;
    minSize?: number;
    maxSize?: number;
    disabled?: boolean;
    getFilesFromEvent?: (event: DragEvent | Event) => any;
    onFileDialogCancel?: () => void;
    onDragEnter?: (event: DragEvent) => void;
    onDragLeave?: (event: DragEvent) => void;
    onDragOver?: (event: DragEvent) => void;
    onDrop?: (event: DragEvent | Event, acceptedFiles: File[], rejectedFiles: FileRejection[]) => void;
    onDropAccepted?: (event: DragEvent | Event, files: File[]) => void;
    onDropRejected?: (event: DragEvent | Event, rejectedFiles: FileRejection[]) => void;
    validator?: (file: File) => FileError | FileError[];
} & BaseProps;
export declare const DropzoneBase: {
    (props: DropzoneBaseProps): any;
    displayName: string;
};
export default DropzoneBase;
