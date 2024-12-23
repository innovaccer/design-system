import * as React from 'react';
import classNames from 'classnames';
import { Text, InlineMessage } from '@/index';
import { BaseProps, extractBaseProps } from '@/utils/types';
import FileIcon from './FileIcon';
import { FileStatus } from '@/common.type';
import styles from '@css/components/fileList.module.css';

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
      [styles['FileItem']]: true,
    },
    className
  );

  const onClickHandler = () => {
    if (onClick) {
      onClick(fileItem);
    }
  };

  return (
    // TODO(a11y)
    //  eslint-disable-next-line
    <div {...baseProps} className={FileItemClass} onClick={onClickHandler} data-test="DesignSystem-FileListItem">
      <div className={styles['FileItem-file']}>
        <div className={styles['FileItem-fileContent']}>
          <FileIcon file={file} status={status} progress={progress} />
          <Text
            data-test="DesignSystem-FileListItem--Name"
            className={styles['FileItem-text']}
            appearance={status === 'completed' ? 'default' : 'subtle'}
            weight="medium"
          >
            {name}
          </Text>
        </div>
        <div className={styles['FileItem-actions']}>
          <Text
            className={styles['FileItem-size']}
            size="small"
            appearance={'subtle'}
            data-test="DesignSystem-FileListItem--Size"
          >
            {fileSize || file.size}
          </Text>
          {!!actions && actions}
        </div>
      </div>
      {status === 'error' && (
        <InlineMessage
          size="small"
          appearance="alert"
          description={errorMessage}
          className={styles['FileItem-error']}
        />
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
