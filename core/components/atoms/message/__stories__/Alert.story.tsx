import * as React from 'react';
import { Message, Text } from '@/index';

// CSF format story
export const alert = () => (
  <Message
    appearance={'alert'}
    title={'Could not change the email address'}
    description="Try again. In case the issue persists please raise a ticket."
    actions={(
      <>
        <Text className="cursor-pointer" appearance="link">Action 1</Text>
        <Text className="ml-5 cursor-pointer" appearance="link">Action 2</Text>
      </>
    )}
  />
);

export default {
  title: 'Components/Message/Alert',
  component: Message
};
