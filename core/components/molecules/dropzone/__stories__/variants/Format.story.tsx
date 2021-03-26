import * as React from 'react';
import { Dropzone, Link } from '@/index';
import { action } from '@storybook/addon-actions';
import { DropzoneProps } from '@/index.type';

export const format = () => {

  const onDrop: DropzoneProps['onDrop'] = (_event, acceptedFiles, rejectedFiles) => {
    return action(`Accepted Files: ${acceptedFiles}, rejectedFiles: ${rejectedFiles}`)();
  };

  return (
    <Dropzone
      accept="image/jpeg, image/png"
      formatLabel="Accepted formats: PDF, jpg"
      sizeLabel="Maximum size: 25 MB"
      onDrop={onDrop}
      className="mb-3"
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
  );
};

const customCode = `() => {
  const onDrop = (event, acceptedFiles, rejectedFiles) => {
    console.log(acceptedFiles, rejectedFiles);
  };

  return (
    <Dropzone
      accept="image/jpeg, image/png"
      formatLabel="Accepted formats: PDF, jpg"
      sizeLabel='Maximum size: 25 MB'
      onDrop={onDrop}
      className="mb-3"
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
  );
}`;

export default {
  title: 'Components/Dropzone/Variants/Format',
  component: Dropzone,
  parameters: {
    docs: {
      docPage: {
        customCode
      }
    }
  }
};
