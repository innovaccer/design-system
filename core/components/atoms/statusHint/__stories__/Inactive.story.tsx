import * as React from 'react';
import StatusHint from '../StatusHint';

export const inactive = () => <StatusHint appearance="alert">{'Inactive'}</StatusHint>;

export default {
  title: 'Components/StatusHint/Inactive',
  component: StatusHint,
  parameters: {
    docs: {
      docPage: {
        title: 'StatusHint',
      },
    },
  },
};
