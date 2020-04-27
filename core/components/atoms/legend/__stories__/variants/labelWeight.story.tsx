import * as React from 'react';
import Legend from '../../index';

// CSF format story
export const labelWeight = () => {
  const style = {
    display: 'flex',
  };

  return (
    <div style={style}>
      <div style={{ marginRight: '2%' }}>
        <Legend label={'Strong'} labelWeight={'strong'} />
      </div>
      <div>
        <Legend label={'Medium'} labelWeight={'medium'} />
      </div>
    </div>

  );
};

export default {
  title: 'Atoms|Legend/Variants',
  component: Legend,
  parameters: {
    docs: {
      docPage: {
        title: 'Legend'
      }
    }
  }
};
