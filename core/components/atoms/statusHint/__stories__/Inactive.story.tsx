import * as React from 'react';
import StatusHint from '../StatusHint';
export const inactive = () => (
    <StatusHint
      appearance="alert"
    >
      {'Inactive'.charAt(0).toUpperCase() + 'Inactive'.slice(1)}
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
