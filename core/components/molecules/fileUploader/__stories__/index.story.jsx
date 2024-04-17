import * as React from 'react';
import { FileUploader } from '@/index';

export const all = () => <></>;

export default {
  title: 'Components/Deprecated/FileUploader/All',
  component: FileUploader,
  parameters: {
    docs: {
      docPage: {
        title: 'FileUploader',
        description: 'FileUploader Component has been Deprecated, please use Dropzone Component instead.',
      },
    },
  },
};
