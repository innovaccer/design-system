import * as React from 'react';
import { SegmentedControl, SegmentedControlItem } from '@/index';
import { action } from '@/utils/action';

export const withTooltips = () => {
  return (
    <SegmentedControl onChange={action('on-change')}>
      <SegmentedControl.Item label="Day" tooltip="This is day" />
      <SegmentedControl.Item label="Week" tooltip="This is week" />
      <SegmentedControl.Item label="Month" tooltip="This is month" />
    </SegmentedControl>
  );
};

export default {
  title: 'Components/SegmentedControl/WithTooltips',
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
