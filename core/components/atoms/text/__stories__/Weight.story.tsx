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

// Required for CSF format story
// https://medium.com/storybookjs/component-story-format-66f4c32366df
export default { title: 'Typography/Text' };
