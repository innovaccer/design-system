import * as React from 'react';
import { Dropzone, Link } from '@/index';
import { action } from '@/utils/action';

export const format = () => {
  const onDrop = (_event, acceptedFiles, rejectedFiles) => {
    return action(`Accepted Files: ${acceptedFiles}, rejectedFiles: ${rejectedFiles}`)();
  };

  return (
    <Dropzone
      accept="image/jpeg, image/png"
      formatLabel="Accepted formats: jpeg, png"
      onDrop={onDrop}
      className="mb-3"
      sampleFileLink={
        <Link
          href="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
          download="Test.pdf"
          target="_blank"
        >
          Download sample file
        </Link>
      }
    />
  );
};

const customCode = `() => {
  const onDrop = (event, acceptedFiles, rejectedFiles) => {
    console.log(acceptedFiles, rejectedFiles);
  };

  return (
    <Dropzone
      accept="image/jpeg, image/png"
      formatLabel="Accepted formats: jpeg, png"
      onDrop={onDrop}
      className="mb-3"
      sampleFileLink={(
        <Link
          href="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
          download="Test.pdf"
          target="_blank"
        >
          Download sample file
        </Link>
      )}
    />
  );
}`;

export default {
  title: 'File Inputs/Dropzone/Variants/Format',
  component: Dropzone,
  parameters: {
    docs: {
      docPage: {
        customCode,
      },
    },
  },
};
