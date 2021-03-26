import * as React from 'react';
import StatusHint from '../StatusHint';

export const ongoing = () => (
  <StatusHint
    appearance="warning"
  >
    {'Ongoing'}
  </StatusHint>
);

export default {
  title: 'Components/StatusHint/Ongoing',
  component: StatusHint,
  parameters: {
    docs: {
      docPage: {
        title: 'StatusHint'
      }
    }
  }
};
