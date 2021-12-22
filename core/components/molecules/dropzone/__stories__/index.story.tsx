import * as React from 'react';
import { Dropzone, Link, FileList, Button } from '@/index';
import { DropzoneProps, FileListProps } from '@/index.type';

export const all = () => {
  const [files, setFiles] = React.useState<FileListProps['fileList']>([]);
  const getSize = (size: number) => `${(size / (1024 * 1024)).toFixed(2)} MB`;

  const onDelete = (id: number) => {
    const updatedFiles = files.filter((file) => file.id !== id);
    setFiles(updatedFiles);
  };

  const onDropHandler: DropzoneProps['onDrop'] = (_event, acceptedFiles, rejectedFiles) => {
    const acceptedFileDetailList: FileListProps['fileList'] = acceptedFiles.map((file, id) => ({
      file,
      id: files.length + id,
      fileSize: getSize(file.size),
      networkError: false,
      status: 'completed',
    }));

    const rejectedFilesDetailList: FileListProps['fileList'] = rejectedFiles.map((rejectedFile, id) => {
      const { file, errors } = rejectedFile;
      const errorMessageArray = errors.map((error) => error.message);
      return {
        file,
        id: files.length + id,
        fileSize: getSize(file.size),
        status: 'error',
        errorMessage: errorMessageArray.join(' and '),
        networkError: false,
      };
    });

    const updatedFiles = [...files, ...acceptedFileDetailList, ...rejectedFilesDetailList];
    setFiles(updatedFiles);
  };

  const actionRenderer: FileListProps['actionRenderer'] = (fileItem) => {
    return (
      <React.Fragment>
        {fileItem.networkError && (
          <Button
            aria-label={`Remove ${fileItem.file.name}`}
            appearance="transparent"
            icon="refresh"
            size="regular"
            onClick={() => onDelete(fileItem.id)}
            className={'cursor-pointer'}
          />
        )}
        <Button
          aria-label={`Remove ${fileItem.file.name}`}
          appearance="transparent"
          icon="close"
          size="regular"
          onClick={() => onDelete(fileItem.id)}
          className={'cursor-pointer'}
        />
      </React.Fragment>
    );
  };

  return (
    <React.Fragment>
      <Dropzone
        accept="image/jpeg, image/png"
        formatLabel="Accepted formats: PDF, jpg"
        sizeLabel="Maximum size: 25 MB"
        multiple={true}
        onDrop={onDropHandler}
        className="mb-5"
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
      <FileList fileList={files.map(({ file, metadata }) => ({ file, ...metadata }))} actionRenderer={actionRenderer} />
    </React.Fragment>
  );
};

const customCode = `() => {
  const [files, setFiles] = React.useState([]);

  const getSize = (size) => (
    \`\${(size / (1024 * 1024)).toFixed(2)} MB\`
  );

  const onDelete = (fileItem) => {
    const updatedFiles = files.filter((file) => file.id !== fileItem.id);
    setFiles(updatedFiles);
  };

  const onDropHandler = (event, acceptedFiles, rejectedFiles) => {
    const acceptedFileDetailList = acceptedFiles.map((file, id) => (
      {
        file,
        id: files.length + id,
        fileSize: getSize(file.size),
        networkError: false,
      }
    ));

    const rejectedFilesDetailList = rejectedFiles.map((rejectedFile, id) => {
      const { file, errors } = rejectedFile;
      const errorMessageArray = errors.map((error) => error.message);
      return {
        file,
        id: files.length + id,
        fileSize: getSize(file.size),
        status: 'error',
        errorMessage: errorMessageArray.join(' and '),
        networkError: false,
      };
    });
    const updatedFiles = [...files, ...acceptedFileDetailList, ...rejectedFilesDetailList];
    setFiles(updatedFiles);
  };

  const actionRenderer = (fileItem) => {
    return (
      <React.Fragment>
        {fileItem.networkError && (
          <Button
            aria-label={\`Remove \${fileItem.file.name}\`}
            appearance="transparent"
            icon="refresh"
            size="regular"
            onClick={() => onDelete(fileItem.id)}
            className={'cursor-pointer'}
          />
        )}
        <Button
          aria-label={\`Remove \${fileItem.file.name}\`}
          appearance="transparent"
          icon="close"
          size="regular"
          onClick={() => onDelete(fileItem)}
          className={'cursor-pointer'}
        />
      </React.Fragment>
    );
  }

  return (
    <React.Fragment>
      <Dropzone
        accept="image/jpeg, image/png"
        formatLabel="Accepted formats: PDF, jpg"
        sizeLabel="Maximum size: 25 MB"
        multiple={true}
        onDrop={onDropHandler}
        className="mb-5"
        sampleFileLink={(
          <Link
            href="http://www.adobe.com/content/dam/Adobe/en/accessibility/pdfs/accessing-pdf-sr.pdf"
            download="Test.pdf"
            target="_blank"
          >
            Download sample file
          </Link>
        )}
      />
      <FileList
        fileList={files}
        actionRenderer={actionRenderer}
      />
    </React.Fragment>
  );
}`;

export default {
  title: 'Components/Dropzone/All',
  component: Dropzone,
  parameters: {
    docs: {
      docPage: {
        customCode,
        a11yProps: ` 
        If you are using File list like shown above, don't forget to add \`\`aria-label\`\` to the button.
         `,
      },
    },
  },
};
