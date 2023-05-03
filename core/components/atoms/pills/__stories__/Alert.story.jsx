import * as React from 'react';
import Pills from '..';

export const alert = () => (
  <Pills appearance="alert" subtle={false}>
    10
  </Pills>
);

export default {
  title: 'Indicators/Pills/Alert',
  component: Pills,
  parameters: {
    docs: {
      docPage: {
        title: 'Pills',
      },
    },
  },
};
