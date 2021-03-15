import * as React from 'react';
import StatusHint from '../StatusHint';

export const completed = () => (
  <StatusHint
    appearance="success"
  >
    {'Completed'}
  </StatusHint>
);

export default {
  title: 'Components/StatusHint',
  component: StatusHint,
  parameters: {
    docs: {
      docPage: {
        title: 'StatusHint'
      }
    }
  }
};
