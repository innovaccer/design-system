const isIe = (userAgent: string) => {
  return userAgent.indexOf('MSIE') !== -1 || userAgent.indexOf('Trident/') !== -1;
};

const isEdge = (userAgent: string) => {
  return userAgent.indexOf('Edge/') !== -1;
};

export const accepts = (file: File, acceptedFiles?: string | string[]) => {
  if (file && acceptedFiles) {
    const acceptedFilesArray = Array.isArray(acceptedFiles) ? acceptedFiles : acceptedFiles.split(',');
    const fileName = file.name || '';
    const mimeType = (file.type || '').toLowerCase();
    const baseMimeType = mimeType.replace(/\/.*$/, '');

    if (!mimeType) {
      return true;
    }

    return acceptedFilesArray.some((type) => {
      const validType = type.trim().toLowerCase();
      if (validType.charAt(0) === '.') {
        return fileName.toLowerCase().endsWith(validType);
      }
      if (validType.endsWith('/*')) {
        return baseMimeType === validType.replace(/\/.*$/, '');
      }
      return mimeType === validType;
    });
  }
  return true;
};

export const isPropagationStopped = (event: any) => {
  if (typeof event.isPropagationStopped === 'function') {
    return event.isPropagationStopped();
  }
  if (typeof event.cancelBubble !== 'undefined') {
    return event.cancelBubble;
  }
  return false;
};

export const isEvtWithFiles = (event: any) => {
  if (!event.dataTransfer) {
    return !!event.target && !!event.target.files;
  }

  return Array.prototype.some.call(
    event.dataTransfer.types,
    (type) => type === 'Files' || type === 'application/x-moz-file'
  );
};

export const isKindFile = (item: null | Record<string, unknown>) => {
  return typeof item === 'object' && item !== null && item.kind === 'file';
};

export const onDocumentDragOver = (event: DragEvent) => {
  event.preventDefault();
};

export const isIeOrEdge = (userAgent = window.navigator.userAgent) => {
  return isIe(userAgent) || isEdge(userAgent);
};

type functype = (event: Event, ...args: unknown[]) => void;

export const composeEventHandlers = (...fns: functype[]) => {
  return (event: Event, ...args: unknown[]) =>
    fns.some((fn) => {
      if (!isPropagationStopped(event) && fn) {
        fn(event, ...args);
      }
      return isPropagationStopped(event);
    });
};

export const reducer = (state: any, action: any) => {
  switch (action.type) {
    case 'focus':
      return {
        ...state,
        isFocused: true,
      };
    case 'blur':
      return {
        ...state,
        isFocused: false,
      };
    case 'openDialog':
      return {
        ...state,
        isFileDialogActive: true,
      };
    case 'closeDialog':
      return {
        ...state,
        isFileDialogActive: false,
      };
    case 'setDraggedFiles':
      /* eslint no-case-declarations: 0 */
      const { isDragActive, draggedFiles } = action;
      return {
        ...state,
        draggedFiles,
        isDragActive,
      };
    case 'setFiles':
      return {
        ...state,
        acceptedFiles: action.acceptedFiles,
        fileRejections: action.fileRejections,
      };
    case 'reset':
      return {
        ...state,
        isFileDialogActive: false,
        isDragActive: false,
        draggedFiles: [],
        acceptedFiles: [],
        fileRejections: [],
      };
    default:
      return state;
  }
};
