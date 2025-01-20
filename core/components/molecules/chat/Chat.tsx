import * as React from 'react';
import DateSeparator from './dateSeparator';
import NewMessage from './newMessage';
import UnreadMessage from './unreadMessage';
import TypingIndicator from './typingIndicator';
import { BaseProps } from '@/utils/types';

export interface ChatProps extends BaseProps {
  /**
   * Children to be rendered
   */
  children: React.ReactNode;
}

export const Chat = (props: ChatProps) => {
  return <div data-test="DesignSystem-Chat">{props.children}</div>;
};

Chat.DateSeparator = DateSeparator;
Chat.NewMessage = NewMessage;
Chat.UnreadMessage = UnreadMessage;
Chat.TypingIndicator = TypingIndicator;

export default Chat;
