import * as React from 'react';
import StatusHint from '../StatusHint';
export const info = () => {
  return (
    <StatusHint
      appearance="info"
    >
      {'info'.charAt(0).toUpperCase() + 'info'.slice(1)}
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
