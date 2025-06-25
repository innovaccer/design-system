import * as React from 'react';
import classNames from 'classnames';
import { Text } from '@/index';
import FileUploaderFormat, { FileUploaderFormatProps } from './FileUploaderFormat';
import FileUploaderButton, { FileUploaderButtonProps } from './FileUploaderButton';
import { BaseProps, extractBaseProps } from '@/utils/types';
import styles from '@css/components/fileUploader.module.css';

export interface FileUploaderProps extends FileUploaderButtonProps, FileUploaderFormatProps, BaseProps {
  /**
   * Describes the heading of `FileUploader`
   */
  title: string;
  /**
   * Description of maximum size in `FileUploader`
   */
  sizeLabel: string;
  /**
   * Link component to download sample file
   */
  sampleFileLink?: React.JSX.Element;
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

  const FileUploaderClass = classNames(
    {
      [styles['FileUploader']]: true,
    },
    className
  );

  return (
    <div {...baseProps} className={FileUploaderClass} data-test="DesignSystem-FileUploader">
      <Text weight="medium">{title}</Text>
      <FileUploaderFormat formatLabel={formatLabel} />
      <Text size="small" appearance="subtle" className={!formatLabel ? 'mt-4' : ''}>
        {sizeLabel}
      </Text>
      {sampleFileLink && <div className="mt-4">{sampleFileLink}</div>}
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

FileUploader.defaultProps = Object.assign({}, FileUploaderButton.defaultProps, {
  title: 'Upload files',
  sizeLabel: 'Maximum size: 25 MB',
});

FileUploader.displayName = 'FileUploader';

export default FileUploader;
