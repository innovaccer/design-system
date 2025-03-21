import * as React from 'react';
import { Checkbox, Label } from '@/index';

export const OverflowBehavior = () => (
  <div className="d-flex flex-column">
    <div className="mb-5">
      <Label>Wrap Enabled:</Label>
      <Checkbox className="w-25" label="Patient with impaired physical mobility and care deficits." wrapLabel={true} />
    </div>
    <div>
      <Label>Wrap Disabled (Truncate):</Label>
      <Checkbox className="w-25" label="Patient with impaired physical mobility and care deficits." />
    </div>
  </div>
);

export default {
  title: 'Components/Checkbox/Overflow Behavior',
  component: Checkbox,
  parameters: {
    docs: {
      docPage: {
        title: 'Checkbox',
      },
    },
  },
};
