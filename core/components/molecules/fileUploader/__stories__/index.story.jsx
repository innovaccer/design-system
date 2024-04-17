import * as React from 'react';
import { FileUploader } from '@/index';

export const all = () => <></>;

export default {
  title: 'Components/File Uploader/FileUploader (Deprecated)/All',
  component: FileUploader,
  parameters: {
    docs: {
      docPage: {
        title: 'FileUploader',
        isDeprecated: true,
        description:
          'FileUploader component has been deprecated, please use [Dropzone](https://mds.innovaccer.com/?path=/docs/components-file-uploader-dropzone-all--all) component instead.',
      },
    },
  },
};
