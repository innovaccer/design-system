import * as React from 'react';
import classNames from 'classnames';
import { Text } from '@/index';
import FileUploaderFormat, { FileUploaderFormatProps } from './FileUploaderFormat';
import FileUploaderButton, { FileUploaderButtonProps } from './FileUploaderButton';
import { BaseProps, extractBaseProps } from '@/utils/types';
import uidGenerator from '@/utils/uidGenerator';
import styles from '@css/components/fileUploader.module.css';

export type FileUploaderProps = {
  /**
   * Describes the heading of `FileUploader`
   */
  title?: string;
  /**
   * Description of maximum size in `FileUploader`
   */
  sizeLabel?: string;
  /**
   * Link component to download sample file
   */
  sampleFileLink?: React.JSX.Element;
} & FileUploaderButtonProps &
  FileUploaderFormatProps &
  BaseProps;

export const FileUploader = (props: FileUploaderProps) => {
  const {
    accept,
    multiple,
    disabled,
    title = 'Upload files',
    uploadButtonLabel,
    sizeLabel = 'Maximum size: 25 MB',
    formatLabel,
    sampleFileLink,
    className,
    id,
    name,
    onChange,
  } = props;

  const baseProps = extractBaseProps(props);
  const baseIdRef = React.useRef<string | null>(null);
  if (!baseIdRef.current) {
    baseIdRef.current = `file-uploader-${uidGenerator()}`;
  }
  const baseId = baseIdRef.current;
  const titleId = `${baseId}-title`;
  const sizeLabelId = `${baseId}-size`;

  const FileUploaderClass = classNames(
    {
      [styles['FileUploader']]: true,
    },
    className
  );

  return (
    <div {...baseProps} className={FileUploaderClass} data-test="DesignSystem-FileUploader">
      <Text weight="medium" id={titleId}>
        {title}
      </Text>
      <FileUploaderFormat formatLabel={formatLabel} />
      <Text size="small" appearance="subtle" className={!formatLabel ? 'mt-4' : ''} id={sizeLabelId}>
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
        aria-labelledby={titleId}
        aria-describedby={sizeLabelId}
      />
    </div>
  );
};

FileUploader.displayName = 'FileUploader';

export default FileUploader;
