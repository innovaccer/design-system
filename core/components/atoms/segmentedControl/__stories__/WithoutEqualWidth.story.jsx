import * as React from 'react';
import { SegmentedControl } from '@/index';
import { action } from '@/utils/action';

export const withoutEqualWidth = () => {
  return (
    <SegmentedControl isEqualWidth={false} onChange={action('on-change')}>
      <SegmentedControl.Item label="Very Long Option Label" />
      <SegmentedControl.Item label="Short" />
      <SegmentedControl.Item label="Medium Label" />
    </SegmentedControl>
  );
};

const customCode = `() => {
  return (
    <SegmentedControl isEqualWidth={false} onChange={(index) => {
      console.log('Selected index:', index);
    }}>
      <SegmentedControl.Item label="Very Long Option Label" />
      <SegmentedControl.Item label="Short" />
      <SegmentedControl.Item label="Medium Label" />
    </SegmentedControl>
  );
}`;

export default {
  title: 'Components/SegmentedControl/WithoutEqualWidth',
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
