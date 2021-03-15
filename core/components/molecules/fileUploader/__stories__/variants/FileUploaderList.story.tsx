import * as React from 'react';
import { FileUploaderList } from '@/index';
import { fileList } from '../_common_/fileList';
import { action } from '@storybook/addon-actions';

export const fileUploaderList = () => {

  const onDelete = (file: File, id: any) => {
    return action(`File Deleted: ${file} at index ${id}`)();
  };

  const onRetry = (file: File, id: any) => {
    return action(`Retry ${file} at index ${id}`)();
  };

  const onClick = (file: File, id: any) => {
    return action(`Clicked ${file} at index ${id}`)();
  };

  return (
    <FileUploaderList
      onClick={onClick}
      onDelete={onDelete}
      onRetry={onRetry}
      fileList={fileList}
      className="mt-4"
    />
  );
};

const customCode = `() => {
  const expampleFile = {
    name: "_DSC0071.JPG",
    size: 585947,
    type: "image/jpeg",
  };

  const exampleFileList = [
    {
      file: expampleFile,
      status: 'uploading',
      progress: 45,
      id: 1

    },
    {
      file: expampleFile,
      status: 'completed',
      id: 2
    },
    {
      file: expampleFile,
      status: 'error',
      errorMessage: 'Network failure',
      id: 3
    }
  ];

  const onDelete = (file, id) => {
    console.log(\`File Deleted: \${file} at index \${id}\`);
  };

  const onRetry = (file, id) => {
    console.log(\`Retry \${file} at index \${id}\`);
  };

  return (
    <FileUploaderList
      onDelete={onDelete}
      onRetry={onRetry}
      fileList={exampleFileList}
      className="mt-4"
    />
  );
}`;

export default {
  title: 'Components/FileUploader',
  component: FileUploaderList,
  parameters: {
    docs: {
      docPage: {
        customCode,
      }
    }
  }
};
