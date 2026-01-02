/* eslint-disable no-console */
import * as React from 'react';
import { SegmentedControl } from '@/index';
import { action } from '@/utils/action';

export const withIcons = () => {
  return (
    <SegmentedControl onChange={action('on-change')}>
      <SegmentedControl.Item label="Day" icon="home" value="day" />
      <SegmentedControl.Item label="Week" icon="settings" value="week" />
      <SegmentedControl.Item label="Month" icon="person" value="month" />
    </SegmentedControl>
  );
};

const customCode = `() => {
  return (
    <SegmentedControl onChange={(index, value) => {
      console.log('Selected:', { index, value });
    }}>
      <SegmentedControl.Item label="Day" icon="home" value="day" />
      <SegmentedControl.Item label="Week" icon="settings" value="week" />
      <SegmentedControl.Item label="Month" icon="person" value="month" />
    </SegmentedControl>
  );
}`;

export default {
  title: 'Components/SegmentedControl/WithIcons',
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
