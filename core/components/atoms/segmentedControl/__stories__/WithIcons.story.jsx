import * as React from 'react';
import { SegmentedControl, SegmentedControlItem } from '@/index';
import { action } from '@/utils/action';

export const withIcons = () => {
  return (
    <SegmentedControl onChange={action('on-change')}>
      <SegmentedControl.Item label="Day" icon="home" />
      <SegmentedControl.Item label="Week" icon="settings" />
      <SegmentedControl.Item label="Month" icon="person" />
    </SegmentedControl>
  );
};

export default {
  title: 'Components/SegmentedControl/WithIcons',
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
