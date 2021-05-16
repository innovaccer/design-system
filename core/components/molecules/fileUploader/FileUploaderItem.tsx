import * as React from 'react';
import classNames from 'classnames';
import { Text, Icon, Caption } from '@/index';
import { BaseProps, extractBaseProps } from '@/utils/types';
import FileUploaderStatus from './FileUploaderStatus';
import Button from './../../atoms/button/Button';

export type FileStatus = 'uploading' | 'completed' | 'error';


export interface FileItem {
  /**
   * Attached file
   *
   * File: Native File object that provides information about files.
   */
  file: File;
  /**
   * Unique id/index of file
   */
  id?: any;
  /**
   * Status of file
   *
   * FileStatus: 'uploading' | 'completed' | 'error'
   */
  status?: FileStatus;
  /**
   * Progress percent of `Progress Ring`
   */
  progress?: number;
  /**
   * Error Message to be shown when status is `error`
   */
  errorMessage?: string;
}

export interface FileUploaderItemProps extends BaseProps, FileItem {
  onDelete?: (file: File, id?: any) => void;
  onRetry?: (file: File, id?: any) => void;
  onClick?: (file: File, id?: any) => void;
}

export const FileUploaderItem = (props: FileUploaderItemProps) => {
  const {
    file,
    id,
    status,
    errorMessage,
    progress,
    onClick,
    onDelete,
    onRetry,
    className,
  } = props;

  const { name } = file;

  const baseProps = extractBaseProps(props);

  const FileItemClass = classNames({
    ['FileUploaderItem']: true,
  }, className);

  return (
    <div {...baseProps} className={FileItemClass} onClick={() => onClick && onClick(file, id)}>
      <div className="FileUploaderItem-file">
        <Text
          className="FileUploaderItem-text"
          appearance={status === 'completed' ? 'default' : 'subtle'}
        >
          {name}
        </Text>
        <div className="d-flex align-items-center">
        <Button appearance='transparent'><FileUploaderStatus
            file={file}
            id={id}
            status={status}
            progress={progress}
            onRetry={() => onRetry && onRetry(file, id)}
          />
          </Button>
          <Button appearance='transparent'><Icon
            name="close"
            size={20}
            onClick={() => onDelete && onDelete(file, id)}
            className="py-2 px-2 my-3 mx-3 cursor-pointer"
          />
          </Button>
        </div>
      </div>
      {status === 'error' && (
        <Caption error={true}>{errorMessage}</Caption>
      )}
    </div>
  );
};

FileUploaderItem.defaultProps = {
  status: 'completed',
  progress: 0,
  errorMessage: 'Network Error'
};

FileUploaderItem.displayName = 'FileUploaderItem';

export default FileUploaderItem;
