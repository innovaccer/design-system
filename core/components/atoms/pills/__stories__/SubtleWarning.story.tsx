import * as React from 'react';
import Pills from '../../pills';

export const subtleWarning = () => (
    <Pills
      appearance="warning"
      subtle={true}
    >
      {'Pills'}
    </Pills>
  );

export default {
  title: 'Components/Pills/Subtle Warning',
  component: Pills,
  parameters: {
    docs: {
      docPage: {
        title: 'Pills'
      }
    }
  }
};
