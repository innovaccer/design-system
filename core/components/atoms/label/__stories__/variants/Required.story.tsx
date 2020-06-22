import * as React from 'react';
import Label from '../../index';

// CSF format story
export const required = () => {

  const styles = {
    marginRight: '2%',
    marginBottom: '30px'
  };

  return (
    <div>
      <div style={styles}>
        <Label>
          Not Required
        </Label>
      </div>
      <div>
        <Label required={true}>
          Required
        </Label>
      </div>
    </div>
  );
};

export default {
  title: 'Atoms|Typography/Label/Variants',
  component: Label,
  parameters: {
    docs: {
      docPage: {
        title: 'Label'
      }
    }
  }
};
