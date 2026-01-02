/* eslint-disable no-console */
import * as React from 'react';
import { SegmentedControl, Text } from '@/index';
import { action } from '@/utils/action';

export const size = () => {
  return (
    <div className="d-flex flex-column">
      <div className="mb-6">
        <Text>Small</Text>
        <div className="mt-2">
          <SegmentedControl size="small" onChange={action('on-change')}>
            <SegmentedControl.Item label="Day" icon="home" value="day" />
            <SegmentedControl.Item label="Week" icon="settings" value="week" />
            <SegmentedControl.Item label="Month" icon="person" value="month" />
          </SegmentedControl>
        </div>
      </div>
      <div className="mb-6">
        <Text>Regular</Text>
        <div className="mt-2">
          <SegmentedControl size="regular" onChange={action('on-change')}>
            <SegmentedControl.Item label="Day" icon="home" value="day" />
            <SegmentedControl.Item label="Week" icon="settings" value="week" />
            <SegmentedControl.Item label="Month" icon="person" value="month" />
          </SegmentedControl>
        </div>
      </div>
      <div>
        <Text>Large</Text>
        <div className="mt-2">
          <SegmentedControl size="large" onChange={action('on-change')}>
            <SegmentedControl.Item label="Day" icon="home" value="day" />
            <SegmentedControl.Item label="Week" icon="settings" value="week" />
            <SegmentedControl.Item label="Month" icon="person" value="month" />
          </SegmentedControl>
        </div>
      </div>
    </div>
  );
};

const customCode = `() => {
  return (
    <div className="d-flex flex-column">
      <div className="mb-6">
        <Text>Small</Text>
        <div className="mt-2">
          <SegmentedControl size="small" onChange={(index, value) => {
            console.log('Selected:', { index, value });
          }}>
            <SegmentedControl.Item label="Day" icon="home" value="day" />
            <SegmentedControl.Item label="Week" icon="settings" value="week" />
            <SegmentedControl.Item label="Month" icon="person" value="month" />
          </SegmentedControl>
        </div>
      </div>
      <div className="mb-6">
        <Text>Regular</Text>
        <div className="mt-2">
          <SegmentedControl size="regular" onChange={(index, value) => {
            console.log('Selected:', { index, value });
          }}>
            <SegmentedControl.Item label="Day" icon="home" value="day" />
            <SegmentedControl.Item label="Week" icon="settings" value="week" />
            <SegmentedControl.Item label="Month" icon="person" value="month" />
          </SegmentedControl>
        </div>
      </div>
      <div>
        <Text>Large</Text>
        <div className="mt-2">
          <SegmentedControl size="large" onChange={(index, value) => {
            console.log('Selected:', { index, value });
          }}>
            <SegmentedControl.Item label="Day" icon="home" value="day" />
            <SegmentedControl.Item label="Week" icon="settings" value="week" />
            <SegmentedControl.Item label="Month" icon="person" value="month" />
          </SegmentedControl>
        </div>
      </div>
    </div>
  );
}`;

export default {
  title: 'Components/SegmentedControl/Size',
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
