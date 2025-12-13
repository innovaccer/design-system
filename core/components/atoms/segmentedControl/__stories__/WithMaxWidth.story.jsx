import * as React from 'react';
import { SegmentedControl, SegmentedControlItem } from '@/index';
import { action } from '@/utils/action';

export const withMaxWidth = () => {
  return (
    <SegmentedControl maxWidth={150} onChange={action('on-change')}>
      <SegmentedControl.Item label="Very Long Option Label That Should Truncate" />
      <SegmentedControl.Item label="Short" />
      <SegmentedControl.Item label="Medium Label" />
    </SegmentedControl>
  );
};

export default {
  title: 'Components/SegmentedControl/WithMaxWidth',
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
