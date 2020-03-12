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

// Required for CSF format story
// https://medium.com/storybookjs/component-story-format-66f4c32366df
export default { title: 'Typography/Text' };
