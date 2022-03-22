import * as React from 'react';
import Legend from '../../index';

// CSF format story
export const labelWeight = () => {
  return (
    <div className="d-flex">
      <div className="mr-5">
        <Legend labelWeight={'strong'}>Strong</Legend>
      </div>
      <div>
        <Legend labelWeight={'medium'}>Medium</Legend>
      </div>
    </div>
  );
};

export default {
  title: 'Components/Legend/Variants/Label Weight',
  component: Legend,
  parameters: {
    docs: {
      docPage: {
        title: 'Legend',
      },
    },
  },
};
