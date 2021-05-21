import * as React from 'react';
import { Button, Popover } from '@/index';

// CSF format story
export const darkPopover = () => (
    <div className="mb-12">
      <Popover
        position="bottom"
        on="click"
        trigger={<Button appearance="basic">Open Popup</Button>}
        dark={true}
        open={true}
      >
        <div style={{ width: 'var(--spacing-7)' , height:'var(--spacing-7)' }} />
      </Popover>
    </div>
);

export default {
  title: 'Components/Popover/Dark Popover',
  component: Popover,
  parameters: {
    docs: {
      docPage: {
        noHtml: true
      }
    }
  }
};
