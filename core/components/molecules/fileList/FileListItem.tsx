import * as React from 'react';
import classNames from 'classnames';
import { Text, Caption } from '@/index';
import { BaseProps, extractBaseProps } from '@/utils/types';
import FileIcon from './FileIcon';

export type FileStatus = 'uploading' | 'completed' | 'error';

export interface FileObject extends BaseProps, Record<string, any> {
  /**
   * Name of the file
   */
  name: string;
  /**
   * Size of the file
   */
  size: string;
  /**
   * Type of the file
   */
  type: string;
}
export interface FileListItemProps extends BaseProps, Record<string, any> {
  /**
   * Attached file
   *
   * File: Native File object that provides information about files.
   */
  file: File | FileObject;
  /**
   * Status of file
   *
   * FileStatus: 'uploading' | 'completed' | 'error'
   */
  status: FileStatus;
  /**
   * Progress percent of `Progress Ring`
   */
  progress?: number;
  /**
   * Error Message to be shown when status is `error`
   */
  errorMessage?: string;
  /**
   * Actions to be rendered inside the file item
   */
  actions?: React.ReactNode;
  /**
   * Complete fileItem object
   */
  fileItem?: any;
  /**
   * Size of file;
   */
  fileSize?: string;
  /**
   * Callback called when file item is clicked
   */
  onClick?: (file: FileListItemProps) => void;
}

export const FileListItem = (props: FileListItemProps) => {
  const { progress, errorMessage, onClick, className, actions, fileItem, file, status, fileSize } = props;

  const { name } = file;

  const baseProps = extractBaseProps(props);

  const FileItemClass = classNames(
    {
      ['FileItem']: true,
    },
    className
  );

  const onClickHandler = () => {
    if (onClick) {
      onClick(fileItem);
    }
  };

  return (
    <div {...baseProps} className={FileItemClass} onClick={onClickHandler}>
      <div className="FileItem-file">
        <div className="FileItem-fileContent">
          <FileIcon file={file} status={status} progress={progress} />
          <Text className="FileItem-text" appearance={status === 'completed' ? 'default' : 'subtle'}>
            {name}
          </Text>
        </div>
        <div className="FileItem-actions">
          <Text className="FileItem-size" appearance={'subtle'}>
            {fileSize || file.size}
          </Text>
          {!!actions && actions}
        </div>
      </div>
      {status === 'error' && (
        <Caption className={'FileItem-error'} error={true}>
          {errorMessage}
        </Caption>
      )}
    </div>
  );
};

FileListItem.defaultProps = {
  progress: 0,
  errorMessage: 'Network Error',
};

FileListItem.displayName = 'FileListItem';

export default FileListItem;
