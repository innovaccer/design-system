import * as React from 'react';
import { Text, Button, Popover } from '@/index';

// CSF format story
export const popoverWithAction = () => (
  <div className="mb-10">
    <Popover
      position="bottom-start"
      on="click"
      trigger={<Button appearance="basic">Open Popover</Button>}
      open={false}
      className="w-25"
    >
      <div className="m-6">
        <Text>You have some edits saved in draft state.You can resume editing or discard those changes.</Text>
        <div className="d-flex">
          <Button className="mt-4" appearance="primary">
            Edit Registry
          </Button>
          <Button className="mt-4 ml-4" appearance="basic">
            Discard Changes
          </Button>
        </div>
      </div>
    </Popover>
  </div>
);

export default {
  title: 'Components/Popover/Popover With Action',
  component: Popover,
  parameters: {
    docs: {
      docPage: {
        noHtml: true,
      },
    },
  },
};
