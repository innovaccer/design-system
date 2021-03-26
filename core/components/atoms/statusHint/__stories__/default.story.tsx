import * as React from 'react';
import StatusHint from '../StatusHint';

export const defaultStatusHint = () => (
  <StatusHint
    appearance="default"
  >
    {'Default'}
  </StatusHint>
);

export default {
  title: 'Components/StatusHint/Default Status Hint',
  component: StatusHint,
  parameters: {
    docs: {
      docPage: {
        title: 'StatusHint'
      }
    }
  }
};
