import * as React from 'react';
import Pills from '../../pills';

export const defaultpill = () => (
  <Pills
    appearance="secondary"
    subtle={false}
  >
    {'1'}
  </Pills>
);

export default {
  title: 'Components/Pills',
  component: Pills,
  parameters: {
    docs: {
      docPage: {
        title: 'Pills'
      }
    }
  }
};
