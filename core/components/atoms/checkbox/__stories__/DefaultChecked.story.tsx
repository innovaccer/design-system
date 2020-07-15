import * as React from 'react';
import Checkbox from '../index';

export const defaultChecked = () => (
  <Checkbox
    defaultChecked={true}
    size="regular"
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
