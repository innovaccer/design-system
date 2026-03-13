import * as React from 'react';
import { SegmentedControl } from '@/index';
import { action } from '@/utils/action';

export const iconOnly = () => {
  return (
    <SegmentedControl onChange={action('on-change')}>
      <SegmentedControl.Item icon="home" aria-label="Home" />
      <SegmentedControl.Item icon="settings" aria-label="Settings" />
      <SegmentedControl.Item icon="person" aria-label="Profile" />
    </SegmentedControl>
  );
};

const customCode = `() => {
  return (
    <SegmentedControl onChange={(index) => {
      console.log('Selected index:', index);
    }}>
      <SegmentedControl.Item icon="home" aria-label="Home" />
      <SegmentedControl.Item icon="settings" aria-label="Settings" />
      <SegmentedControl.Item icon="person" aria-label="Profile" />
    </SegmentedControl>
  );
}`;

export default {
  title: 'Components/SegmentedControl/IconOnly',
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
