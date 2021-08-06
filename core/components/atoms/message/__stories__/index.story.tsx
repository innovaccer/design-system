import * as React from 'react';
import { select, text } from '@storybook/addon-knobs';
import { Message, Text } from '@/index';

// CSF format story
export const all = () => {
  const appearance = select('appearance', ['default', 'alert', 'info', 'success', 'warning'], undefined);

  const title = text('title', 'Design System');

  const description = text('description', 'Design System is a library of reusable components');

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
  title: 'Components/Message/All',
  component: Message,
};
