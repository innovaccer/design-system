export const COMMON_MIME_TYPES = new Map([
  // image
  ['gif', 'image/gif'],
  ['ico', 'image/x-icon'],
  ['jpeg', 'image/jpeg'],
  ['jpg', 'image/jpeg'],
  ['png', 'image/png'],
  ['bmp', 'image/bmp'],
  ['tif', 'image/tiff'],
  ['tiff', 'image/tiff'],
  ['apng', 'image/apng'],
  ['avif', 'image/avif'],
  ['jfif', 'image/jpeg'],
  ['pjpeg', 'image/pjpeg'],
  ['pjp', 'image/jpeg'],
  ['svg', 'image/svg+xml'],
  ['webp', 'image/webp'],
  ['cur', 'image/x-win-bitmap'],

  ['MTS', 'model/vnd.mts'],

  // Video
  ['roq', 'video'],
  ['f4a', 'video'],
  ['f4b', 'video'],
  ['drc', 'video'],
  ['nsv', 'video'],

  ['avi', 'video/x-msvideo'],
  ['mkv', 'video/x-matroska'],
  ['mov', 'video/quicktime'],
  ['mp4', 'video/mp4'],
  ['webm', 'video/webm'],
  ['flv', 'video/x-flv'],
  ['vob', 'video/x-ms-vob'],
  ['ogv', 'video/ogg'],
  ['ogg', 'application/ogg'],
  ['gifv', 'image/gif'],
  ['mng', 'video/x-mng'],
  ['M2TS', 'video/MP2T'],
  ['TS', 'video/mp2t'],
  ['qt', 'video/quicktime'],
  ['wmv', 'video/x-ms-wmv'],
  ['yuv', 'application/octet-stream'],
  ['rm', 'application/vnd.rn-realmedia'],
  ['rmvb', 'application/vnd.rn-realmedia-vbr'],
  ['viv', 'video/vnd.vivo'],
  ['asf', 'video/x-ms-asf'],
  ['amv', 'video/x-amv'],
  ['m4v', 'video/x-m4v'],
  ['mpg', 'video/mpeg'],
  ['mpeg', 'video/mpeg'],
  ['mpe', 'video/mpeg'],
  ['mpv', 'video/mpv'],
  ['m2v', 'video/mpeg'],
  ['svi', 'video/x-msvideo'],
  ['3gp', 'video/3gpp'],
  ['3g2', 'video/3gpp2'],
  ['mxf', 'application/mxf'],
  ['flv', 'video/x-flv'],
  ['f4v', 'video/x-f4v'],
  ['f4p', 'video/mp4'],

  // audio
  ['aa', 'audio'],
  ['aax', 'audio'],
  ['act', 'audio'],
  ['alac', 'audio'],
  ['ape', 'audio'],
  ['awb', 'audio'],
  ['dss', 'audio'],
  ['dvf', 'audio'],
  ['iklax', 'audio'],
  ['ivs', 'audio'],
  ['msv', 'audio'],
  ['nmf', 'audio'],
  ['mogg', 'audio'],
  ['raw', 'audio'],
  ['rf64', 'audio'],
  ['sln', 'audio'],
  ['wv', 'audio'],
  ['8svx', 'audio'],

  ['3gp', 'audio/3gpp'],
  ['mp2', 'audio/mpeg'],
  ['aac', 'audio/x-aac'],
  ['aiff', 'audio/x-aiff'],
  ['amr', 'audio/amr'],
  ['au', 'audio/basic'],
  ['flac', 'audio/x-flac'],
  ['gsm', 'audio/gsm'],
  ['m4a', 'audio/mp4a-latm'],
  ['m4b', 'audio/mp4a-latm'],
  ['m4p', 'audio/mp4a-latm'],
  ['mmf', 'application/vnd.smaf'],
  ['mp3', 'audio/mpeg'],
  ['ogg', 'audio/ogg'],
  ['oga', 'audio/ogg'],
  ['opus', 'audio/opus'],
  ['tta', 'audio/x-tta'],
  ['voc', 'audio/x-voice'],
  ['wav', 'audio/x-wav'],
  ['wma', 'audio/x-ms-wma'],
  ['webm', 'audio/webm'],
  ['cda ', 'application/x-cdf'],
  ['ra', 'audio/x-pn-realaudio'],
  ['vox', 'application/x-authorware-bin'],
  ['rm', 'application/vnd.rn-realmedia'],
  ['mpc', 'application/vnd.mophun.certificate'],

  // docs
  ['pdf', 'application/pdf'],
  ['zip', 'application/zip'],
  ['doc', 'application/msword'],
  ['docx', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'],
  ['xlss', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'],
  ['xlsx', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'],
  ['xls', 'application/vnd.ms-excel'],
  ['odt', 'application/vnd.oasis.opendocument.text'],
  ['tex', 'application/x-tex'],
  ['wpd', 'application/wordperfect'],
  ['ods', 'application/vnd.oasis.opendocument.spreadsheet'],
  ['csv', 'text/csv'],
  ['rtf', 'text/rtf'],
  ['txt', 'text/plain'],
  ['tsv', 'text/tab-separated-values'],
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
  readonly webkitRelativePath: string;
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
