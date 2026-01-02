/* eslint-disable no-console */
import * as React from 'react';
import { SegmentedControl } from '@/index';
import { action } from '@/utils/action';

export const expanded = () => {
  return (
    <SegmentedControl expanded onChange={action('on-change')}>
      <SegmentedControl.Item label="Day" value="day" />
      <SegmentedControl.Item label="Week" value="week" />
      <SegmentedControl.Item label="Month" value="month" />
    </SegmentedControl>
  );
};

const customCode = `() => {
  return (
    <SegmentedControl expanded onChange={(index, value) => {
      console.log('Selected:', { index, value });
    }}>
      <SegmentedControl.Item label="Day" value="day" />
      <SegmentedControl.Item label="Week" value="week" />
      <SegmentedControl.Item label="Month" value="month" />
    </SegmentedControl>
  );
}`;

export default {
  title: 'Components/SegmentedControl/Expanded',
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
