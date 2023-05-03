import * as React from 'react';
import Text from '../../index';

// CSF format story
export const size = () => {
  return (
    <div className="d-flex">
      <div className="mr-6">
        <Text size="small">Small</Text>
      </div>
      <div className="mr-6">
        <Text size="regular">Regular</Text>
      </div>
      <div>
        <Text size="large">Large</Text>
      </div>
    </div>
  );
};

export default {
  title: 'Typography/Text/Variants/Size',
  component: Text,
  parameters: {
    docs: {
      docPage: {
        title: 'Text',
      },
    },
  },
};
