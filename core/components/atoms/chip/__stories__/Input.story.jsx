import { action } from '@/utils/action';
import * as React from 'react';
import Chip from '../Chip';

export const input = () => (
  <Chip
    label="First Name"
    clearButton={true}
    disabled={false}
    type="input"
    name={'chip'}
    onClick={action('on-click')}
    onClose={action('on-close')}
  />
);

export default {
  title: 'Components/Chip/Chip/Input',
  component: Chip,
  parameters: {
    docs: {
      docPage: {
        title: 'Chip',
      },
    },
  },
};
