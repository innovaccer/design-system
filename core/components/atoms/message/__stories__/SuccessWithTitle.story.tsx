import * as React from 'react';
import { Message, Text } from '@/index';

// CSF format story
export const successWithTitle = () => (
  <Message
    appearance={'success'}
    title={'Outreach successfully sent'}
    description="2,340 messages sent."
    actions={(
      <>
        <Text className="cursor-pointer" appearance="link">Action 1</Text>
        <Text className="ml-5 cursor-pointer" appearance="link">Action 2</Text>
      </>
    )}
  />
);

export default {
  title: 'Components/Message/Success With Title',
  component: Message
};
