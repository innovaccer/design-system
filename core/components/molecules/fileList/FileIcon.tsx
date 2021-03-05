import * as React from 'react';
import { ProgressRing, Icon } from '@/index';
import { IconOptions, FileListItemProps } from './FileListItem';
import classNames from 'classnames';
const { useEffect, useState } = React;

export interface FileIconProps {
  file: FileListItemProps['file'];
  progress: FileListItemProps['progress'];
  status: FileListItemProps['status'];
  iconOptions?: IconOptions;
}

export const FileIcon = (props: FileIconProps) => {
  const {
    progress,
    status,
    iconOptions,
    file
  } = props;

  const [animate, setAnimate] = useState<boolean>(false);

  const iconClass = classNames({
    ['FileIcon']: true,
    ['FileIcon--animate']: animate,
    [`FileIcon--${file.type || 'others'}`]: true
  });

  const uploadingIconClass = classNames({
    ['FileIcon']: true,
    ['FileIcon--uploading']: true
  });

  useEffect(() => {
    if (status === 'completed') {
      setAnimate(true);
    } else {
      setAnimate(false);
    }
  }, [status]);

  if (status === 'uploading') {
    return (
      <ProgressRing size="small" value={progress || 0} className={uploadingIconClass} />
    );
  }
  return(
    <Icon
      name={iconOptions?.name || ''}
      className={iconClass}
    />
  );
};

FileIcon.displayName = 'FileIcon';

FileIcon.defaultProps = {
  progress: 0,
  status: 'completed'
};

export default FileIcon;
