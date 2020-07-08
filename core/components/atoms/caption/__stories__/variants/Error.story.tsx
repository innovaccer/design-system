import * as React from 'react';
import Caption from '../../index';

// CSF format story
export const error = () => {
  return (
    <div>
      <div className="mb-8">
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
