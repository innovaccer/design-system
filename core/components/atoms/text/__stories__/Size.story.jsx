import * as React from 'react';
import { Text } from '@/index';

// CSF format story
export const size = () => {
  return (
    <div className="d-flex align-items-center justify-content-between w-25">
      <Text size="small">Small</Text>
      <Text size="regular">Regular</Text>
      <Text size="large">Large</Text>
    </div>
  );
};

export default {
  title: 'Components/Typography/Text/Size',
  component: Text,
  parameters: {
    docs: {
      docPage: {
        title: 'Text',
      },
    },
  },
};
