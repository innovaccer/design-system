import * as React from 'react';
import { Dropzone, Text } from '@/index';
import { action } from '@storybook/addon-actions';
import { DropzoneProps } from '@/index.type';

export const disabled = () => {

  const onDrop: DropzoneProps['onDrop'] = (_event, acceptedFiles) => {
    return action(`Accepted Files: ${acceptedFiles}`)();
  };

  return (
    <div className="w-50 d-flex flex-column align-items-center">
      <Dropzone
        formatLabel="Accepted formats: PDF, jpg"
        sizeLabel="Maximum size: 25 MB"
        onDrop={onDrop}
        disabled={true}
        className="mb-3"
      />
      <Text size="large" weight="strong">Standard</Text>
      <Dropzone
        formatLabel="Accepted formats: PDF, jpg"
        sizeLabel="Maximum size: 25 MB"
        onDrop={onDrop}
        disabled={true}
        type="compressed"
        className="mt-6 mb-3"
      />
      <Text size="large" weight="strong">Compressed</Text>
      <Dropzone
        formatLabel="Accepted formats: PDF, jpg"
        sizeLabel="Maximum size: 25 MB"
        onDrop={onDrop}
        disabled={true}
        type="tight"
        className="mt-6 mb-3"
      />
      <Text size="large" weight="strong">Tight</Text>
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
        formatLabel="Accepted formats: PDF, jpg"
        sizeLabel='Maximum size: 25 MB'
        onDrop={onDrop}
        disabled={true}
        className="mb-3"
      />
      <Text size="large" weight="strong">Standard</Text>
      <Dropzone
        formatLabel="Accepted formats: PDF, jpg"
        sizeLabel='Maximum size: 25 MB'
        onDrop={onDrop}
        disabled={true}
        type="compressed"
        className="mt-6 mb-3"
      />
      <Text size="large" weight="strong">Compressed</Text>
      <Dropzone
        formatLabel="Accepted formats: PDF, jpg"
        sizeLabel='Maximum size: 25 MB'
        onDrop={onDrop}
        disabled={true}
        type="tight"
        className="mt-6 mb-3"
      />
      <Text size="large" weight="strong">Tight</Text>
    </div>
  );
}`;

export default {
  title: 'Components/Dropzone/Variants',
  component: Dropzone,
  parameters: {
    docs: {
      docPage: {
        customCode,
      }
    }
  }
};
