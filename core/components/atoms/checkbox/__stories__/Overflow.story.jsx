import * as React from 'react';
import { Checkbox, Column } from '@/index';

export const OverflowBehavior = () => (
  <Column size={4}>
    <Checkbox label="Patient with impaired physical mobility and care deficits." />
  </Column>
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
