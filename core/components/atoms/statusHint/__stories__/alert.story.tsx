import * as React from 'react';
import StatusHint from '../StatusHint';
export const alert = () => {

  return (
    <StatusHint
      appearance="alert"
    >
      {'alert'.charAt(0).toUpperCase() + 'alert'.slice(1)}
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
