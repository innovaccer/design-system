import * as React from 'react';
import Chip from '../Chip';
import { action } from '@storybook/addon-actions';
export const actionChip = () => (
  <Chip
    label="First Name"
    clearButton={false}
    disabled={false}
    type="action"
    onClose={action(`onClose: ${name}`)}
    onClick={action(`onClick: ${name}`)}
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
