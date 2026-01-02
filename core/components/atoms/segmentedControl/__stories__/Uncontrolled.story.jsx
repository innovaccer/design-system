/* eslint-disable no-console */
import * as React from 'react';
import { SegmentedControl } from '@/index';
import { action } from '@/utils/action';

export const uncontrolled = () => {
  return (
    <SegmentedControl onChange={action('on-change')}>
      <SegmentedControl.Item label="Day" value="day" />
      <SegmentedControl.Item label="Week" value="week" />
      <SegmentedControl.Item label="Month" value="month" />
    </SegmentedControl>
  );
};

const customCode = `() => {
  return (
    <SegmentedControl onChange={(index, value) => {
      console.log('Selected:', { index, value });
    }}>
      <SegmentedControl.Item label="Day" value="day" />
      <SegmentedControl.Item label="Week" value="week" />
      <SegmentedControl.Item label="Month" value="month" />
    </SegmentedControl>
  );
}`;

export default {
  title: 'Components/SegmentedControl/Uncontrolled',
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
