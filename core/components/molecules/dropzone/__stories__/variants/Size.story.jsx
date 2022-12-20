import * as React from 'react';
import { Dropzone, Text, Link } from '@/index';
import { action } from '@/utils/action';

export const size = () => {
  const onDrop = (_event, acceptedFiles) => {
    return action(`Accepted Files: ${acceptedFiles}`)();
  };

  return (
    <div className="w-50 d-flex flex-column align-items-center">
      <Dropzone
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
      <Text size="large" weight="strong">
        Standard
      </Text>
      <Dropzone
        onDrop={onDrop}
        type="compressed"
        className="mt-6 mb-3"
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
      <Text size="large" weight="strong">
        Compressed
      </Text>
      <Dropzone
        onDrop={onDrop}
        type="tight"
        className="mt-6 mb-3"
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

  return (
    <div className="w-50 d-flex flex-column align-items-center">
      <Dropzone
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
      <Text size="large" weight="strong">Standard</Text>
      <Dropzone
        onDrop={onDrop}
        type="compressed"
        className="mt-6 mb-3"
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
      <Text size="large" weight="strong">Compressed</Text>
      <Dropzone
        onDrop={onDrop}
        type="tight"
        className="mt-6 mb-3"
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
      <Text size="large" weight="strong">Tight</Text>
    </div>
  );
}`;

export default {
  title: 'Components/Dropzone/Variants/Size',
  component: Dropzone,
  parameters: {
    docs: {
      docPage: {
        customCode,
      },
    },
  },
};
