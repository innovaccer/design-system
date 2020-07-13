import * as React from 'react';
import Chip from '../Chip';
import { action } from '@storybook/addon-actions';
export const selection = () => (
    <Chip
      label="Yes"
      clearButton={false}
      type="selection"
      onClose={action(`onClose: ${name}`)}
      onClick={action(`onClose: ${name}`)}
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
