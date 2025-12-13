import * as React from 'react';
import { SegmentedControl, SegmentedControlItem } from '@/index';
import { action } from '@/utils/action';

export const uncontrolled = () => {
  return (
    <SegmentedControl onChange={action('on-change')}>
      <SegmentedControl.Item label="Day" />
      <SegmentedControl.Item label="Week" />
      <SegmentedControl.Item label="Month" />
    </SegmentedControl>
  );
};

const customCode = `() => {
  return (
    <SegmentedControl onChange={(index) => {
      console.log('Selected index:', index);
    }}>
      <SegmentedControl.Item label="Day" />
      <SegmentedControl.Item label="Week" />
      <SegmentedControl.Item label="Month" />
    </SegmentedControl>
  );
}`;

export default {
  title: 'Components/SegmentedControl/Uncontrolled',
  component: SegmentedControl,
  subcomponents: { 'SegmentedControl.Item': SegmentedControlItem },
  parameters: {
    docs: {
      docPage: {
        title: 'SegmentedControl',
        customCode,
      },
    },
  },
};
