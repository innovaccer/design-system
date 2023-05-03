import * as React from 'react';
import Text from '../../index';

// CSF format story
export const weight = () => {
  return (
    <div className="d-flex">
      <div className="mr-6">
        <Text weight="strong">Strong</Text>
      </div>
      <div>
        <Text weight="medium">Medium</Text>
      </div>
    </div>
  );
};

export default {
  title: 'Typography/Text/Variants/Weight',
  component: Text,
  parameters: {
    docs: {
      docPage: {
        title: 'Text',
      },
    },
  },
};
