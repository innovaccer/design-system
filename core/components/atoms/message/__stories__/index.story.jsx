import * as React from 'react';
import { Message, Text } from '@/index';

// CSF format story
export const all = () => {
  const appearance = 'warning';
  const title = 'Design System';
  const description = 'Design System is a library of reusable components';

  return (
    <Message
      appearance={appearance}
      title={title}
      description={description}
      actions={
        <>
          <Text className="cursor-pointer" appearance="link">
            Action 1
          </Text>
          <Text className="ml-5 cursor-pointer" appearance="link">
            Action 2
          </Text>
        </>
      }
    />
  );
};

export default {
  title: 'Indicators/Message/All',
  component: Message,
};
