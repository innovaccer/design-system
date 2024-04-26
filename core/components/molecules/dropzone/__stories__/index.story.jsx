import * as React from 'react';
import { Dropzone, FileList, Button, LinkButton } from '@/index';

export const all = () => {
  const [files, setFiles] = React.useState([]);
  const getSize = (size) => `${(size / (1024 * 1024)).toFixed(2)} MB`;

  const onDelete = (id) => {
    const updatedFiles = files.filter((file) => file.id !== id);
    setFiles(updatedFiles);
  };

  const onDropHandler = (_event, acceptedFiles, rejectedFiles) => {
    const acceptedFileDetailList = acceptedFiles.map((file, id) => ({
      file,
      id: files.length + id,
      fileSize: getSize(file.size),
      networkError: false,
      status: 'completed',
    }));

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

  const handleDownloadClick = () => {
    const link = document.createElement('a'); // eslint-disable-line
    link.href = 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf';
    link.download = 'Test.pdf';
    link.target = '_blank';
    document.body.appendChild(link); // eslint-disable-line
    link.click();
    document.body.removeChild(link); // eslint-disable-line
  };

  return (
    <React.Fragment>
      <Dropzone
        accept="image/jpeg, image/png"
        formatLabel="Accepted formats: jpeg, png"
        sizeLabel="Maximum size: 25 MB"
        multiple={true}
        onDrop={onDropHandler}
        maxSize={26214400}
        className="mb-5"
        sampleFileLink={<LinkButton onClick={handleDownloadClick}>Download sample file</LinkButton>}
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

  const handleDownloadClick = () => {
    const link = document.createElement('a');
    link.href = 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf';
    link.download = 'Test.pdf';
    link.target = "_blank";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  return (
    <React.Fragment>
      <Dropzone
        accept="image/jpeg, image/png"
        formatLabel="Accepted formats: jpeg, png"
        sizeLabel="Maximum size: 25 MB"
        multiple={true}
        onDrop={onDropHandler}
        maxSize={26214400}
        className="mb-5"
        sampleFileLink={<LinkButton onClick={handleDownloadClick}>Download sample file</LinkButton>}
      />
      <FileList
        fileList={files}
        actionRenderer={actionRenderer}
      />
    </React.Fragment>
  );
}`;

export default {
  title: 'Components/File Uploader/Dropzone/All',
  component: Dropzone,
  parameters: {
    docs: {
      docPage: {
        customCode,
        a11yProps: ` If you are using File list like shown above, don't forget to add \`\`aria-label\`\` to the button.`,
      },
    },
  },
};
