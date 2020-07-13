import * as React from 'react';
import StatusHint from '../StatusHint';
export const ongoing = () => (
    <StatusHint
      appearance="warning"
    >
      {'Ongoing'.charAt(0).toUpperCase() + 'Ongoing'.slice(1)}
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
