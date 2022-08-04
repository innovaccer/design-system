export const COMMON_MIME_TYPES = new Map([
  ['avi', 'video/avi'],
  ['gif', 'image/gif'],
  ['ico', 'image/x-icon'],
  ['jpeg', 'image/jpeg'],
  ['jpg', 'image/jpeg'],
  ['mkv', 'video/x-matroska'],
  ['mov', 'video/quicktime'],
  ['mp4', 'video/mp4'],
  ['pdf', 'application/pdf'],
  ['png', 'image/png'],
  ['zip', 'application/zip'],
  ['doc', 'application/msword'],
  ['docx', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'],
  ['csv', 'text/csv'],
  ['xlss', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'],
  ['xls', 'application/vnd.ms-excel'],
]);

const FILES_TO_IGNORE = ['.DS_Store', 'Thumbs.db'];

type FileArray = Array<FileValue>;

type FileValue = FileWithPath | FileArray[];

interface DOMFile extends Blob {
  readonly lastModified: number;
  readonly name: string;
}

export interface FileWithPath extends DOMFile {
  readonly path?: string;
}

interface FileWithWebkitPath extends File {
  readonly webkitRelativePath?: string;
}

export async function fromEvent(evt: Event): Promise<(FileWithPath | DataTransferItem)[]> {
  return isDragEvt(evt) && evt.dataTransfer ? getDataTransferFiles(evt.dataTransfer, evt.type) : getInputFiles(evt);
}

function isDragEvt(value: any): value is DragEvent {
  return !!value.dataTransfer;
}

export function toFileWithPath(file: FileWithPath, path?: string): FileWithPath {
  const f = withMimeType(file);
  if (typeof f.path !== 'string') {
    const { webkitRelativePath } = file as FileWithWebkitPath;
    Object.defineProperty(f, 'path', {
      value:
        typeof path === 'string'
          ? path
          : typeof webkitRelativePath === 'string' && webkitRelativePath.length > 0
          ? webkitRelativePath
          : file.name,
      writable: false,
      configurable: false,
      enumerable: true,
    });
  }

  return f;
}

function withMimeType(file: FileWithPath) {
  const { name } = file;
  const hasExtension = name && name.lastIndexOf('.') !== -1;

  if (hasExtension && !file.type) {
    const ext = name.split('.').pop()!.toLowerCase();
    const type = COMMON_MIME_TYPES.get(ext);
    if (type) {
      Object.defineProperty(file, 'type', {
        value: type,
        writable: false,
        configurable: false,
        enumerable: true,
      });
    }
  }

  return file;
}

function getInputFiles(evt: Event) {
  const files = isInput(evt.target) ? (evt.target.files ? fromList<FileWithPath>(evt.target.files) : []) : [];
  return files.map((file) => toFileWithPath(file));
}

function isInput(value: EventTarget | null): value is HTMLInputElement {
  return value !== null;
}

async function getDataTransferFiles(dt: DataTransfer, type: string) {
  if (dt.items) {
    const items = fromList<DataTransferItem>(dt.items).filter((item) => item.kind === 'file');

    if (type !== 'drop') {
      return items;
    }
    const files = await Promise.all(items.map(toFilePromises));
    return noIgnoredFiles(flatten<FileWithPath>(files));
  }

  return noIgnoredFiles(fromList<FileWithPath>(dt.files).map((file) => toFileWithPath(file)));
}

function noIgnoredFiles(files: FileWithPath[]) {
  return files.filter((file) => FILES_TO_IGNORE.indexOf(file.name) === -1);
}

function fromList<T>(items: DataTransferItemList | FileList): T[] {
  const files = [];

  // tslint:disable: prefer-for-of
  for (let i = 0; i < items.length; i++) {
    const file = items[i];
    files.push(file);
  }

  return files as any;
}

function toFilePromises(item: DataTransferItem) {
  if (typeof item.webkitGetAsEntry !== 'function') {
    return fromDataTransferItem(item);
  }

  const entry = item.webkitGetAsEntry();

  if (entry && entry.isDirectory) {
    return fromDirEntry(entry) as any;
  }

  return fromDataTransferItem(item);
}

function flatten<T>(items: any[]): T[] {
  return items.reduce((acc, files) => [...acc, ...(Array.isArray(files) ? flatten(files) : [files])], []);
}

function fromDataTransferItem(item: DataTransferItem) {
  const file = item.getAsFile();
  if (!file) {
    return Promise.reject(`${item} is not a File`);
  }
  const fwp = toFileWithPath(file);
  return Promise.resolve(fwp);
}

async function fromEntry(entry: any) {
  return entry.isDirectory ? fromDirEntry(entry) : fromFileEntry(entry);
}

function fromDirEntry(entry: any) {
  const reader = entry.createReader();

  return new Promise<FileArray[]>((resolve, reject) => {
    const entries: Promise<FileValue[]>[] = [];

    function readEntries() {
      reader.readEntries(
        async (batch: any[]) => {
          if (!batch.length) {
            // Done reading directory
            try {
              const files = await Promise.all(entries);
              resolve(files);
            } catch (err) {
              reject(err);
            }
          } else {
            const items = Promise.all(batch.map(fromEntry));
            entries.push(items);

            // Continue reading
            readEntries();
          }
        },
        (err: any) => {
          reject(err);
        }
      );
    }

    readEntries();
  });
}

async function fromFileEntry(entry: any) {
  return new Promise<FileWithPath>((resolve, reject) => {
    entry.file(
      (file: FileWithPath) => {
        const fwp = toFileWithPath(file, entry.fullPath);
        resolve(fwp);
      },
      (err: any) => {
        reject(err);
      }
    );
  });
}
