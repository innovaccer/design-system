import * as React from 'react';
import { SegmentedControl, SegmentedControlItem, Avatar } from '@/index';
import { action } from '@/utils/action';

export const withCustomContent = () => {
  return (
    <SegmentedControl onChange={action('on-change')}>
      <SegmentedControl.Item>
        <div className="d-flex align-items-center">
          <Avatar firstName="John" lastName="Doe" size="tiny" withTooltip={false} className="mr-2" />
          <span>John Doe</span>
        </div>
      </SegmentedControl.Item>
      <SegmentedControl.Item>
        <div className="d-flex align-items-center">
          <Avatar firstName="Jane" lastName="Smith" size="tiny" withTooltip={false} className="mr-2" />
          <span>Jane Smith</span>
        </div>
      </SegmentedControl.Item>
      <SegmentedControl.Item>
        <div className="d-flex align-items-center">
          <Avatar firstName="Bob" lastName="Johnson" size="tiny" withTooltip={false} className="mr-2" />
          <span>Bob Johnson</span>
        </div>
      </SegmentedControl.Item>
    </SegmentedControl>
  );
};

export default {
  title: 'Components/SegmentedControl/WithCustomContent',
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
