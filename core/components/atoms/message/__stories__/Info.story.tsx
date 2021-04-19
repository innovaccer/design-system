import * as React from 'react';
import { Message, Text } from '@/index';

// CSF format story
export const info = () => (
  <Message
    appearance={'info'}
    description="Reevaluate the entry after submission"
    actions={(
      <>
        <Text className="cursor-pointer" appearance="link">Action 1</Text>
        <Text className="ml-5 cursor-pointer" appearance="link">Action 2</Text>
      </>
    )}
  />
);

export default {
  title: 'Components/Message/Info',
  component: Message
};
