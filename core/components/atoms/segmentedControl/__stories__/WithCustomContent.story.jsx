import * as React from 'react';
import { SegmentedControl, Avatar, Text } from '@/index';
import { action } from '@/utils/action';

export const withCustomContent = () => {
  return (
    <SegmentedControl onChange={action('on-change')}>
      <SegmentedControl.Item>
        <div className="d-flex align-items-center">
          <Avatar firstName="John" lastName="Doe" size="tiny" withTooltip={false} className="mr-3" />
          <Text>John Doe</Text>
        </div>
      </SegmentedControl.Item>
      <SegmentedControl.Item>
        <div className="d-flex align-items-center">
          <Avatar firstName="Jane" lastName="Smith" size="tiny" withTooltip={false} className="mr-3" />
          <Text>Jane Smith</Text>
        </div>
      </SegmentedControl.Item>
      <SegmentedControl.Item>
        <div className="d-flex align-items-center">
          <Avatar firstName="Bob" lastName="Johnson" size="tiny" withTooltip={false} className="mr-3" />
          <Text>Bob Johnson</Text>
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
        <div className="d-flex align-items-center">
          <Avatar firstName="John" lastName="Doe" size="tiny" withTooltip={false} className="mr-3" />
          <Text>John Doe</Text>
        </div>
      </SegmentedControl.Item>
      <SegmentedControl.Item>
        <div className="d-flex align-items-center">
          <Avatar firstName="Jane" lastName="Smith" size="tiny" withTooltip={false} className="mr-3" />
          <Text>Jane Smith</Text>
        </div>
      </SegmentedControl.Item>
      <SegmentedControl.Item>
        <div className="d-flex align-items-center">
          <Avatar firstName="Bob" lastName="Johnson" size="tiny" withTooltip={false} className="mr-3" />
          <Text>Bob Johnson</Text>
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
