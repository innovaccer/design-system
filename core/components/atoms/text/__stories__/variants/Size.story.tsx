import * as React from 'react';
import Text from '../../index';

// CSF format story
export const size = () => {
  return (
    <div className="d-flex">
      <div className="mr-6">
        <Text small={true}>Small</Text>
      </div>
      <div>
        <Text small={false}>Large</Text>
      </div>
    </div>

  );
};

export default {
  title: 'Atoms|Typography/Text/Variants',
  component: Text,
  parameters: {
    docs: {
      docPage: {
        title: 'Text'
      }
    }
  }
};
