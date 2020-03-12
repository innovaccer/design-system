import * as React from 'react';
import Label from '../index';

// CSF format story
export const state = () => {

  const styles = {
    marginRight: '2%',
  };

  const outerStyles = {
    display: 'flex',
  };

  return (
    <div style={outerStyles}>
      <div style={styles}>
        <Label>
          Enabled Label
        </Label>
      </div>
      <div>
        <Label disabled={true}>
          Disabled Label
        </Label>
      </div>
    </div>
  );
};

// Required for CSF format story
// https://medium.com/storybookjs/component-story-format-66f4c32366df
export default { title: 'Typography/Label' };
