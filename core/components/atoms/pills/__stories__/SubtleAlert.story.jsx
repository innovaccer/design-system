import * as React from 'react';
import Pills from '..';

export const subtleAlert = () => {
  return (
    <Pills appearance="alert" subtle={true}>
      {'Pills'}
    </Pills>
  );
};

export default {
  title: 'Components/Pills/Subtle Alert',
  component: Pills,
  parameters: {
    docs: {
      docPage: {
        title: 'Pills',
      },
    },
  },
};
