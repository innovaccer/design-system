import * as React from 'react';
import { SegmentedControl, SegmentedControlItem } from '@/index';
import { action } from '@/utils/action';

export const iconOnly = () => {
  return (
    <SegmentedControl onChange={action('on-change')}>
      <SegmentedControl.Item icon="home" />
      <SegmentedControl.Item icon="settings" />
      <SegmentedControl.Item icon="person" />
    </SegmentedControl>
  );
};

export default {
  title: 'Components/SegmentedControl/IconOnly',
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
