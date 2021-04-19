import * as React from 'react';
import { Message, Text } from '@/index';

// CSF format story
export const successWithoutTitle = () => (
  <Message
    appearance={'success'}
    description="Password updated. Login with your updated credentials."
    actions={(
      <>
        <Text className="cursor-pointer" appearance="link">Action 1</Text>
        <Text className="ml-5 cursor-pointer" appearance="link">Action 2</Text>
      </>
    )}
  />
);

export default {
  title: 'Components/Message/Success Without Title',
  component: Message
};
