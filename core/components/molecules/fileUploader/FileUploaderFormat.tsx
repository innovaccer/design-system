import * as React from 'react';
import { Text } from '@/index';

export interface FileUploaderFormatProps {
  /**
   * Description of accepted formats in `FileUploader`
   */
  formatLabel?: string;
  /**
   * Id for the format label element (used in aria-describedby on the file input)
   */
  formatLabelId?: string;
}

export const FileUploaderFormat = (props: FileUploaderFormatProps) => {
  const { formatLabel, formatLabelId } = props;

  if (formatLabel) {
    return (
      <Text id={formatLabelId} size="small" appearance="subtle" className="mt-4">
        {formatLabel}
      </Text>
    );
  }

  return null;
};

FileUploaderFormat.displayName = 'FileUploaderFormat';

export default FileUploaderFormat;
