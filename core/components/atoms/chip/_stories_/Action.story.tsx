import * as React from 'react';
import Chip from '../Chip';
export const actionChip = () => (
  <Chip
    label="First Name"
    clearButton={false}
    disabled={false}
    type="action"
    name={'chip'}
  />
);

export default {
  title: 'Atoms|Chip',
  component: Chip,
  parameters: {
    docs: {
      docPage: {
        title: 'Chip'
      }
    }
  }
};
