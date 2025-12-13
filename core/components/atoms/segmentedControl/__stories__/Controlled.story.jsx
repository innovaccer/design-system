import * as React from 'react';
import { SegmentedControl, SegmentedControlItem } from '@/index';

export const controlled = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  return (
    <SegmentedControl
      activeIndex={activeIndex}
      onChange={(index) => {
        setActiveIndex(index);
      }}
    >
      <SegmentedControl.Item label="Day" />
      <SegmentedControl.Item label="Week" />
      <SegmentedControl.Item label="Month" />
    </SegmentedControl>
  );
};

const customCode = `() => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  return (
    <SegmentedControl
      activeIndex={activeIndex}
      onChange={(index) => {
        setActiveIndex(index);
      }}
    >
      <SegmentedControl.Item label="Day" />
      <SegmentedControl.Item label="Week" />
      <SegmentedControl.Item label="Month" />
    </SegmentedControl>
  );
}`;

export default {
  title: 'Components/SegmentedControl/Controlled',
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
