import * as React from 'react';
import { Text } from '@/index';

// CSF format story
export const weight = () => {
  return (
    <div className="d-flex justify-content-between w-25">
      <Text weight="strong">Strong</Text>
      <Text weight="medium">Medium</Text>
      <Text>Default</Text>
    </div>
  );
};

export default {
  title: 'Components/Typography/Text/Weight',
  component: Text,
  parameters: {
    docs: {
      docPage: {
        title: 'Text',
      },
    },
  },
};
