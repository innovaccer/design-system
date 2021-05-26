import * as React from 'react';
import { Checkbox, Label } from '@/index';

export const CheckboxGroup = () => (
  <div>
    <Label>
      Problems
    </Label>
    <Checkbox
      label="Cardiovascular"
      defaultChecked={true}
    />
    <Checkbox
      label="Obesity"
      defaultChecked={true}
    />
    <Checkbox
      label="Patient has language barriers"
    />
    <Checkbox
      label="Mental and behavioral health conditions"
    />
  </div>
);

export default {
  title: 'Components/Checkbox/Checkbox Group',
  component: Checkbox,
  parameters: {
    docs: {
      docPage: {
        title: 'Checkbox'
      }
    }
  }
};
