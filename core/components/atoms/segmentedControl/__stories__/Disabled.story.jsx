import * as React from 'react';
import { SegmentedControl, SegmentedControlItem } from '@/index';
import { action } from '@/utils/action';

export const disabled = () => {
  return (
    <SegmentedControl onChange={action('on-change')}>
      <SegmentedControl.Item label="Day" />
      <SegmentedControl.Item label="Week" disabled />
      <SegmentedControl.Item label="Month" />
    </SegmentedControl>
  );
};

export default {
  title: 'Components/SegmentedControl/Disabled',
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
