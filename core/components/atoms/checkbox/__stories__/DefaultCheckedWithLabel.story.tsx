import * as React from 'react';
import Checkbox from '../index';

export const defaultCheckedWithLabel = () => (
  <Checkbox
    defaultChecked={true}
    size="regular"
    label="Label"
  />
);

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
