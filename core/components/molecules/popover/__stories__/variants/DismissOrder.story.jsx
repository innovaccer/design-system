import * as React from 'react';
import { Text, Button, Popover, Tooltip } from '@/index';
import '../style.css';

/**
 * **Dismiss order (Overlay Manager)**
 * When multiple overlays are open (e.g. one on click, one on hover), the Overlay Manager
 * controls stacking and dismiss order: the topmost overlay closes first (Escape, backdrop click).
 * Open both popovers to see the behavior.
 */
export const DismissOrderOverlayManager = () => {
  return (
    <div className="p-6 flex align-items-center flex-nowrap">
      <span className="mr-12">
        <Popover
          position="bottom"
          on="click"
          trigger={<Button appearance="basic">1. Click here</Button>}
          closeOnBackdropClick
        >
          <div className="p-5 pb-6 pr-10">
            <Text weight="strong">3. Press escape</Text>
            <br />
            <Tooltip
              position="right"
              tooltip="Hover me for tooltip text that appears in the tooltip when the line is truncated."
            >
              <Text className="mt-4 d-block ellipsis--noWrap" style={{ maxWidth: 'var(--spacing-440)' }}>
                Hover me for tooltip text that appears in the tooltip when the line is truncated.
              </Text>
            </Tooltip>
            <Popover
              position="right"
              on="click"
              trigger={
                <Button appearance="basic" className="mt-4">
                  Open inner popover
                </Button>
              }
              closeOnBackdropClick
            >
              <div className="p-5 pb-6 pr-10">
                <Text weight="strong">Inner (higher z)</Text>
                <Text className="mt-4 d-block">Escape closes this first, then the parent.</Text>
              </div>
            </Popover>
          </div>
        </Popover>
      </span>

      <Popover position="bottom" on="hover" trigger={<Button appearance="basic">2. Hover here</Button>} hoverable>
        <div className="p-5 pb-6 pr-10">
          <Text weight="strong">2. Hover here</Text>
          <Text className="mt-4 d-block">Opened by hover. Closes on Escape or mouse leave.</Text>
        </div>
      </Popover>
    </div>
  );
};

DismissOrderOverlayManager.storyName = 'Popover Dismiss Order';

const customCode = `() => (
  <div className="p-6 flex align-items-center flex-nowrap">
      <span className="mr-12">
        <Popover position="bottom" on="click" trigger={<Button appearance="basic">1. Click here</Button>} closeOnBackdropClick>
          <div className="p-5 pb-6 pr-10">
            <Text weight="strong">3. Press escape</Text>
            <br />
            <Tooltip position="right" tooltip="Hover me for tooltip text that appears in the tooltip when the line is truncated.">
              <Text className="mt-4 d-block ellipsis--noWrap" style={{ maxWidth: 'var(--spacing-440)' }}>
                Hover me for tooltip text that appears in the tooltip when the line is truncated.
              </Text>
            </Tooltip>
            <Popover position="right" on="click" trigger={<Button appearance="basic" className="mt-4">Open inner popover</Button>} closeOnBackdropClick>
              <div className="p-5 pb-6 pr-10">
                <Text weight="strong">Inner (higher z)</Text>
                <Text className="mt-4 d-block">Escape closes this first, then the parent.</Text>
              </div>
            </Popover>
          </div>
        </Popover>
      </span>
      <Popover position="bottom" on="hover" trigger={<Button appearance="basic">2. Hover here</Button>} hoverable>
        <div className="p-5 pb-6 pr-10">
          <Text weight="strong">2. Hover here</Text>
          <Text className="mt-4 d-block">Opened by hover. Closes on Escape or mouse leave.</Text>
        </div>
      </Popover>
  </div>
)`;

export default {
  title: 'Components/Popover/Popover Dismiss Order',
  component: Popover,
  parameters: {
    docs: {
      docPage: {
        title: 'Popover Dismiss Order',
        description: 'When several popovers (or tooltips) are open, the topmost overlay closes first on Escape.',
        customCode,
        props: {
          exclude: ['offset'],
        },
      },
    },
  },
};
