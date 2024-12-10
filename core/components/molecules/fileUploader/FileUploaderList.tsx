import * as React from 'react';
import classNames from 'classnames';
import FileUploaderItem, { FileItem } from './FileUploaderItem';
import { BaseProps, extractBaseProps } from '@/utils/types';
import styles from '@css/components/fileUploader.module.css';

export interface FileUploaderListProps extends BaseProps {
  /**
   * <pre style="font-family: monospace; font-size: 13px; background: #f8f8f8">
   * Array of FileItem object.
   * FileItem:
   * {
   *    file: File;
   *    id?: any;
   *    status: FileStatus;
   *    progress: number;
   *    errorMessage: string;
   * }
   *
   * | Name | Description | Default |
   * | --- | --- | --- |
   * | file | Attached file | |
   * | id | Unique id/index of file | |
   * | status | Status of file | 'completed' |
   * | progress | Progress percent of `Progress Ring` | 0 |
   * | errorMessage | Error Message to be shown when status is `error` | 'Network Error' |
   * </pre>
   */
  fileList: FileItem[];
  /**
   * Callback called when file item is clicked
   */
  onClick?: (file: File, id?: any) => void;
  /**
   * Callback called when remove icon is clicked
   */
  onDelete?: (file: File, id?: any) => void;
  /**
   * Callback called when retry icon is clicked
   */
  onRetry?: (file: File, id?: any) => void;
}

export const FileUploaderList = (props: FileUploaderListProps) => {
  const { fileList, onClick, onDelete, onRetry, className } = props;

  const baseProps = extractBaseProps(props);

  const FileListClass = classNames(
    {
      [styles['FileUploaderList']]: true,
    },
    className
  );

  if (fileList.length === 0) return null;

  return (
    <div {...baseProps} className={FileListClass} data-test="DesignSystem-FileUploader--List">
      {fileList.map((fileName, i) => (
        <FileUploaderItem key={i} onDelete={onDelete} onRetry={onRetry} onClick={onClick} {...fileName} />
      ))}
    </div>
  );
};

FileUploaderList.defaultProps = {
  fileList: [],
};

FileUploaderList.displayName = 'FileUploaderList';

export default FileUploaderList;
