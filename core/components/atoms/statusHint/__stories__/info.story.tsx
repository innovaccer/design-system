import * as React from 'react';
import StatusHint from '../StatusHint';
export const info = () => (
  <StatusHint
    appearance="info"
  >
    {'Info'}
  </StatusHint>
);
export default {
  title: 'Atoms|StatusHint',
  component: StatusHint,
  parameters: {
    docs: {
      docPage: {
        title: 'StatusHint'
      }
    }
  }
};
