import * as React from 'react';
import Text from '../index';

// CSF format story
export const size = () => {
  const style = {
    display: 'flex',
  };

  return (
    <div style={style}>
      <div style={{ marginRight: '2%' }}>
        <Text small={true}>Small</Text>
      </div>
      <div>
        <Text small={false}>Large</Text>
      </div>
    </div>

  );
};

const title = 'Atoms|Typography/Text';

export default {
  title,
  component: Text,
  parameters: {
    docs: {
      docPage: {
        title
      }
    }
  }
};
