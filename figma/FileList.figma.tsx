import React from 'react';
import { FileList } from '@/index';
import { FileListProps } from '@/index.type';
import figma from '@figma/code-connect';

figma.connect(FileList, 'https://www.figma.com/design/w8sqBtJpvq86D06UE7gN0T/MDS---Web?node-id=952-121', {
  imports: ["import { FileList } from '@innovaccer/design-system'"],
  props: {
    fileType: figma.enum('File type', {
      Audio: 'audio',
      Video: 'video',
      Image: 'image',
      Document: 'application',
    }),
    fileStatus: figma.enum('Status', {
      Uploading: 'uploading',
      Error: 'error',
      Uploaded: 'completed',
    }),
  },
  example: ({ fileType, fileStatus, ...rest }) => (
    <FileList
      {...(rest as FileListProps)}
      fileList={[
        {
          file: { type: fileType, name: 'file name', size: '2 MB' },
          status: fileStatus as any,
          progress: 100,
          id: 1,
        },
      ]}
    />
  ),
});
