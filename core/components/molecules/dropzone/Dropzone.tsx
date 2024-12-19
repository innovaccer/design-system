import * as React from 'react';
import classNames from 'classnames';
import { Text } from '@/index';
import DropzoneBase, { DropzoneBaseProps } from './DropzoneBase';
import DropzoneActive from './DropzoneActive';
import DropzoneError from './DropzoneError';
import { BaseProps, extractBaseProps } from '@/utils/types';
import { fileErrorMessages } from './FileErrors';
import { useAccessibilityProps } from '@/accessibility/utils';
import DropzoneIcon from './DropzoneIcon';
import styles from '@css/components/dropzone.module.css';

export type DropZoneType = 'standard' | 'compressed' | 'tight';

export interface DropzoneProps extends BaseProps, DropzoneBaseProps {
  /**
   * Description of accepted formats in `FileUploader`
   */
  formatLabel?: string;
  /**
   * Size of `Dropzone`
   */
  type: DropZoneType;
  /**
   * Description of maximum size in `FileUploader`
   */
  sizeLabel?: string;
  /**
   * Link component to download sample file
   */
  sampleFileLink?: React.ReactNode;
}

export const Dropzone = (props: DropzoneProps) => {
  const { type, sizeLabel, className, formatLabel, sampleFileLink, disabled } = props;

  const { open, getRootProps, getInputProps, isDragActive, isDragReject, fileError } = DropzoneBase(props);

  const baseProps = extractBaseProps(props);

  const DropzoneClass = classNames(
    {
      [styles['Dropzone']]: true,
      [styles[`Dropzone--${type}`]]: type,
      [styles['Dropzone--disabled']]: disabled,
      [styles['Dropzone--active']]: isDragActive,
      [styles['Dropzone--error']]: isDragReject,
      [styles['Dropzone-animation']]: true,
      [styles['Dropzone-animation--default']]: !isDragActive && type !== 'standard',
      [styles['Dropzone-animation--active']]: isDragActive && !isDragReject && type !== 'standard',
      [styles['Dropzone-standard--default']]: !isDragActive && type === 'standard',
      [styles['Dropzone-standard--active']]: isDragActive && !isDragReject && type === 'standard',
    },
    className
  );

  const WrapperClass = classNames({
    [styles['DropzoneWrapper']]: true,
    [styles[`DropzoneWrapper--${type}`]]: true,
  });

  const renderDropzone = () => {
    if (isDragReject) return <DropzoneError type={type} error={fileErrorMessages[fileError]} />;

    if (isDragActive) return <DropzoneActive type={type} />;

    const buttonAccessibilityProps = useAccessibilityProps({
      onClick: open,
      'aria-label': 'Drag your files here or click to select files',
    });

    return (
      <React.Fragment>
        {type !== 'tight' && <DropzoneIcon disabled={disabled} name="default" type={type} />}
        <div className={WrapperClass} data-test="DesignSystem-Dropzone-Wrapper">
          <span>
            <Text size="large" weight="strong" className="mr-2" appearance={disabled ? 'disabled' : 'default'}>
              Drag your files here or
            </Text>
            <Text
              className="ml-2 cursor-pointer"
              size="large"
              weight="strong"
              appearance={disabled ? 'disabled' : 'link'}
              {...buttonAccessibilityProps}
              tabIndex={disabled ? -1 : 0}
            >
              browse files
            </Text>
            <input {...getInputProps()} />
          </span>
          {formatLabel && <Text appearance={disabled ? 'disabled' : 'subtle'}>{formatLabel}</Text>}
          {sizeLabel && <Text appearance={disabled ? 'disabled' : 'subtle'}>{sizeLabel}</Text>}
          {sampleFileLink && <div className="mt-5">{sampleFileLink}</div>}
        </div>
      </React.Fragment>
    );
  };

  return (
    <div {...getRootProps()} {...baseProps} className={DropzoneClass} data-test="DesignSystem-Dropzone">
      {renderDropzone()}
    </div>
  );
};

Dropzone.displayName = 'Dropzone';

Dropzone.defaultProps = {
  ...DropzoneBase.defaultProps,
  type: 'standard',
};

export default Dropzone;
