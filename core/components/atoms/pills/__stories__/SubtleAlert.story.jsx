import * as React from 'react';
import Pills from '..';

export const subtleAlert = () => {
  return (
    <Pills appearance="alert" subtle={true}>
      10
    </Pills>
  );
};

export default {
  title: 'Indicators/Pills/Subtle Alert',
  component: Pills,
  parameters: {
    docs: {
      docPage: {
        title: 'Pills',
      },
    },
  },
};
