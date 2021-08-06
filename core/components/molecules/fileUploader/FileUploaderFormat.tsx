import * as React from 'react';
import { Text } from '@/index';

export interface FileUploaderFormatProps {
  /**
   * Description of accepted formats in `FileUploader`
   */
  formatLabel?: string;
}

export const FileUploaderFormat = (props: FileUploaderFormatProps) => {
  const { formatLabel } = props;

  if (formatLabel) {
    return (
      <Text size="small" appearance="subtle" className="mt-4">
        {formatLabel}
      </Text>
    );
  }

  return null;
};

FileUploaderFormat.displayName = 'FileUploaderFormat';

export default FileUploaderFormat;
