import * as React from 'react';
import classNames from 'classnames';
import { Button } from '@/index';
import { BaseProps, extractBaseProps } from '@/utils/types';
import styles from '@css/components/fileUploader.module.css';

export interface FileUploaderButtonProps extends BaseProps {
  /**
   * Name of the `FileUploaderInput`
   */
  name?: string;
  /**
   * Id of `FileUploaderInput`
   */
  id?: string;
  /**
   * Describes the types of files that `FileUploader` should be able to receive
   */
  accept?: string[];
  /**
   * Describes if `FileUploader` should accept multiple files to upload
   */
  multiple: boolean;
  /**
   * Label of `FileUploaderButton`
   */
  uploadButtonLabel: string;
  /**
   * Specify whether file input is disabled
   */
  disabled: boolean;
  /**
   * Callback called when file is selected
   */
  onChange?: (fileList: File[], event: React.ChangeEvent<HTMLInputElement>) => void;
  /**
   * Associates the file input with a visible label element
   */
  'aria-labelledby'?: string;
  /**
   * Associates the file input with descriptive text (e.g. size/format constraints)
   */
  'aria-describedby'?: string;
}

export const FileUploaderButton = (props: FileUploaderButtonProps) => {
  const {
    accept,
    multiple,
    uploadButtonLabel,
    disabled,
    name,
    className,
    id,
    onChange,
    'aria-labelledby': ariaLabelledBy,
    'aria-describedby': ariaDescribedBy,
  } = props;

  const baseProps = extractBaseProps(props);

  const FileUploaderButtonClass = classNames(
    {
      [styles['FileUploaderButton']]: true,
    },
    className
  );

  return (
    <div {...baseProps} className={FileUploaderButtonClass}>
      <Button type="button" disabled={disabled} icon="backup">
        {uploadButtonLabel}
      </Button>
      <input
        name={name}
        id={id}
        data-test="DesignSystem-FileUploaderButton--Input"
        accept={accept && accept.join(', ')}
        multiple={multiple}
        disabled={disabled}
        type="file"
        tabIndex={-1}
        aria-label={uploadButtonLabel}
        className={styles['FileUploaderButton-input']}
        aria-labelledby={ariaLabelledBy}
        aria-describedby={ariaDescribedBy}
        onChange={(event) => {
          const fileList = event.target.files ? Array.from(event.target.files) : [];
          if (onChange) onChange(fileList, event);
        }}
      />
    </div>
  );
};

FileUploaderButton.defaultProps = {
  uploadButtonLabel: 'Upload files',
  disabled: false,
  multiple: false,
};

FileUploaderButton.displayName = 'FileUploaderButton';

export default FileUploaderButton;
