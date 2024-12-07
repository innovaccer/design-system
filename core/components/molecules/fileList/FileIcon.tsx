import * as React from 'react';
import { ProgressRing, Icon } from '@/index';
import { FileListItemProps } from './FileListItem';
import classNames from 'classnames';
const { useEffect, useState } = React;
import styles from '@css/components/fileList.module.css';

const IconMapping: { [key: string]: string } = {
  audio: 'audiotrack',
  image: 'image',
  video: 'movie',
  application: 'insert_drive_file',
  others: 'text_snippet',
};

export interface FileIconProps {
  file: FileListItemProps['file'];
  progress: FileListItemProps['progress'];
  status: FileListItemProps['status'];
}

export const FileIcon = (props: FileIconProps) => {
  const { progress, status, file } = props;

  const [animate, setAnimate] = useState<boolean>(false);
  const type = file.type.split('/')[0] || 'others';
  const fileType = IconMapping[type] ? type : 'others';

  const iconClass = classNames({
    [styles['FileIcon']]: true,
    [styles['FileIcon--animate']]: animate,
    [styles[`FileIcon--${fileType}`]]: true,
  });

  const uploadingIconClass = classNames({
    [styles['FileIcon']]: true,
    [styles['FileIcon--uploading']]: true,
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
      <ProgressRing
        size="small"
        value={progress || 0}
        className={uploadingIconClass}
        data-test="DesignSystem-FileListItem--ProgressRing"
      />
    );
  }

  return <Icon name={IconMapping[fileType]} className={iconClass} data-test="DesignSystem-FileListItem--Icon" />;
};

FileIcon.displayName = 'FileIcon';

FileIcon.defaultProps = {
  progress: 0,
  status: 'completed',
};

export default FileIcon;
