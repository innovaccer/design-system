import * as React from 'react';
import Checkbox from '../index';

export const defaultCheckbox = () => (
  <Checkbox
    label="Emergency contact"
    defaultChecked={true}
  />
);

export default {
  title: 'Components/Checkbox/Default Checkbox',
  component: Checkbox,
  parameters: {
    docs: {
      docPage: {
        title: 'Checkbox'
      }
    }
  }
};
