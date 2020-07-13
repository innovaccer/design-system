import * as React from 'react';
import StatusHint from '../StatusHint';
export const completed = () => (
    <StatusHint
      appearance="success"
    >
      {'Completed'.charAt(0).toUpperCase() + 'Completed'.slice(1)}
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
