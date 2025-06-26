import { useCallback, useEffect, useMemo, useReducer, useRef } from 'react';
import { composeEventHandlers, isEvtWithFiles, isPropagationStopped, onDocumentDragOver, reducer } from './utils';
import { allFilesAccepted, getFileError, fileAccepted, fileMatchSize, FileErrorTypes } from './FileErrors';

import { fromEvent } from './FileSelectorUtils';
import { BaseProps } from '@/utils/types';

interface FileError {
  type: FileErrorTypes;
  message: string;
}

export interface FileRejection {
  file: File;
  errors: FileError[];
}

export interface DropzoneBaseProps extends BaseProps {
  /**
   * Set accepted file types.
   */
  accept?: string | string[];
  /**
   * Allow drag 'n' drop (or selection from the file dialog) of multiple files
   */
  multiple?: boolean;
  /**
   * If false, allow dropped items to take over the current browser window
   */
  preventDropOnDocument?: boolean;
  /**
   * Minimum file size (in bytes)
   */
  minSize: number;
  /**
   * Maximum file size (in bytes)
   */
  maxSize: number;
  /**
   * Enable/disable the dropzone
   */
  disabled: boolean;
  /**
   * Use this to provide a custom file aggregator
   *
   * @param {(DragEvent|Event)} event A drag event or input change event (if files were selected via the file dialog)
   */
  getFilesFromEvent: (event: DragEvent | Event) => any;
  /**
   * Callback for when closing the file dialog with no selection
   */
  onFileDialogCancel?: () => void;
  /**
   * Callback for when the `dragenter` event occurs.
   *
   * @param {DragEvent} event
   */
  onDragEnter?: (event: DragEvent) => void;
  /**
   * Callback for when the `dragleave` event occurs
   *
   * @param {DragEvent} event
   */
  onDragLeave?: (event: DragEvent) => void;
  /**
   * Callback for when the `dragover` event occurs
   *
   * @param {DragEvent} event
   */
  onDragOver?: (event: DragEvent) => void;
  /**
   * Callback for when the `drop` event occurs.
   * Note that the `onDrop` callback will always be invoked regardless if the dropped files were accepted or rejected.
   *
   * <pre className="DocPage-codeBlock">
   * FileError: {
   *   type: 'FILE_INVALID_TYPE' | 'FILE_TOO_LARGE' | 'FILE_TOO_SMALL' | 'TOO_MANY_FILES';
   *   message: string;
   * }
   *
   * FileRejection {
   *  file: File;
   *  errors: FileError[];
   * }
   * </pre>
   *
   * @param {File[]} acceptedFiles
   * @param {FileRejection[]} fileRejections
   * @param {(DragEvent|Event)} event A drag event or input change event (if files were selected via the file dialog)
   */
  onDrop?: (event: DragEvent | Event, acceptedFiles: File[], rejectedFiles: FileRejection[]) => void;

  /**
   * Callback for when the `drop` event occurs.
   * Note that if no files are accepted, this callback is not invoked.
   *
   * @param {File[]} files
   * @param {(DragEvent|Event)} event
   */
  onDropAccepted?: (event: DragEvent | Event, files: File[]) => void;

  /**
   * Callback for when the `drop` event occurs.
   * Note that if no files are rejected, this callback is not invoked.
   *
   * @param {FileRejection[]} fileRejections
   * @param {(DragEvent|Event)} event
   */
  onDropRejected?: (event: DragEvent | Event, rejectedFiles: FileRejection[]) => void;

  /**
   * Custom validation function
   * The value must be a function that accepts File object and returns null if file should be accepted
   * or error object/array of error objects if file should me rejected
   *
   * @param {File} file
   * @returns {FileError|FileError[]}
   */
  validator?: (file: File) => FileError | FileError[];
}

const initialState = {
  isFocused: false,
  isFileDialogActive: false,
  isDragActive: false,
  isDragAccept: false,
  isDragReject: false,
  draggedFiles: [],
  acceptedFiles: [],
  fileRejections: [],
};

export const DropzoneBase = (props: DropzoneBaseProps) => {
  const {
    accept,
    disabled,
    maxSize,
    minSize,
    multiple,
    onDragEnter,
    onDragLeave,
    onDragOver,
    onDrop,
    onDropAccepted,
    onDropRejected,
    onFileDialogCancel,
    getFilesFromEvent,
    preventDropOnDocument,
    validator,
  } = props;

  const rootRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const [state, dispatch] = useReducer(reducer, initialState);
  const { isFocused, isFileDialogActive, draggedFiles } = state;

  const openFileDialog = useCallback(() => {
    if (inputRef.current) {
      dispatch({ type: 'openDialog' });

      inputRef.current.value = '';

      inputRef.current.click();
    }
  }, [dispatch]);

  const onWindowFocus = () => {
    if (isFileDialogActive) {
      setTimeout(() => {
        if (inputRef.current) {
          const { files } = inputRef.current;

          if (!files || !files.length) {
            dispatch({ type: 'closeDialog' });

            if (typeof onFileDialogCancel === 'function') {
              onFileDialogCancel();
            }
          }
        }
      }, 300);
    }
  };
  useEffect(() => {
    window.addEventListener('focus', onWindowFocus, false);
    return () => {
      window.removeEventListener('focus', onWindowFocus, false);
    };
  }, [inputRef, isFileDialogActive, onFileDialogCancel]);

  // Cb to open the file dialog when SPACE/ENTER occurs on the dropzone
  const onKeyDownCb = useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (!rootRef.current || !rootRef.current.isEqualNode(event.target as Node)) {
        return;
      }

      if (event.keyCode === 32 || event.keyCode === 13) {
        event.preventDefault();
        openFileDialog();
      }
    },
    [rootRef, inputRef]
  );

  // Update focus state for the dropzone
  const onFocusCb = useCallback(() => {
    dispatch({ type: 'focus' });
  }, []);

  const onBlurCb = useCallback(() => {
    dispatch({ type: 'blur' });
  }, []);

  const dragTargetsRef = useRef<HTMLElement[]>([]);

  const onDocumentDrop = (event: DragEvent) => {
    // Not every event target type is element so we have to check if it is.
    const target = event.target as Node;
    if (rootRef.current && rootRef.current.contains(target)) {
      return;
    }
    event.preventDefault();
    dragTargetsRef.current = [];
  };

  useEffect(() => {
    if (preventDropOnDocument) {
      document.addEventListener('dragover', onDocumentDragOver, false);
      document.addEventListener('drop', onDocumentDrop, false);
    }

    return () => {
      if (preventDropOnDocument) {
        document.removeEventListener('dragover', onDocumentDragOver);
        document.removeEventListener('drop', onDocumentDrop);
      }
    };
  }, [rootRef, preventDropOnDocument]);

  const onDragEnterCb = useCallback(
    (event: any) => {
      event.preventDefault();
      event.persist();

      dragTargetsRef.current = [...dragTargetsRef.current, event.target];

      if (isEvtWithFiles(event)) {
        Promise.resolve(getFilesFromEvent(event)).then((files) => {
          if (isPropagationStopped(event)) {
            return;
          }

          dispatch({
            draggedFiles: files,
            isDragActive: true,
            type: 'setDraggedFiles',
          });

          if (onDragEnter) {
            onDragEnter(event);
          }
        });
      }
    },
    [getFilesFromEvent, onDragEnter]
  );

  const onDragOverCb = useCallback(
    (event: any) => {
      event.preventDefault();
      event.persist();

      if (event.dataTransfer) {
        try {
          event.dataTransfer.dropEffect = 'copy';
        } catch {} /* eslint-disable-line no-empty */
      }

      if (isEvtWithFiles(event) && onDragOver) {
        onDragOver(event);
      }

      return false;
    },
    [onDragOver]
  );

  const onDragLeaveCb = useCallback(
    (event: any) => {
      event.preventDefault();
      event.persist();

      const targets = dragTargetsRef.current.filter((target) => rootRef.current && rootRef.current.contains(target));
      const targetIdx = targets.indexOf(event.target);
      if (targetIdx !== -1) {
        targets.splice(targetIdx, 1);
      }
      dragTargetsRef.current = targets;
      if (targets.length > 0) {
        return;
      }

      dispatch({
        isDragActive: false,
        type: 'setDraggedFiles',
        draggedFiles: [],
      });

      if (isEvtWithFiles(event) && onDragLeave) {
        onDragLeave(event);
      }
    },
    [rootRef, onDragLeave]
  );

  const onDropCb = useCallback(
    (event: any) => {
      event.preventDefault();
      // Persist here because we need the event later after getFilesFromEvent() is done
      event.persist();

      dragTargetsRef.current = [];

      if (isEvtWithFiles(event)) {
        Promise.resolve(getFilesFromEvent(event)).then((files) => {
          if (isPropagationStopped(event)) {
            return;
          }

          const acceptedFiles: File[] = [];
          const fileRejections: {
            file: File;
            errors: FileError[];
          }[] = [];

          files.forEach((file: File) => {
            const [accepted, acceptError] = fileAccepted(file, accept);
            const [sizeMatch, sizeError] = fileMatchSize(file, minSize, maxSize);
            const customErrors = validator ? validator(file) : null;

            if (accepted && sizeMatch && !customErrors) {
              acceptedFiles.push(file);
            } else {
              let errors = [acceptError, sizeError];

              if (customErrors) {
                errors = errors.concat(customErrors);
              }
              const filteredErrors = errors.filter((e) => e) as Array<FileError>;
              fileRejections.push({ file, errors: filteredErrors });
            }
          });

          dispatch({
            acceptedFiles,
            fileRejections,
            type: 'setFiles',
          });

          if (onDrop) {
            onDrop(event, acceptedFiles, fileRejections);
          }

          if (fileRejections.length > 0 && onDropRejected) {
            onDropRejected(event, fileRejections);
          }

          if (acceptedFiles.length > 0 && onDropAccepted) {
            onDropAccepted(event, acceptedFiles);
          }
        });
      }
      dispatch({ type: 'reset' });
    },
    [multiple, accept, minSize, maxSize, getFilesFromEvent, onDrop, onDropAccepted, onDropRejected]
  );

  const composeDragHandler = (fn: (event: Event) => void) => {
    return disabled ? null : fn;
  };

  const getRootProps = useMemo(
    () =>
      ({
        refKey = 'ref',
        onKeyDown,
        onFocus,
        onBlur,
        onClick,
        onDragEnterCallback,
        onDragOverCallback,
        onDragLeaveCallback,
        onDropCallback,
        ...rest
      }: any = {}) => ({
        onDragEnter: composeDragHandler(composeEventHandlers(onDragEnterCallback, onDragEnterCb as any)),
        onDragOver: composeDragHandler(composeEventHandlers(onDragOverCallback, onDragOverCb as any)),
        onDragLeave: composeDragHandler(composeEventHandlers(onDragLeaveCallback, onDragLeaveCb as any)),
        onDrop: composeDragHandler(composeEventHandlers(onDropCallback, onDropCb as any)),
        [refKey]: rootRef,
        ...rest,
      }),
    [rootRef, onKeyDownCb, onFocusCb, onBlurCb, onDragEnterCb, onDragOverCb, onDragLeaveCb, onDropCb, disabled]
  );

  const onInputElementClick = useCallback((event: React.MouseEvent<HTMLInputElement>) => {
    event.stopPropagation();
  }, []);

  const getInputProps = useMemo(
    () =>
      ({ refKey = 'ref', onChange, onClick, ...rest }: any = {}) => {
        const inputProps = {
          accept,
          multiple,
          type: 'file',
          style: { display: 'none' },
          onChange: composeDragHandler(composeEventHandlers(onChange, onDropCb as any)),
          onClick: composeDragHandler(composeEventHandlers(onClick, onInputElementClick as any)),
          autoComplete: 'off',
          tabIndex: -1,
          [refKey]: inputRef,
        };

        return {
          ...inputProps,
          ...rest,
        };
      },
    [inputRef, accept, multiple, onDropCb, disabled]
  );

  const fileCount = draggedFiles.length;
  const isDragAccept = fileCount > 0 && allFilesAccepted({ accept, minSize, maxSize, multiple, files: draggedFiles });
  const isDragReject = fileCount > 0 && !isDragAccept;
  const fileError = isDragReject ? getFileError({ accept, minSize, maxSize, multiple, files: draggedFiles }) : '';

  return {
    ...state,
    isDragAccept,
    isDragReject,
    getRootProps,
    getInputProps,
    rootRef,
    inputRef,
    draggedFiles,
    fileError,
    isFocused: isFocused && !disabled,
    open: composeDragHandler(openFileDialog),
  };
};

DropzoneBase.displayName = 'DropzoneBase';

DropzoneBase.defaultProps = {
  disabled: false,
  getFilesFromEvent: fromEvent,
  maxSize: Infinity,
  minSize: 0,
  multiple: true,
  preventDropOnDocument: true,
  validator: () => null,
};

export default DropzoneBase;
