import * as React from 'react';
import { Message, LinkButton } from '@/index';

// CSF format story
export const all = () => {
  const title = 'Design System';
  const description = 'Design System is a library of reusable components';

  return (
    <Message
      title={title}
      description={description}
      actions={
        <>
          <LinkButton>Action 1</LinkButton>
          <LinkButton className="ml-5">Action 2</LinkButton>
        </>
      }
    />
  );
};

export default {
  title: 'Components/Message/All',
  component: Message,
};
