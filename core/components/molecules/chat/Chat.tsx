import * as React from 'react';
import DateSeparator from './dateSeparator';
import UnreadMessage from './unreadMessage';
import NewMessage from './newMessage';
import TypingIndicator from './typingIndicator';
import ChatBubble from './chatBubble';
import ChatInput from './chatInput/ChatInput';
import { BaseProps } from '@/utils/types';

export interface ChatProps extends BaseProps {
  /**
   * React Node to be rendered inside `Chat`
   */
  children: React.ReactNode;
  /**
   * Accessible label for the chat log region (SC 1.3.1)
   */
  'aria-label'?: string;
}

export const Chat = (props: ChatProps) => {
  const { children, ...rest } = props;
  return (
    <div data-test="DesignSystem-Chat" role="log" aria-live="polite" {...rest}>
      {children}
    </div>
  );
};

Chat.DateSeparator = DateSeparator;
Chat.UnreadMessage = UnreadMessage;
Chat.NewMessage = NewMessage;
Chat.TypingIndicator = TypingIndicator;
Chat.ChatBubble = ChatBubble;
Chat.ChatInput = ChatInput;

export default Chat;
