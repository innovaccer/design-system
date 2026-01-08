import * as React from 'react';
import { SegmentedControl } from '@/index';
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

const customCode = `() => {
  return (
    <SegmentedControl onChange={(index) => {
      console.log('Selected index:', index);
    }}>
      <SegmentedControl.Item label="Day" />
      <SegmentedControl.Item label="Week" disabled />
      <SegmentedControl.Item label="Month" />
    </SegmentedControl>
  );
}`;

export default {
  title: 'Components/SegmentedControl/Disabled',
  component: SegmentedControl,
  subcomponents: { 'SegmentedControl.Item': SegmentedControl.Item },
  parameters: {
    docs: {
      docPage: {
        title: 'SegmentedControl',
        customCode,
      },
    },
  },
};
