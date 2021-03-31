import * as React from 'react';
import Pills from '..';

export const alert = () => (
    <Pills
      appearance="alert"
      subtle={false}
    >
      {'Pills'}
    </Pills>
  );

export default {
  title: 'Components/Pills/Alert',
  component: Pills,
  parameters: {
    docs: {
      docPage: {
        title: 'Pills'
      }
    }
  }
};
