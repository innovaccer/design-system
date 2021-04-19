import * as React from 'react';
import { Message, Text } from '@/index';
// CSF format story
export const warning = () => (
  <Message
    appearance={'warning'}
    description="You must ask the owner to invite viewers."
    actions={(
      <>
        <Text className="cursor-pointer" appearance="link">Action 1</Text>
        <Text className="ml-5 cursor-pointer" appearance="link">Action 2</Text>
      </>
    )}
  />
);

export default {
  title: 'Components/Message/Warning',
  component: Message
};
