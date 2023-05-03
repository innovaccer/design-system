import * as React from 'react';
import Pills from '../../pills';

export const subtleWarning = () => (
  <Pills appearance="warning" subtle={true}>
    10
  </Pills>
);

export default {
  title: 'Indicators/Pills/Subtle Warning',
  component: Pills,
  parameters: {
    docs: {
      docPage: {
        title: 'Pills',
      },
    },
  },
};
