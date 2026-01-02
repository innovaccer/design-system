/* eslint-disable no-console */
import * as React from 'react';
import { SegmentedControl, Text } from '@/index';

export const controlled = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [selectedValue, setSelectedValue] = React.useState('day');

  return (
    <div>
      <SegmentedControl
        activeIndex={activeIndex}
        onChange={(index, value) => {
          setActiveIndex(index);
          setSelectedValue(value);
        }}
      >
        <SegmentedControl.Item label="Day" value="day" />
        <SegmentedControl.Item label="Week" value="week" />
        <SegmentedControl.Item label="Month" value="month" />
      </SegmentedControl>
      <br />
      <div className="mt-4">
        <Text>
          Selected: index: {activeIndex}, value: {selectedValue}
        </Text>
      </div>
    </div>
  );
};

const customCode = `() => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [selectedValue, setSelectedValue] = React.useState('day');

  return (
    <div>
      <SegmentedControl
        activeIndex={activeIndex}
        onChange={(index, value) => {
          console.log('Selected:', { index, value });
          setActiveIndex(index);
          setSelectedValue(value);
        }}
      >
        <SegmentedControl.Item label="Day" value="day" />
        <SegmentedControl.Item label="Week" value="week" />
        <SegmentedControl.Item label="Month" value="month" />
      </SegmentedControl>
      <br />
      <div className="mt-4">
      <Text>Selected: index: {activeIndex}, value: {selectedValue}</Text>
      </div>
    </div>
  );
}`;

export default {
  title: 'Components/SegmentedControl/Controlled',
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
