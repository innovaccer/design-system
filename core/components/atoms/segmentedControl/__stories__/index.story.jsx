/* eslint-disable no-console */
import * as React from 'react';
import { SegmentedControl, SegmentedControlItem } from '@/index';

// CSF format story
export const all = () => {
  const onChangeHandler = React.useCallback((index) => {
    // eslint-disable-next-line no-console, no-undef
    console.log('Selected index:', index);
  }, []);

  return (
    <SegmentedControl onChange={onChangeHandler}>
      <SegmentedControl.Item label="Day" />
      <SegmentedControl.Item label="Week" />
      <SegmentedControl.Item label="Month" />
    </SegmentedControl>
  );
};

const customCode = `() => {
  const onChangeHandler = (index) => {
    console.log('Selected index:', index);
  };

  return (
    <SegmentedControl onChange={onChangeHandler}>
      <SegmentedControl.Item label="Day" />
      <SegmentedControl.Item label="Week" />
      <SegmentedControl.Item label="Month" />
    </SegmentedControl>
  );
}`;

export default {
  title: 'Components/SegmentedControl/All',
  component: SegmentedControl,
  subcomponents: { 'SegmentedControl.Item': SegmentedControlItem },
  parameters: {
    docs: {
      docPage: {
        title: 'SegmentedControl',
        customCode,
      },
    },
  },
};
