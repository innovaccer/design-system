import * as React from 'react';
import { Dropzone, Text, Link } from '@/index';
import { action } from '@storybook/addon-actions';

export const size = () => {

  const onDrop = (acceptedFiles: File[]) => {
    return action(`Accepted Files: ${acceptedFiles}`)();
  };

  return (
    <div className="w-50 d-flex flex-column align-items-center">
      <Dropzone
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
      <Text size="large" weight="strong">Standard</Text>
      <Dropzone
        formatLabel="Accepted formats: PDF, jpg"
        onDrop={onDrop}
        type="compressed"
        className="mt-6 mb-3"
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
      <Text size="large" weight="strong">Compressed</Text>
      <Dropzone
        formatLabel="Accepted formats: PDF, jpg"
        onDrop={onDrop}
        type="tight"
        className="mt-6 mb-3"
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
      <Text size="large" weight="strong">Tight</Text>
    </div>
  );
};

const customCode = `() => {
  const onDrop = (acceptedFiles, rejectedFiles) => {
    console.log(acceptedFiles, rejectedFiles);
  };

  return (
    <div className="w-50 d-flex flex-column align-items-center">
      <Dropzone
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
      <Text size="large" weight="strong">Standard</Text>
      <Dropzone
        formatLabel="Accepted formats: PDF, jpg"
        onDrop={onDrop}
        type="compressed"
        className="mt-6 mb-3"
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
      <Text size="large" weight="strong">Compressed</Text>
      <Dropzone
        formatLabel="Accepted formats: PDF, jpg"
        onDrop={onDrop}
        type="tight"
        className="mt-6 mb-3"
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
      <Text size="large" weight="strong">Tight</Text>
    </div>
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
