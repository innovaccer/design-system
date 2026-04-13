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
   * ARIA role for the Chat container.
   * Use `"log"` when this element wraps only the message list to enable live-region announcements.
   * Omit when the wrapper also contains input or other non-message UI to avoid noisy announcements.
   */
  role?: string;
  /**
   * ARIA live-region politeness. Only set when `role="log"` is provided.
   */
  'aria-live'?: 'polite' | 'assertive' | 'off';
  /**
   * Accessible label for the container.
   */
  'aria-label'?: string;
}

export const Chat = (props: ChatProps) => {
  const { children, ...rest } = props;
  return (
    <div data-test="DesignSystem-Chat" {...rest}>
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
