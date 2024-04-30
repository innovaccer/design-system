import * as React from 'react';
import { Dropzone, Text, LinkButton } from '@/index';
import { action } from '@/utils/action';

export const size = () => {
  const onDrop = (_event, acceptedFiles) => {
    return action(`Accepted Files: ${acceptedFiles}`)();
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
    <div className="w-50 d-flex flex-column align-items-center">
      <Dropzone
        onDrop={onDrop}
        className="mb-3"
        sampleFileLink={<LinkButton onClick={handleDownloadClick}>Download sample file</LinkButton>}
      />
      <Text size="large" weight="strong">
        Standard
      </Text>
      <Dropzone
        onDrop={onDrop}
        type="compressed"
        className="mt-6 mb-3"
        sampleFileLink={<LinkButton onClick={handleDownloadClick}>Download sample file</LinkButton>}
      />
      <Text size="large" weight="strong">
        Compressed
      </Text>
      <Dropzone
        onDrop={onDrop}
        type="tight"
        className="mt-6 mb-3"
        sampleFileLink={<LinkButton onClick={handleDownloadClick}>Download sample file</LinkButton>}
      />
      <Text size="large" weight="strong">
        Tight
      </Text>
    </div>
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
    <div className="w-50 d-flex flex-column align-items-center">
      <Dropzone
        onDrop={onDrop}
        className="mb-3"
        sampleFileLink={<LinkButton onClick={handleDownloadClick}>Download sample file</LinkButton>}
      />
      <Text size="large" weight="strong">Standard</Text>
      <Dropzone
        onDrop={onDrop}
        type="compressed"
        className="mt-6 mb-3"
        sampleFileLink={<LinkButton onClick={handleDownloadClick}>Download sample file</LinkButton>}
      />
      <Text size="large" weight="strong">Compressed</Text>
      <Dropzone
        onDrop={onDrop}
        type="tight"
        className="mt-6 mb-3"
        sampleFileLink={<LinkButton onClick={handleDownloadClick}>Download sample file</LinkButton>}
      />
      <Text size="large" weight="strong">Tight</Text>
    </div>
  );
}`;

export default {
  title: 'Components/File Uploader/Dropzone/Variants/Size',
  component: Dropzone,
  parameters: {
    docs: {
      docPage: {
        customCode,
      },
    },
  },
};
