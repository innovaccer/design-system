import * as React from 'react';
import classNames from 'classnames';
import { Text, InlineMessage, Button } from '@/index';
import { BaseProps, extractBaseProps, OmitNativeProps } from '@/utils/types';
import useAccessibilityProps from '@/accessibility/utils/useAccessibilityProps';
import FileUploaderStatus from './FileUploaderStatus';
import { FileStatus } from '@/common.type';
import styles from '@css/components/fileUploader.module.css';

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

export interface FileUploaderItemProps extends BaseProps, OmitNativeProps<HTMLDivElement, 'onClick'>, FileItem {
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
    role,
    tabIndex,
    onKeyDown,
    'aria-label': ariaLabel,
    ...rest
  } = props;

  const { name } = file;

  const baseProps = extractBaseProps(props);

  const FileItemClass = classNames(
    {
      [styles['FileUploaderItem']]: true,
    },
    className
  );

  const accessibilityProps = onClick
    ? useAccessibilityProps({
        onClick: () => onClick(file, id),
        onKeyDown,
        role,
        tabIndex,
        'aria-label': ariaLabel,
      })
    : {};

  return (
    <div
      {...baseProps}
      {...rest}
      {...accessibilityProps}
      data-test="DesignSystem-FileUploader--Item"
      className={FileItemClass}
    >
      <div className={styles['FileUploaderItem-file']}>
        <Text className={styles['FileUploaderItem-text']} appearance={status === 'completed' ? 'default' : 'subtle'}>
          {name}
        </Text>
        <div className="d-flex align-items-center">
          <FileUploaderStatus
            file={file}
            id={id}
            status={status}
            progress={progress}
            onRetry={() => onRetry && onRetry(file, id)}
          />
          <Button
            data-test="DesignSystem-FileUploader--CancelButton"
            appearance="transparent"
            size="regular"
            onClick={() => onDelete && onDelete(file, id)}
            icon="close"
            aria-label={`Remove ${name}`}
          />
        </div>
      </div>
      {status === 'error' && <InlineMessage size="small" appearance="alert" description={errorMessage} />}
    </div>
  );
};

FileUploaderItem.defaultProps = {
  status: 'completed',
  progress: 0,
  errorMessage: 'Network Error',
};

FileUploaderItem.displayName = 'FileUploaderItem';

export default FileUploaderItem;
