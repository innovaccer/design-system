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
        <Legend labelWeight={'strong'}>Strong</Legend>
      </div>
      <div>
        <Legend labelWeight={'medium'}>Medium</Legend>
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
