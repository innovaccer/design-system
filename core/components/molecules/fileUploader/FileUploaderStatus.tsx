import * as React from 'react';
import { ProgressRing, Icon } from '@/index';
import { FileStatus } from './FileUploaderItem';

export interface FileUploaderStatusProps {
  file: File;
  progress: number;
  id?: any;
  status: FileStatus;
  onRetry?: () => void;
}

export const FileUploaderStatus = (props: FileUploaderStatusProps) => {
  const {
    progress,
    status,
    onRetry,
  } = props;

  switch (status) {
    case 'uploading':
      return (
        <ProgressRing size="small" value={progress} className="mr-4" />
      );

    case 'error':
      return (
        <Icon
          name="refresh"
          size={20}
          onClick={onRetry}
          className="mr-4 cursor-pointer"
        />
      );
    default:
      return null;
  }
};

FileUploaderStatus.displayName = 'FileUploaderStatus';

FileUploaderStatus.defaultProps = {
  status: 'completed',
  progress: 0
};

export default FileUploaderStatus;
