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

  const [delayDefault, setDelayDefault] = React.useState(false);
  const [delayActive, setDelayActive] = React.useState(false);
  const initialRender = React.useRef(true);

  const DropzoneClass = classNames(
    {
      ['Dropzone']: true,
      [`Dropzone--${type}`]: type,
      ['Dropzone--disabled']: disabled,
      ['Dropzone--active']: isDragActive,
      ['Dropzone--error']: isDragReject,
      ['AnimationEnter--default']: !delayDefault && !isDragActive,
      ['AnimationEnter--active']: !delayActive && isDragActive,
      ['AnimationExit--default']: delayDefault,
      ['AnimationExit--active']: delayActive,
    },
    className
  );

  const WrapperClass = classNames({
    ['DropzoneWrapper']: true,
    [`DropzoneWrapper--${type}`]: true,
  });

  React.useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
    } else {
      if (isDragActive) {
        if (isDragReject) {
          setDelayDefault(false);
          setDelayActive(false);
        } else {
          setDelayDefault(true);
        }
      } else {
        if (!initialRender.current) {
          setDelayActive(true);
        }
      }
    }
  }, [isDragActive]);

  const handleAnimationEnd = () => {
    if (delayDefault) {
      setDelayDefault(false);
    }
    if (delayActive) {
      setDelayActive(false);
    }
  };

  const renderDropzone = () => {
    if (isDragReject) return <DropzoneError type={type} error={fileErrorMessages[fileError]} />;

    if (!delayDefault) {
      if (isDragActive || delayActive) return <DropzoneActive type={type} />;
    }

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
              tabIndex={disabled ? -1 : 0}
              className="ml-2 cursor-pointer"
              size="large"
              weight="strong"
              appearance={disabled ? 'disabled' : 'link'}
              {...buttonAccessibilityProps}
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
    <div
      onAnimationEnd={handleAnimationEnd}
      {...getRootProps()}
      {...baseProps}
      className={DropzoneClass}
      data-test="DesignSystem-Dropzone"
    >
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
