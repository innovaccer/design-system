import * as React from 'react';
import { text } from '@storybook/addon-knobs';
import Checkbox from '../index';

export const defaultCheckbox = () => {
  const label = text(
    'label',
    'Checkbox'
  );
  return (
    <Checkbox
      defaultChecked={true}
      disabled={false}
      size="regular"
      label={label}
    />
  );
};

export default {
  title: 'Atoms|Checkbox',
  component: Checkbox,
  parameters: {
    docs: {
      docPage: {
        title: 'Checkbox'
      }
    }
  }
};
