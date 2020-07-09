import * as React from 'react';
import StatusHint from '../StatusHint';

export const defaultStatusHint = () => {

  return (
    <StatusHint
      appearance="default"
    >
      {'default'.charAt(0).toUpperCase() + 'default'.slice(1)}
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
