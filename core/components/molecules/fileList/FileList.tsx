import * as React from 'react';
import { BaseProps, extractBaseProps } from '@/utils/types';
import { FileListItem, FileListItemProps } from './FileListItem';
import { Card } from '@/index';
export interface FileListProps extends BaseProps {
  /**
   * <pre className="DocPage-codeBlock">
   * Array containing the list of file objects
   * FileItem:
   * {
   *    file: File;
   *    status: FileStatus;
   *    progress: number;
   *    icon: IconOptions
   *    errorMessage: string;
   * }
   * </pre>
   *
   * | Name | Description | Default |
   * | --- | --- | --- |
   * | file | Attached file | |
   * | status | Status of file | 'completed' |
   * | progress | Progress percent of `Progress Ring` | 0 |
   * | icon | Name of the icon to be rendered |
   * | errorMessage | Error Message to be shown when status is `error` | 'Network Error' |
   *
   */
  fileList: Omit<FileListItemProps[], 'onClick'>;
  /**
   * Callback called when file item is clicked
   */
  onClick?: FileListItemProps['onClick'];
  /**
   * Actions to be rendered inside the file item
   */
  actionRenderer?: (fileItem: FileListItemProps) => React.ReactNode;
}

export const FileList = (props: FileListProps) => {
  const { fileList, onClick, actionRenderer, className } = props;

  const baseProps = extractBaseProps(props);

  if (fileList.length === 0) return null;

  return (
    <Card {...baseProps} shadow={'none'} className={className}>
      {fileList.map((fileItem, index) => (
        <FileListItem
          key={index}
          onClick={onClick}
          actions={actionRenderer ? actionRenderer(fileItem) : undefined}
          fileItem={fileItem}
          {...fileItem}
        />
      ))}
    </Card>
  );
};

FileList.defaultProps = {
  fileList: [],
};

FileList.displayName = 'FileList';

export default FileList;
