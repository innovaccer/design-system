import { accepts } from './utils';

export type FileErrorTypes = 'FILE_INVALID_TYPE' | 'FILE_TOO_LARGE' | 'FILE_TOO_SMALL' | 'TOO_MANY_FILES';

export const fileErrorMessages: { [key: string]: string } = {
  FILE_INVALID_TYPE: 'File format not accepted',
  FILE_TOO_LARGE: 'File is too large',
  FILE_TOO_SMALL: 'File is too small',
  TOO_MANY_FILES: 'Multiple files are not accepted',
};

const isDefined = (value: any) => {
  return value !== undefined && value !== null;
};

export const getInvalidTypeRejectionErr = (accept?: string | string[]) => {
  const updatedAccept = Array.isArray(accept) && accept.length === 1 ? accept[0] : accept;
  const messageSuffix = Array.isArray(updatedAccept) ? `one of ${updatedAccept.join(', ')}` : updatedAccept;
  return {
    type: 'FILE_INVALID_TYPE',
    message: `File type must be ${messageSuffix}`,
  };
};

export const getTooLargeRejectionErr = (maxSize: number) => {
  return {
    type: 'FILE_TOO_LARGE',
    message: `File is larger than ${maxSize} bytes`,
  };
};

export const getTooSmallRejectionErr = (minSize: number) => {
  return {
    type: 'FILE_TOO_SMALL',
    message: `File is smaller than ${minSize} bytes`,
  };
};

export const fileAccepted = (file: File, accept?: string | string[]) => {
  const isAcceptable = file.type === 'application/x-moz-file' || accepts(file, accept);
  return [isAcceptable, isAcceptable ? null : getInvalidTypeRejectionErr(accept)];
};

export const fileMatchSize = (file: File, minSize: number, maxSize: number) => {
  if (isDefined(file.size)) {
    if (isDefined(minSize) && isDefined(maxSize)) {
      if (file.size > maxSize) return [false, getTooLargeRejectionErr(maxSize)];
      if (file.size < minSize) return [false, getTooSmallRejectionErr(minSize)];
    } else if (isDefined(minSize) && file.size < minSize) {
      return [false, getTooSmallRejectionErr(minSize)];
    } else if (isDefined(maxSize) && file.size > maxSize) {
      return [false, getTooLargeRejectionErr(maxSize)];
    }
  }
  return [true, null];
};

export const getFileError = (options: any) => {
  const { files, accept, minSize, maxSize, multiple } = options;

  if (!multiple && files.length > 1) {
    return 'TOO_MANY_FILES';
  }

  const typeError = files.every((file: File) => {
    const [accepted] = fileAccepted(file, accept);
    return !accepted;
  });

  const sizeError = files.every((file: File) => {
    const [sizeMatch] = fileMatchSize(file, minSize, maxSize);
    return !sizeMatch;
  });

  return typeError ? 'FILE_INVALID_TYPE' : sizeError ? 'FILE_TOO_LARGE' : '';
};

export const allFilesAccepted = (options: any) => {
  const { files, accept, minSize, maxSize, multiple } = options;
  if (!multiple && files.length > 1) {
    return false;
  }

  return files.every((file: File) => {
    const [accepted] = fileAccepted(file, accept);
    const [sizeMatch] = fileMatchSize(file, minSize, maxSize);
    return accepted && sizeMatch;
  });
};
