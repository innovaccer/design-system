import * as React from 'react';
import { Dropzone, Link } from '@/index';
import { action } from '@storybook/addon-actions';

export const format = () => {

  const onDrop = (acceptedFiles: File[], rejectedFiles: any) => {
    return action(`Accepted Files: ${acceptedFiles}, rejectedFiles: ${rejectedFiles}`)();
  };

  return (
    <Dropzone
      accept="image/jpeg, image/png"
      formatLabel="Accepted formats: PDF, jpg"
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
  const onDrop = (acceptedFiles, rejectedFiles) => {
    console.log(acceptedFiles, rejectedFiles);
  };

  return (
    <Dropzone
      accept="image/jpeg, image/png"
      formatLabel="Accepted formats: PDF, jpg"
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
  title: 'Molecules|Dropzone/Variants',
  component: Dropzone,
  parameters: {
    docs: {
      docPage: {
        customCode,
      }
    }
  }
};
