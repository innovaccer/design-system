import * as React from 'react';
import { Message, LinkButton } from '@/index';

// CSF format story
export const MessageWithActions = () => (
  <Message
    className="w-50"
    appearance="alert"
    description="Sorry we couldn't subscribe you. Please try again."
    actions={<LinkButton>Try again</LinkButton>}
  />
);

export default {
  title: 'Components/Message/Message With Actions',
  component: Message,
};
