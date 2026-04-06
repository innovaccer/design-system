export declare const COMMON_MIME_TYPES: Map<string, string>;
interface DOMFile extends Blob {
    readonly lastModified: number;
    readonly name: string;
}
export interface FileWithPath extends DOMFile {
    readonly path?: string;
}
export declare function fromEvent(evt: Event): Promise<(FileWithPath | DataTransferItem)[]>;
export declare function toFileWithPath(file: FileWithPath, path?: string): FileWithPath;
export {};
