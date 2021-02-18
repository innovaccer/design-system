import * as React from 'react';
import classNames from 'classnames';
import { Text } from '@/index';
import FileUploaderButton, { FileUploaderButtonProps } from './FileUploaderButton';
import { BaseProps, extractBaseProps } from '@/utils/types';

export interface FileUploaderProps extends FileUploaderButtonProps, BaseProps {
  /**
   * Describes the heading of `FileUploader`
   */
  title: string;
  /**
   * Description of accepted formats in `FileUploader`
   */
  formatLabel?: string;
  /**
   * Description of maximum size in `FileUploader`
   */
  sizeLabel: string;
  /**
   * Link component to download sample file
   */
  sampleFileLink?: JSX.Element;
}

export const FileUploader = (props: FileUploaderProps) => {
  const {
    accept,
    multiple,
    disabled,
    title,
    uploadButtonLabel,
    sizeLabel,
    formatLabel,
    sampleFileLink,
    className,
    id,
    name,
    onChange,
  } = props;

  const baseProps = extractBaseProps(props);

  const FileUploaderClass = classNames({
    ['FileUploader']: true,
  }, className);

  return (
    <div {...baseProps} className={FileUploaderClass}>
      {title && <Text weight="medium">{title}</Text>}
      {formatLabel && (
        <Text size="small" appearance="subtle" className="mt-4">
          {formatLabel}
        </Text>
      )}
      {sizeLabel && (
        <Text
          size="small"
          appearance="subtle"
          className={!formatLabel ? 'mt-4' : ''}
        >
          {sizeLabel}
        </Text>
      )}
      {sampleFileLink && (
        <div className="FileUploader-link">
          {sampleFileLink}
        </div>
      )}
      <FileUploaderButton
        id={id}
        name={name}
        accept={accept}
        multiple={multiple}
        disabled={disabled}
        uploadButtonLabel={uploadButtonLabel}
        onChange={onChange}
        className="mt-5"
      />
    </div>
  );
};

FileUploader.defaultProps = Object.assign({},
  FileUploaderButton.defaultProps,
  {
    title: 'Upload files',
    sizeLabel: 'Maximum size: 25 MB',
    fileNames: [],
  }
);

FileUploader.displayName = 'FileUploader';

export default FileUploader;
