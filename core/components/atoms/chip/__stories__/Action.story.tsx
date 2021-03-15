import { action } from '@storybook/addon-actions';
import * as React from 'react';
import Chip from '../Chip';

export const actionChip = () => (
  <Chip
    label="First Name"
    clearButton={false}
    disabled={false}
    type="action"
    name={'chip'}
    onClick={action('on-click')}
  />
);

export default {
  title: 'Components/Chip',
  component: Chip,
  parameters: {
    docs: {
      docPage: {
        title: 'Chip'
      }
    }
  }
};
