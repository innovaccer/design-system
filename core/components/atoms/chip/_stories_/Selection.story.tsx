import * as React from 'react';
import Chip from '../Chip';
export const selection = () => (
    <Chip
      label="Yes"
      clearButton={false}
      type="selection"
      selected={false}
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
