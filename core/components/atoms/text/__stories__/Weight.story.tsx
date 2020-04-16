import * as React from 'react';
import Text from '../index';

// CSF format story
export const weight = () => {
  const style = {
    display: 'flex',
  };

  return (
    <div style={style}>
      <div style={{ marginRight: '2%' }}>
        <Text weight="strong">Strong</Text>
      </div>
      <div>
        <Text weight="medium">Medium</Text>
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
