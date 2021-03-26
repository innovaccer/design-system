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
  title: 'Components/Checkbox/Default Checked With Label',
  component: Checkbox,
  parameters: {
    docs: {
      docPage: {
        title: 'Checkbox'
      }
    }
  }
};
