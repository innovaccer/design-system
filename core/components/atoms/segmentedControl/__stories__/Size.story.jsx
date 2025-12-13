import * as React from 'react';
import { SegmentedControl, SegmentedControlItem, Text } from '@/index';
import { action } from '@/utils/action';

export const size = () => {
  return (
    <div className="d-flex flex-column">
      <div className="mb-6">
        <Text>Small</Text>
        <div className="mt-2">
          <SegmentedControl size="small" onChange={action('on-change')}>
            <SegmentedControl.Item label="Day" icon="home" />
            <SegmentedControl.Item label="Week" icon="settings" />
            <SegmentedControl.Item label="Month" icon="person" />
          </SegmentedControl>
        </div>
      </div>
      <div className="mb-6">
        <Text>Regular</Text>
        <div className="mt-2">
          <SegmentedControl size="regular" onChange={action('on-change')}>
            <SegmentedControl.Item label="Day" icon="home" />
            <SegmentedControl.Item label="Week" icon="settings" />
            <SegmentedControl.Item label="Month" icon="person" />
          </SegmentedControl>
        </div>
      </div>
      <div>
        <Text>Large</Text>
        <div className="mt-2">
          <SegmentedControl size="large" onChange={action('on-change')}>
            <SegmentedControl.Item label="Day" icon="home" />
            <SegmentedControl.Item label="Week" icon="settings" />
            <SegmentedControl.Item label="Month" icon="person" />
          </SegmentedControl>
        </div>
      </div>
    </div>
  );
};

export default {
  title: 'Components/SegmentedControl/Size',
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
