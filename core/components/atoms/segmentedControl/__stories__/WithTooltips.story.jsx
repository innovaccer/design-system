import * as React from 'react';
import { SegmentedControl } from '@/index';
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

const customCode = `() => {
  return (
    <SegmentedControl onChange={(index) => {
      console.log('Selected index:', index);
    }}>
      <SegmentedControl.Item label="Day" tooltip="This is day" />
      <SegmentedControl.Item label="Week" tooltip="This is week" />
      <SegmentedControl.Item label="Month" tooltip="This is month" />
    </SegmentedControl>
  );
}`;

export default {
  title: 'Components/SegmentedControl/WithTooltips',
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
