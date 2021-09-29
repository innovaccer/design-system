import * as React from 'react';
import { ProgressRing, Button } from '@/index';
import { FileStatus } from '@/common.type';

export interface FileUploaderStatusProps {
  file: File;
  progress: number;
  id?: any;
  status: FileStatus;
  onRetry?: () => void;
}

export const FileUploaderStatus = (props: FileUploaderStatusProps) => {
  const { progress, status, onRetry } = props;

  switch (status) {
    case 'uploading':
      return <ProgressRing size="small" value={progress} className="mr-4" />;

    case 'error':
      return <Button appearance="transparent" size="regular" onClick={onRetry} icon="refresh" className="mr-2" />;

    default:
      return null;
  }
};

FileUploaderStatus.displayName = 'FileUploaderStatus';

FileUploaderStatus.defaultProps = {
  status: 'completed',
  progress: 0,
};

export default FileUploaderStatus;
