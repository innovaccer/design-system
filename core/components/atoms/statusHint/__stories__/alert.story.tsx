import * as React from 'react';
import StatusHint from '../StatusHint';

export const alert = () => (
  <StatusHint
    appearance="alert"
  >
    {'Alert'}
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
