import * as React from 'react';
import { SegmentedControl, Heading, Text } from '@/index';
import { action } from '@/utils/action';

export const withCustomContent = () => {
  return (
    <SegmentedControl onChange={action('on-change')}>
      <SegmentedControl.Item>
        <div>
          <Heading size="s" className="mb-2">
            Upload File
          </Heading>
          <Text appearance="subtle" size="small">
            Import data from an existing file or document
          </Text>
        </div>
      </SegmentedControl.Item>
      <SegmentedControl.Item>
        <div>
          <Heading size="s" className="mb-2">
            Create manually
          </Heading>
          <Text appearance="subtle" size="small">
            Start from scratch and build your content step by step
          </Text>
        </div>
      </SegmentedControl.Item>
    </SegmentedControl>
  );
};

const customCode = `() => {
  return (
    <SegmentedControl onChange={(index) => {
      console.log('Selected index:', index);
    }}>
      <SegmentedControl.Item>
        <div>
          <Heading size="s" className="mb-2">
            Upload File
          </Heading>
          <Text appearance="subtle" size="small">
            Import data from an existing file or document
          </Text>
        </div>
      </SegmentedControl.Item>
      <SegmentedControl.Item>
        <div>
          <Heading size="s" className="mb-2">
            Create manually
          </Heading>
          <Text appearance="subtle" size="small">
            Start from scratch and build your content step by step
          </Text>
        </div>
      </SegmentedControl.Item>
    </SegmentedControl>
  );
}`;

export default {
  title: 'Components/SegmentedControl/WithCustomContent',
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
