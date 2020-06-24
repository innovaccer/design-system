import * as React from 'react';
import Caption from '../../index';

// CSF format story
export const error = () => {

  const styles = {
    marginBottom: '30px'
  };

  return (
    <div>
      <div style={styles}>
        <Caption>
          Without Error
        </Caption>
      </div>
      <div>
        <Caption error={true}>
          With Error
        </Caption>
      </div>
    </div>
  );
};

export default {
  title: 'Atoms|Typography/Caption/Variants',
  component: Caption,
  parameters: {
    docs: {
      docPage: {
        title: 'Caption'
      }
    }
  }
};
