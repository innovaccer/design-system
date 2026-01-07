/* eslint-disable no-console */
import * as React from 'react';
import { SegmentedControl } from '@/index';

// CSF format story
export const all = () => {
  return (
    <SegmentedControl>
      <SegmentedControl.Item label="Day" value="day" />
      <SegmentedControl.Item label="Week" value="week" />
      <SegmentedControl.Item label="Month" value="month" />
    </SegmentedControl>
  );
};

const customCode = `() => {
  return (
    <SegmentedControl>
      <SegmentedControl.Item label="Day" value="day" />
      <SegmentedControl.Item label="Week" value="week" />
      <SegmentedControl.Item label="Month" value="month" />
    </SegmentedControl>
  );
}`;

export default {
  title: 'Components/SegmentedControl/All',
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
