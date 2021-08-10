import * as React from 'react';
import { Checkbox, Label } from '@/index';

export const CheckboxGroup = () => (
  <div>
    <Label>Problems</Label>
    <Checkbox label="Cardiovascular" defaultChecked={true} />
    <Checkbox label="Obesity" defaultChecked={true} className="mt-5" />
    <Checkbox label="Patient has language barriers" className="mt-5" />
    <Checkbox label="Mental and behavioral health conditions" className="mt-5" />
  </div>
);

export default {
  title: 'Components/Checkbox/Checkbox Group',
  component: Checkbox,
  parameters: {
    docs: {
      docPage: {
        title: 'Checkbox',
      },
    },
  },
};
