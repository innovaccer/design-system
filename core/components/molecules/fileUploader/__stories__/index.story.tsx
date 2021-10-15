import * as React from 'react';
import { text, boolean } from '@storybook/addon-knobs';
import { FileUploader, FileUploaderList, Link } from '@/index';
import { FileUploaderComponent, FileUploaderListComponent } from './_common_/types';
import { FileItem } from '../FileUploaderItem';

export const all = () => {
  const [fileNames, setFileNames] = React.useState<FileItem[]>([]);
  const [errorOccured, setErrorOccured] = React.useState(false);

  const title = text('title', 'Upload files');
  const formatLabel = text('formatLabel', 'Accepted formats: pdf, jpg, jpeg, png');
  const sizeLabel = text('sizeLabel', 'Maximum size: 25 MB');
  const multiple = boolean('multiple', true);

  const randomBetween = (value: number) => Math.round(Math.random() * value);

  const imitateUploading = (fileItem: FileItem) => {
    const randomProgressChunks = [5, 8, 13];
    const randomChunkIndex = randomBetween(randomProgressChunks.length - 1);
    const progressChunk = randomProgressChunks[randomChunkIndex];
    let baseProgress = fileItem.progress || 0;

    const increment = () => {
      baseProgress += progressChunk;
      setProgressFileName(fileItem, baseProgress);

      if (baseProgress < 100) {
        setTimeout(() => increment(), 100);
      }
    };

    increment();
  };

  const setProgressFileName = (fileName: FileItem, progress = 0) => {
    setFileNames((previousFileNames) => {
      const fileNameIndex = previousFileNames.findIndex((fn) => fn.file === fileName.file);

      if (fileNameIndex === -1) {
        return [...previousFileNames, fileName];
      }

      return previousFileNames.map((previousFileName, index) => {
        if (fileNameIndex !== index) return previousFileName;

        return {
          ...previousFileName,
          progress,
          status: progress >= 100 ? 'completed' : 'uploading',
        };
      });
    });
  };

  const uploadFiles = (fileList: File[]) => {
    if (!errorOccured && (fileList.length > 1 || fileNames.length > 0)) {
      const randomErrorIndex = randomBetween(fileList.length - 1);
      setFileNames((previousFileNames) => [
        ...previousFileNames,
        { file: fileList[randomErrorIndex], status: 'error' },
      ]);
      setErrorOccured(true);

      if (fileList.length <= 1) {
        return;
      }

      fileList.splice(randomErrorIndex, 1);
    }

    fileList.forEach((file) => {
      const fileItem: FileItem = {
        file,
        status: 'uploading',
        progress: 0,
      };

      imitateUploading(fileItem);
    });
  };

  const retryUploadFile = (file: File) => {
    uploadFiles([file]);
  };

  const deleteUploadedFile = (file: File) => {
    setFileNames((previousFileNames) => previousFileNames.filter((fileName) => fileName.file !== file));
  };

  return (
    <div>
      <FileUploader
        onChange={uploadFiles}
        multiple={multiple}
        title={title}
        formatLabel={formatLabel}
        sizeLabel={sizeLabel}
        accept={['image/png', 'application/pdf', 'image/jpeg']}
        sampleFileLink={
          <Link
            href="http://www.adobe.com/content/dam/Adobe/en/accessibility/pdfs/accessing-pdf-sr.pdf"
            download="Test.pdf"
            target="_blank"
          >
            Download sample file
          </Link>
        }
      />
      <FileUploaderList onDelete={deleteUploadedFile} onRetry={retryUploadFile} fileList={fileNames} className="mt-4" />
    </div>
  );
};

const customCode = `() => {
  const [fileNames, setFileNames] = React.useState([]);
  const [errorOccured, setErrorOccured] = React.useState(false);

  const randomBetween = (value) => Math.round(Math.random() * value);

  const imitateUploading = (fileItem) => {
    const randomProgressChunks = [5, 8, 13];
    const randomChunkIndex = randomBetween(randomProgressChunks.length - 1);
    const progressChunk = randomProgressChunks[randomChunkIndex];
    let baseProgress = fileItem.progress || 0;

    const increment = () => {
      baseProgress += progressChunk;
      setProgressFileName(fileItem, baseProgress);

      if (baseProgress < 100) {
        setTimeout(() => increment(), 100);
      }
    };

    increment();
  };

  const setProgressFileName = (fileName, progress = 0) => {
    setFileNames((previousFileNames) => {
      const fileNameIndex = previousFileNames.findIndex((fn) => fn.file === fileName.file);

      if (fileNameIndex === -1) {
        return [...previousFileNames, fileName];
      }

      return previousFileNames.map((previousFileName, index) => {
        if (fileNameIndex !== index) return previousFileName;

        return {
          ...previousFileName,
          status: progress >= 100 ? 'completed' : 'uploading',
          progress,
        };
      });
    });
  };

  const uploadFiles = (fileList) => {
    if ((!errorOccured && (fileList.length > 1 || fileNames.length > 0))) {
      const randomErrorIndex = randomBetween(fileList.length - 1);
      setFileNames((previousFileNames) => [
        ...previousFileNames,
        { file: fileList[randomErrorIndex], status: 'error' },
      ]);
      setErrorOccured(true);

      if (fileList.length <= 1) {
        return;
      }

      fileList.splice(randomErrorIndex, 1);
    }

    fileList.forEach((file) => {
      const fileItem = {
        file,
        status: 'uploading',
        progress: 0,
      };

      imitateUploading(fileItem);
    });
  };

  const retryUploadFile = (file) => {
    uploadFiles([file]);
  };

  const deleteUploadedFile = (file) => {
    setFileNames((previousFileNames) => previousFileNames.filter(fileName => fileName.file !== file));
  };

  return (
    <div>
      <FileUploader
        onChange={uploadFiles}
        multiple
        title="Upload files"
        accept={['image/png', 'application/pdf', 'image/jpeg']}
        formatLabel="Accepted formats: pdf, jpg, jpeg, png"
        sizeLabel="Maximum size: 25 MB"
        sampleFileLink={
          <Link
            href="http://www.adobe.com/content/dam/Adobe/en/accessibility/pdfs/accessing-pdf-sr.pdf"
            download="Test.pdf"
            target="_blank"
          >
            Download sample file
          </Link>
        }
      />
      <FileUploaderList onDelete={deleteUploadedFile} onRetry={retryUploadFile} fileList={fileNames} className="mt-4" />
    </div>
  );
}`;

export default {
  title: 'Components/FileUploader/All',
  component: FileUploader,
  parameters: {
    docs: {
      docPage: {
        customCode,
        props: {
          components: {
            FileUploader: FileUploaderComponent,
            FileUploaderList: FileUploaderListComponent,
          },
        },
      },
    },
  },
};
