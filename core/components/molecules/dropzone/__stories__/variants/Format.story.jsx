import * as React from 'react';
import { Dropzone, LinkButton } from '@/index';
import { action } from '@/utils/action';

export const format = () => {
  const onDrop = (_event, acceptedFiles, rejectedFiles) => {
    return action(`Accepted Files: ${acceptedFiles}, rejectedFiles: ${rejectedFiles}`)();
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
    <Dropzone
      accept="image/jpeg, image/png"
      formatLabel="Accepted formats: jpeg, png"
      onDrop={onDrop}
      className="mb-3"
      sampleFileLink={<LinkButton onClick={handleDownloadClick}>Download sample file</LinkButton>}
    />
  );
};

const customCode = `() => {
  const onDrop = (event, acceptedFiles, rejectedFiles) => {
    console.log(acceptedFiles, rejectedFiles);
  };

  const handleDownloadClick = () => {
    const link = document.createElement('a');
    link.href = 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf';
    link.download = 'Test.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Dropzone
      accept="image/jpeg, image/png"
      formatLabel="Accepted formats: jpeg, png"
      onDrop={onDrop}
      className="mb-3"
      sampleFileLink={<LinkButton onClick={handleDownloadClick}>Download sample file</LinkButton>}
    />
  );
}`;

export default {
  title: 'Components/File Uploader/Dropzone/Variants/Format',
  component: Dropzone,
  parameters: {
    docs: {
      docPage: {
        customCode,
      },
    },
  },
};
