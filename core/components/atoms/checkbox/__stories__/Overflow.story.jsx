import * as React from 'react';
import { Checkbox } from '@/index';

export const OverflowBehavior = () => (
  <Checkbox className="w-25" label="Patient with impaired physical mobility and care deficits." />
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
