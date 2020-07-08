import * as React from 'react';
import StatusHint from '../StatusHint';
export const success = () => {
  return (
    <StatusHint
      appearance="success"
    >
      {'success'.charAt(0).toUpperCase() + 'success'.slice(1)}
    </StatusHint>
  );
};

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
