import * as React from 'react';
import { Checkbox, Label } from '@/index';

// CSF format story
export const disabled = () => {
  const label = 'Checkbox';
  return (
    <div className="d-flex">
      <div className="mr-7">
        <Label withInput={true}>Checked</Label>
        <Checkbox aria-label="Checkbox checked" checked={true} disabled={true} label={label} />
      </div>
      <div className="mr-7">
        <Label withInput={true}>Unchecked</Label>
        <Checkbox aria-label="Checkbox unchecked" checked={false} disabled={true} label={label} />
      </div>
      <div>
        <Label withInput={true}>Indeterminate</Label>
        <Checkbox aria-label="Checkbox indeterminate" indeterminate={true} disabled={true} label={label} />
      </div>
    </div>
  );
};

export default {
  title: 'Components/Checkbox/Variants/Disabled',
  component: Checkbox,
  parameters: {
    docs: {
      docPage: {
        title: 'Checkbox',
      },
    },
  },
};
