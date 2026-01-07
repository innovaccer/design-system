import * as React from 'react';
import { SegmentedControl } from '@/index';
import { action } from '@/utils/action';

export const withMaxWidth = () => {
  return (
    <SegmentedControl maxWidth="150px" onChange={action('on-change')}>
      <SegmentedControl.Item label="Very Long Option Label That Should Truncate" />
      <SegmentedControl.Item label="Short" />
      <SegmentedControl.Item label="Medium Label" />
    </SegmentedControl>
  );
};

const customCode = `() => {
  return (
    <SegmentedControl maxWidth="150px" onChange={(index) => {
      console.log('Selected index:', index);
    }}>
      <SegmentedControl.Item label="Very Long Option Label That Should Truncate" />
      <SegmentedControl.Item label="Short" />
      <SegmentedControl.Item label="Medium Label" />
    </SegmentedControl>
  );
}`;

export default {
  title: 'Components/SegmentedControl/WithMaxWidth',
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
