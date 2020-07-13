import * as React from 'react';
import Chip from '../Chip';
import { action } from '@storybook/addon-actions';
export const input = () => (
    <Chip
      label="First Name"
      clearButton={false}
      disabled={false}
      type="input"
      onClose={action(`onClose: ${name}`)}
      onClick={action(`onClose: ${name}`)}
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
