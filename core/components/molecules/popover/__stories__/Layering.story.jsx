import * as React from 'react';
import { Button, Popover, Dropdown } from '@/index';

// CSF format story
export const layering = () => {
  return (
    <div className="mb-9">
      <Popover position="bottom" on="click" trigger={<Button appearance="basic">Open Popover</Button>} open={false}>
        <div className="" style={{ width: 'var(--spacing-8)', height: 'var(--spacing-8)' }}>
          <Dropdown
            className="p-6 w-50"
            options={[
              { label: 'Draft', value: 'draft' },
              { label: 'In Progress', value: 'in_progress' },
              { label: 'Sent', value: 'sent' },
              { label: 'Scheduled', value: 'scheduled' },
              { label: 'Partially Failed', value: 'partially_failed' },
              { label: 'Completely Failed', value: 'completely_failed' },
            ]}
            placeholder="Status"
          />
        </div>
      </Popover>
    </div>
  );
};

export default {
  title: 'Components/Popover/Layering',
  component: Popover,
  parameters: {
    docs: {
      docPage: {
        noHtml: true,
      },
    },
  },
};
