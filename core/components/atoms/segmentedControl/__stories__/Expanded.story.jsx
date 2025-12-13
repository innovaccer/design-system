import * as React from 'react';
import { SegmentedControl, SegmentedControlItem } from '@/index';
import { action } from '@/utils/action';

export const expanded = () => {
  return (
    <SegmentedControl expanded onChange={action('on-change')}>
      <SegmentedControl.Item label="Day" />
      <SegmentedControl.Item label="Week" />
      <SegmentedControl.Item label="Month" />
    </SegmentedControl>
  );
};

export default {
  title: 'Components/SegmentedControl/Expanded',
  component: SegmentedControl,
  subcomponents: { 'SegmentedControl.Item': SegmentedControlItem },
  parameters: {
    docs: {
      docPage: {
        title: 'SegmentedControl',
      },
    },
  },
};
