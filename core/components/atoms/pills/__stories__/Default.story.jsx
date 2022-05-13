import * as React from 'react';
import Pills from '../../pills';

export const defaultPill = () => (
  <Pills appearance="secondary" subtle={false}>
    10
  </Pills>
);

export default {
  title: 'Components/Pills/Default Pill',
  component: Pills,
  parameters: {
    docs: {
      docPage: {
        title: 'Pills',
      },
    },
  },
};
